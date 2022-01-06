import { readFileSync, readdirSync } from 'fs';
var idPerfix = '';
var svgTitle = /<svg([^>+].*?)>/;
var clearHeightWidth = /(width|height)="([^>+].*?)"/g;
var hasViewBox = /(viewBox="[^>+].*?")/g;
var clearReturn = /(\r)|(\n)/g;
function findSvgFile(dir) {
    var svgRes = [];
    var dirents = readdirSync(dir, {
        withFileTypes: true
    });
    var _loop_1 = function (dirent) {
        if (dirent.isDirectory()) {
            svgRes.push.apply(svgRes, findSvgFile(dir + dirent.name + '/'));
        }
        else {
            var svg = readFileSync(dir + dirent.name)
                .toString()
                .replace(clearReturn, '')
                .replace(svgTitle, function ($1, $2) {
                // console.log(++i)
                // console.log(dirent.name)
                var width = 0;
                var height = 0;
                var content = $2.replace(clearHeightWidth, function (s1, s2, s3) {
                    if (s2 === 'width') {
                        width = s3;
                    }
                    else if (s2 === 'height') {
                        height = s3;
                    }
                    return '';
                });
                if (!hasViewBox.test($2)) {
                    content += "viewBox=\"0 0 ".concat(width, " ").concat(height, "\"");
                }
                return "<symbol id=\"".concat(idPerfix, "-").concat(dirent.name.replace('.svg', ''), "\" ").concat(content, ">");
            })
                .replace('</svg>', '</symbol>');
            svgRes.push(svg);
        }
    };
    for (var _i = 0, dirents_1 = dirents; _i < dirents_1.length; _i++) {
        var dirent = dirents_1[_i];
        _loop_1(dirent);
    }
    return svgRes;
}
export var svgBuilder = function (path, perfix) {
    if (perfix === void 0) { perfix = 'icon'; }
    if (path === '')
        return;
    idPerfix = perfix;
    var res = findSvgFile(path);
    // console.log(res.length)
    // const res = []
    return {
        name: 'svg-transform',
        transformIndexHtml: function (html) {
            return html.replace('<body>', "\n          <body>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"position: absolute; width: 0; height: 0\">\n              ".concat(res.join(''), "\n            </svg>\n        "));
        }
    };
};
//# sourceMappingURL=index.js.map
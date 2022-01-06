import { __awaiter, __generator } from "tslib";
/**
 * ------------------------------------------------------------------
 * Demo-Api module
 * @data 2021-10-01
 * @author WaltChan<1814638551@qq.com>
 * ------------------------------------------------------------------
 */
import axios from '../utils/request';
import { useAppStore } from '../store/app';
// 调用函数 获取store
var appStore = useAppStore();
/**
 * 分页查询设备列表
 * Test api about table list
 * @param data
 * http://192.168.2.128/manager/busEquipment/findAll?pageNum=1&pageSize=20
 */
export function fetchList(data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appStore.changeLayoutSpin(true);
                    return [4 /*yield*/, axios.request('/busEquipment/findAll', {
                            data: data
                        })];
                case 1:
                    res = _a.sent();
                    appStore.changeLayoutSpin(false);
                    return [2 /*return*/, res];
            }
        });
    });
}
/**
 * 删除设备列表项
 * Delete row api
 * http://localhost:9912/manager/busEquipment/deleteEquipment
 */
export function deleteEquipment(data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appStore.changeLayoutSpin(true);
                    return [4 /*yield*/, axios.request('/busEquipment/deleteEquipment', {
                            data: data
                        })];
                case 1:
                    res = _a.sent();
                    appStore.changeLayoutSpin(false);
                    return [2 /*return*/, res];
            }
        });
    });
}
/**
 * Upload file api
 * @param data
 */
export function uploadFile(data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.request('/manager/file/upload?businessId=adfafg', {
                        data: data
                    })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
/**
 * 分页查询故障类别列表
 * Test api about table list
 * @param data
 *  http://192.168.2.128/manager/faultDict/findAll
 */
export function fetchList2(data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appStore.changeLayoutSpin(true);
                    return [4 /*yield*/, axios.request('/faultDict/findAll', {
                            data: data
                        })];
                case 1:
                    res = _a.sent();
                    appStore.changeLayoutSpin(false);
                    return [2 /*return*/, res];
            }
        });
    });
}
/**
 * 删除故障列表项
 * Delete row api
 * http://localhost:9912/manager/faultDict/deleteFaultDict
 */
export function deleteFaultDict(data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appStore.changeLayoutSpin(true);
                    return [4 /*yield*/, axios.request('/faultDict/deleteFaultDict', {
                            data: data
                        })];
                case 1:
                    res = _a.sent();
                    appStore.changeLayoutSpin(false);
                    return [2 /*return*/, res];
            }
        });
    });
}
/**
 * 新增故障分类
 * Add row api
 */
export function addFaultDict(data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appStore.changeLayoutSpin(true);
                    return [4 /*yield*/, axios.request('/faultDict/addFaultDict', {
                            data: data
                        })];
                case 1:
                    res = _a.sent();
                    appStore.changeLayoutSpin(false);
                    return [2 /*return*/, res];
            }
        });
    });
}
//# sourceMappingURL=demo-api.js.map
/**
 * Created by WaltChan 2021/10
 */

export interface TableBaseParamsProps {
    pageNum: number;
    pageSize: number;
}

export interface HandleBaseResProps {
    code: number;
    message: string;
    data?: null
}

export interface TableBaseResProps {
    records: any[];
    size: number;
    current: number;
    total: number;
    pages: number;
}

export interface TableDeleteParamsProps {
    records: number[];
}


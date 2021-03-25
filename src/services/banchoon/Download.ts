// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/Download/CargoCliqueReportTool */
export async function POSTGetCargoCliqueReportTool(options?: { [key: string]: any }) {
  return request<any>('/api/Download/CargoCliqueReportTool', {
    method: 'POST',
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/DeliveryNotesReport */
export async function POSTGetReport(
  params: {
    // query
    reportFormat?: string;
  },
  body?: API.DeliveryNotesReportParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/DeliveryNotesReport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

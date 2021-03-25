// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/CTLabelPrinter */
export async function GETGetListing(options?: { [key: string]: any }) {
  return request<API.CTLabelPrinterDtoIEnumerableApiResponse>('/api/CTLabelPrinter', {
    method: 'GET',
    responseType: 'text',
    ...(options || {}),
  });
}

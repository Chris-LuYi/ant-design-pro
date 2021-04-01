// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/SystemSetting */
export async function GETGetSystemSetting(
  params: {
    // query
    key?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.SystemSettingDtoApiResponse>('/api/SystemSetting', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/SystemSetting/All */
export async function GETGetAllSystemSetting(options?: { [key: string]: any }) {
  return request<API.SystemSettingDtoIAsyncEnumerableApiResponse>('/api/SystemSetting/All', {
    method: 'GET',
    responseType: 'text',
    ...(options || {}),
  });
}

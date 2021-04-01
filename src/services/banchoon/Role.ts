// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/Role */
export async function GETGetByCriteria(
  params: {
    // query
    Name?: string;
    IsActive?: boolean;
    Sorting?: API.Sorting[];
    PageSize?: number;
    Current?: number;
    Total?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RoleListDtoIAsyncEnumerablePaginationResultApiResponse>('/api/Role', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

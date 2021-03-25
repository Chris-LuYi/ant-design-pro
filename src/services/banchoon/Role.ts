// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/Role */
export async function GETGetByCriteria(
  params: {
    // query
    Name?: string;
    IsActive?: boolean;
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RoleListDtoSearchResultApiResponse>('/api/Role', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

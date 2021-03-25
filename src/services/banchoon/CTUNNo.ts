// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/CTUNNo */
export async function GETGetListing(
  params: {
    // query
    Code?: string;
    IsActive?: boolean;
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.KeyValuePairDtoSearchResultApiResponse>('/api/CTUNNo', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

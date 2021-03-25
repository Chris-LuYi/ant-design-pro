// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/CodeTable/${param0} */
export async function GETGetByCriteria(
  params: {
    // query
    Code?: string;
    IsActive?: boolean;
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
    // path
    ctname: string;
  },
  options?: { [key: string]: any },
) {
  const { ctname: param0, ...queryParams } = params;
  return request<API.KeyValuePairDtoSearchResultApiResponse>(`/api/CodeTable/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/CodeTable/CTPort */
export async function GETGetCTPort(
  params: {
    // query
    CountryOrPort?: string;
    CountryCode?: string;
    CountryDisplayValue?: string;
    PortCode?: string;
    PortDisplayValue?: string;
    IsActive?: boolean;
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.KeyValuePairDtoSearchResultApiResponse>('/api/CodeTable/CTPort', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

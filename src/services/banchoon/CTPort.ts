// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/CTPort */
export async function GETGetListing(
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
  return request<API.CTPortDtoSearchResultApiResponse>('/api/CTPort', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/CTPort */
export async function PUTUpdatePort(body?: API.CTPortDto, options?: { [key: string]: any }) {
  return request<API.CTPortDtoApiResponse>('/api/CTPort', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/CTPort */
export async function POSTCreatePort(body?: API.CTPortDto, options?: { [key: string]: any }) {
  return request<API.CTPortDtoApiResponse>('/api/CTPort', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

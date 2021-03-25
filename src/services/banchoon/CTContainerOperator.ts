// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/CTContainerOperator */
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
  return request<API.CTContainerOperatorDtoSearchResultApiResponse>('/api/CTContainerOperator', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/CTContainerOperator */
export async function PUTUpdate(
  body?: API.CTContainerOperatorDto,
  options?: { [key: string]: any },
) {
  return request<API.CTContainerOperatorDtoApiResponse>('/api/CTContainerOperator', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/CTContainerOperator */
export async function POSTCreate(
  body?: API.CTContainerOperatorDto,
  options?: { [key: string]: any },
) {
  return request<API.CTContainerOperatorDtoApiResponse>('/api/CTContainerOperator', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

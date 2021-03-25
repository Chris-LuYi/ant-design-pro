// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/UNNoIMOClass */
export async function GETGetListing(
  params: {
    // query
    Code?: string;
    IMOClassIds?: string[];
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.UNNoIMOClassDtoSearchResultApiResponse>('/api/UNNoIMOClass', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/UNNoIMOClass */
export async function PUTUpdate(body?: API.UNNoIMOClassDto, options?: { [key: string]: any }) {
  return request<API.UNNoIMOClassDtoApiResponse>('/api/UNNoIMOClass', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/UNNoIMOClass */
export async function POSTCreate(body?: API.UNNoIMOClassDto, options?: { [key: string]: any }) {
  return request<API.UNNoIMOClassDtoApiResponse>('/api/UNNoIMOClass', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/UNNoIMOClass/Import */
export async function POSTImport(options?: { [key: string]: any }) {
  return request<any>('/api/UNNoIMOClass/Import', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/UNNoIMOClass/Export */
export async function GETExport(options?: { [key: string]: any }) {
  return request<any>('/api/UNNoIMOClass/Export', {
    method: 'GET',
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/Tenant */
export async function GETGetByCriteria(
  params: {
    // query
    TenantName?: string;
    TenantPSAAccountNumber?: string;
    IsActive?: boolean;
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.TenantDtoSearchResultApiResponse>('/api/Tenant', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Tenant */
export async function PUTUpdateTenant(body?: API.TenantDto, options?: { [key: string]: any }) {
  return request<API.TenantDtoApiResponse>('/api/Tenant', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Tenant */
export async function POSTCreateTenant(body?: API.TenantDto, options?: { [key: string]: any }) {
  return request<API.TenantDtoApiResponse>('/api/Tenant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Tenant/${param0} */
export async function GETGetTenant(
  params: {
    // path
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<API.TenantDtoApiResponse>(`/api/Tenant/${param0}`, {
    method: 'GET',
    params: { ...params },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Tenant/Hauliers */
export async function GETGetHaulierList(options?: { [key: string]: any }) {
  return request<API.TenantHaulierDtoSearchResultApiResponse>('/api/Tenant/Hauliers', {
    method: 'GET',
    responseType: 'text',
    ...(options || {}),
  });
}

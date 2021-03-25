// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/Transporter */
export async function GETGetByCriteria(
  params: {
    // query
    Name?: string;
    CompanyName?: string;
    PSAPassNumber?: string;
    ContactNumber?: string;
    IsActive?: boolean;
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.TransporterDtoSearchResultApiResponse>('/api/Transporter', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/Transporter */
export async function PUTUpdateTransporter(
  body?: API.TransporterDto,
  options?: { [key: string]: any },
) {
  return request<API.TransporterDtoApiResponse>('/api/Transporter', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Transporter */
export async function POSTCreateTransporter(
  body?: API.TransporterDto,
  options?: { [key: string]: any },
) {
  return request<API.TransporterDtoApiResponse>('/api/Transporter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Transporter/${param0} */
export async function GETGetTransporter(
  params: {
    // path
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<API.TransporterDtoApiResponse>(`/api/Transporter/${param0}`, {
    method: 'GET',
    params: { ...params },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Transporter/Validate/${param0} */
export async function POSTValidateTransporterPSAPassNumber(
  params: {
    // path
    transporterPSAPassNumber: string;
  },
  options?: { [key: string]: any },
) {
  const { transporterPSAPassNumber: param0 } = params;
  return request<API.BooleanApiResponse>(`/api/Transporter/Validate/${param0}`, {
    method: 'POST',
    params: { ...params },
    responseType: 'text',
    ...(options || {}),
  });
}

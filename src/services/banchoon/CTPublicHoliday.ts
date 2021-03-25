// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/CTPublicHoliday */
export async function GETGetListing(
  params: {
    // query
    Name?: string;
    StartDate?: string;
    EndDate?: string;
    IsActive?: boolean;
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.CTPublicHolidayDtoSearchResultApiResponse>('/api/CTPublicHoliday', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/CTPublicHoliday */
export async function PUTUpdateHoliday(
  body?: API.CTPublicHolidayDto,
  options?: { [key: string]: any },
) {
  return request<API.CTPublicHolidayDtoApiResponse>('/api/CTPublicHoliday', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/CTPublicHoliday */
export async function POSTCreateHoliday(
  body?: API.CTPublicHolidayDto,
  options?: { [key: string]: any },
) {
  return request<API.CTPublicHolidayDtoApiResponse>('/api/CTPublicHoliday', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

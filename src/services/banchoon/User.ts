// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/User/current */
export async function GETCurrent(options?: { [key: string]: any }) {
  return request<API.UserInfoApiResponse>('/api/User/current', {
    method: 'GET',
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/User/current */
export async function PUTUpdateCurrent(
  body?: API.CurrentUserDto,
  options?: { [key: string]: any },
) {
  return request<API.CurrentUserDtoApiResponse>('/api/User/current', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/User/ChangePassword */
export async function PUTChangePassword(
  body?: API.ChangePasswordRequestDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/User/ChangePassword', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/User/ForgetPassword */
export async function PUTForgetPassword(
  body?: API.ForgetPasswordDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/User/ForgetPassword', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/User/ResetPassword */
export async function PUTResetPassword(
  body?: API.ResetPasswordDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/User/ResetPassword', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/User */
export async function GETGetByCriteria(
  params: {
    // query
    TenantId?: string;
    Name?: string;
    ContactNumber?: string;
    PSAAccountNumber?: string;
    IsActive?: boolean;
    IsPSAUser?: boolean;
    Sorting?: API.SortingDto[];
    Total?: number;
    PageSize?: number;
    Current?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserListDtoSearchResultApiResponse>('/api/User', {
    method: 'GET',
    params: {
      ...params,
    },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/User */
export async function PUTUpdateUser(body?: API.UserDto, options?: { [key: string]: any }) {
  return request<API.UserDtoApiResponse>('/api/User', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/User */
export async function POSTCreateUser(body?: API.UserDto, options?: { [key: string]: any }) {
  return request<API.UserDtoApiResponse>('/api/User', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/User/${param0} */
export async function GETGetUser(
  params: {
    // path
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<API.UserDtoApiResponse>(`/api/User/${param0}`, {
    method: 'GET',
    params: { ...params },
    responseType: 'text',
    ...(options || {}),
  });
}

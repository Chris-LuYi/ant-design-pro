// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /api/File/${param0} */
export async function POSTUpload(
  params: {
    // path
    fileCategory: string;
  },
  options?: { [key: string]: any },
) {
  const { fileCategory: param0 } = params;
  return request<API.FileUploadResultDtoListApiResponse>(`/api/File/${param0}`, {
    method: 'POST',
    params: { ...params },
    responseType: 'text',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/File/${param0} */
export async function GETDownload(
  params: {
    // path
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<any>(`/api/File/${param0}`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/File/${param0} */
export async function DELETEDelete(
  params: {
    // path
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<any>(`/api/File/${param0}`, {
    method: 'DELETE',
    params: { ...params },
    ...(options || {}),
  });
}

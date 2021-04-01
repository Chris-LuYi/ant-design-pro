// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/CodeTable/${param0} */
export async function GETGetByCriteria(
  params: {
    // query
    Code?: string;
    IsActive?: boolean;
    Sorting?: API.Sorting[];
    PageSize?: number;
    Current?: number;
    Total?: number;
    // path
    ctname: string;
  },
  options?: { [key: string]: any },
) {
  const { ctname: param0, ...queryParams } = params;
  return request<API.KeyValuePairDtoIAsyncEnumerablePaginationResultApiResponse>(
    `/api/CodeTable/${param0}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      responseType: 'text',
      ...(options || {}),
    },
  );
}

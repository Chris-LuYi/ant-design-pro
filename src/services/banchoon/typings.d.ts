// @ts-ignore
/* eslint-disable */

declare namespace API {
  type ApiStatusCode = 0 | 1 | 2 | 3 | 4;

  type ChangePasswordRequestDto = {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };

  type CurrentUserDto = {
    id?: string;
    userName?: string;
    name?: string;
    email?: string;
    contactNumber?: string;
    isActive?: boolean;
    lastPasswordChange?: string;
    roles?: RoleDto[];
  };

  type CurrentUserDtoApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: CurrentUserDto;
  };

  type DeliveryNotesReportParams = {
    cargoId?: string;
  };

  type FileUploadResultDto = {
    fileName?: string;
    fileExtension?: string;
    fileSize?: number;
    id?: string;
    url?: string;
  };

  type FileUploadResultDtoListApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: FileUploadResultDto[];
  };

  type ForgetPasswordDto = {
    email?: string;
  };

  type KeyValuePairDto = {
    id?: string;
    recordVersion?: string;
    code?: string;
    name?: string;
  };

  type KeyValuePairDtoIAsyncEnumerablePaginationResult = {
    data?: KeyValuePairDto[];
    pagination?: Pagination;
  };

  type KeyValuePairDtoIAsyncEnumerablePaginationResultApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: KeyValuePairDtoIAsyncEnumerablePaginationResult;
  };

  type Pagination = {
    pageSize?: number;
    current?: number;
    total?: number;
  };

  type ResetPasswordDto = {
    newPassword?: string;
    confirmPassword?: string;
    token?: string;
  };

  type RoleDto = {
    id?: string;
    recordVersion?: string;
    name?: string;
    normalizedName?: string;
    concurrencyStamp?: string;
    isActive?: boolean;
    description?: string;
  };

  type RoleListDto = {
    id?: string;
    recordVersion?: string;
    name?: string;
    isActive?: boolean;
  };

  type RoleListDtoIAsyncEnumerablePaginationResult = {
    data?: RoleListDto[];
    pagination?: Pagination;
  };

  type RoleListDtoIAsyncEnumerablePaginationResultApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: RoleListDtoIAsyncEnumerablePaginationResult;
  };

  type Sorting = {
    sortBy?: string;
    order?: string;
  };

  type SystemSettingDto = {
    id?: string;
    recordVersion?: string;
    settingKey?: string;
    settingValue?: string;
    dataType?: string;
  };

  type SystemSettingDtoApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: SystemSettingDto;
  };

  type SystemSettingDtoIAsyncEnumerableApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: SystemSettingDto[];
  };

  type UserDto = {
    id?: string;
    recordVersion?: string;
    userName?: string;
    name?: string;
    lastLoginDate?: string;
    email?: string;
    contactNumber?: string;
    psaAccountNumber?: string;
    tenantId?: string;
    isActive?: boolean;
    roleId?: string;
  };

  type UserDtoApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: UserDto;
  };

  type UserInfo = {
    user?: CurrentUserDto;
    accessRights?: string[];
  };

  type UserInfoApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: UserInfo;
  };

  type UserListDto = {
    id?: string;
    recordVersion?: string;
    userName?: string;
    name?: string;
    email?: string;
    contactNumber?: string;
    role?: string;
    isActive?: boolean;
  };

  type UserListDtoIAsyncEnumerablePaginationResult = {
    data?: UserListDto[];
    pagination?: Pagination;
  };

  type UserListDtoIAsyncEnumerablePaginationResultApiResponse = {
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
    data?: UserListDtoIAsyncEnumerablePaginationResult;
  };
}

// @ts-ignore
/* eslint-disable */

declare namespace API {
  type SortingDto = {
    sortBy?: string;
    order?: string;
  };

  type KeyValuePairDto = {
    code?: string;
    name?: string;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type KeyValuePairDtoSearchResult = {
    data?: KeyValuePairDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type ApiStatusCode = 0 | 1 | 2 | 3 | 4;

  type KeyValuePairDtoSearchResultApiResponse = {
    data?: KeyValuePairDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CTContainerOperatorDto = {
    code?: string;
    displayValue?: string;
    description?: string;
    sortOrder?: number;
    isActive?: boolean;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type CTContainerOperatorDtoSearchResult = {
    data?: CTContainerOperatorDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type CTContainerOperatorDtoSearchResultApiResponse = {
    data?: CTContainerOperatorDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CTContainerOperatorDtoApiResponse = {
    data?: CTContainerOperatorDto;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CTLabelPrinterDto = {
    code?: string;
    displayValue?: string;
    printerIPAddress?: string;
    isActive?: boolean;
    sortOrder?: number;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type CTLabelPrinterDtoIEnumerableApiResponse = {
    data?: CTLabelPrinterDto[];
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CTPortDto = {
    countryCode?: string;
    countryDisplayValue?: string;
    portCode?: string;
    portDisplayValue?: string;
    isActive?: boolean;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type CTPortDtoSearchResult = {
    data?: CTPortDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type CTPortDtoSearchResultApiResponse = {
    data?: CTPortDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CTPortDtoApiResponse = {
    data?: CTPortDto;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CTPublicHolidayDto = {
    code?: string;
    displayValue?: string;
    dateFrom?: string;
    dateTo?: string;
    isActive?: boolean;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type CTPublicHolidayDtoSearchResult = {
    data?: CTPublicHolidayDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type CTPublicHolidayDtoSearchResultApiResponse = {
    data?: CTPublicHolidayDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CTPublicHolidayDtoApiResponse = {
    data?: CTPublicHolidayDto;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type RoleListDto = {
    name?: string;
    isActive?: boolean;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type RoleListDtoSearchResult = {
    data?: RoleListDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type RoleListDtoSearchResultApiResponse = {
    data?: RoleListDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type TenantHaulierDto = {
    tenantId?: string;
    haulierName?: string;
    haulierContactNumber?: string;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type TenantDto = {
    tenantPSAAccountNumber?: string;
    tenantName?: string;
    tenantCode?: string;
    tenantContactPerson?: string;
    tenantContactNumber?: string;
    tenantEmail?: string;
    tenantFaxNumber?: string;
    isActive?: boolean;
    tenantHaulier?: TenantHaulierDto[];
    roleIds?: string[];
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type TenantDtoSearchResult = {
    data?: TenantDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type TenantDtoSearchResultApiResponse = {
    data?: TenantDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type TenantDtoApiResponse = {
    data?: TenantDto;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type TenantHaulierDtoSearchResult = {
    data?: TenantHaulierDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type TenantHaulierDtoSearchResultApiResponse = {
    data?: TenantHaulierDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type TransporterDto = {
    name?: string;
    companyName?: string;
    psaPassNumber?: string;
    contactNumber?: string;
    isActive?: boolean;
    rfidNumber?: string;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type TransporterDtoSearchResult = {
    data?: TransporterDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type TransporterDtoSearchResultApiResponse = {
    data?: TransporterDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type TransporterDtoApiResponse = {
    data?: TransporterDto;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type BooleanApiResponse = {
    data?: boolean;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CTSubRiskDto = {
    unNoIMOClassId?: string;
    imoClassId?: string;
    riskLevel?: number;
    isActive?: boolean;
    sortOrder?: number;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type UNNoIMOClassDto = {
    unNoId?: string;
    imoClassId?: string;
    properShippingName?: string;
    technicalName?: string;
    fpFrom?: string;
    fpTo?: string;
    packingGroupId?: string;
    psaGroupId?: string;
    handlingTypeId?: string;
    subRisk1IMOClassId?: string;
    subRisk2IMOClassId?: string;
    unNoCode?: string;
    unNoDisplayValue?: string;
    isActive?: boolean;
    imoClassDisplayValue?: string;
    subRisk1DisplayValue?: string;
    subRisk2DisplayValue?: string;
    packingGroupDisplayValue?: string;
    psaGroupDisplayValue?: string;
    handlingTypeDisplayValue?: string;
    isDirectHandling?: boolean;
    isSpecialDG?: boolean;
    subRisk?: CTSubRiskDto[];
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type UNNoIMOClassDtoSearchResult = {
    data?: UNNoIMOClassDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type UNNoIMOClassDtoSearchResultApiResponse = {
    data?: UNNoIMOClassDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type UNNoIMOClassDtoApiResponse = {
    data?: UNNoIMOClassDto;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type RoleDto = {
    name?: string;
    normalizedName?: string;
    concurrencyStamp?: string;
    isActive?: boolean;
    description?: string;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type CurrentUserDto = {
    id?: string;
    userName?: string;
    name?: string;
    email?: string;
    contactNumber?: string;
    psaAccountNumber?: string;
    tenantId?: string;
    managedTenantId?: string;
    isActive?: boolean;
    lastPasswordChange?: string;
    roles?: RoleDto[];
  };

  type UserInfo = {
    user?: CurrentUserDto;
    accessRights?: string[];
    tenant?: TenantDto;
    isTenant?: boolean;
  };

  type UserInfoApiResponse = {
    data?: UserInfo;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type CurrentUserDtoApiResponse = {
    data?: CurrentUserDto;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type ChangePasswordRequestDto = {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };

  type ForgetPasswordDto = {
    email?: string;
  };

  type ResetPasswordDto = {
    newPassword?: string;
    confirmPassword?: string;
    token?: string;
  };

  type UserListDto = {
    userName?: string;
    name?: string;
    email?: string;
    contactNumber?: string;
    role?: string;
    tenantName?: string;
    isActive?: boolean;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type UserListDtoSearchResult = {
    data?: UserListDto[];
    total?: number;
    pageSize?: number;
    current?: number;
  };

  type UserListDtoSearchResultApiResponse = {
    data?: UserListDtoSearchResult;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };

  type UserDto = {
    userName?: string;
    name?: string;
    lastLoginDate?: string;
    email?: string;
    contactNumber?: string;
    psaAccountNumber?: string;
    tenantId?: string;
    managedTenantId?: string;
    isActive?: boolean;
    roleId?: string;
    id?: string;
    isDeleted?: boolean;
    recordVersion?: string;
  };

  type UserDtoApiResponse = {
    data?: UserDto;
    requestId?: string;
    status?: ApiStatusCode;
    message?: string;
    detailsErrorMessage?: string;
  };
}

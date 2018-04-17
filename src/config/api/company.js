export default {
	//查询单个企业信息
	COMPANY_INFO: 'gateway/company/companyReadRpcService/findCompanyInfo/3fc2fd582c2d4f80847877b8078b1731',
	//编辑企业信息
	UPDATE_COMPANY: 'gateway/company/companyWriteRpcService/updateCompanyInfo/9a93cffd4d7c4429a404866d8648ca3d',
//供应商管理
	//获取供应商列表
	PARTNER_LIST: 'gateway/company/partnerReadRpcService/findProviderList/6785f3a0933a4012ac5eeaa0a1668738',
	//查询单个供应商
	PROVIDER_INFO: 'gateway/company/partnerReadRpcService/findProvider/a31b3cd7139c40bfb68e333d337dedc6',
	//编辑供应商
	UPDATE_PROVIDER: 'gateway/company/partnerWriteRpcService/updateProvider/9982c0686cf64c6ab49b88a247d00186',
	//新增供应商
	ADD_PROVIDER: 'gateway/company/partnerWriteRpcService/addProvider/9a4d299fe77e49c6a838a50e68e49586',
	//删除供应商/客户
	DELETE_PROVIDER: 'gateway/company/partnerWriteRpcService/delCompanyPartner/984a9114905b4cef9c838bc212285df3',
//员工管理
	//获取员工列表
	STAFF_LIST: 'gateway/user/baseinfoPersonCompanyOrgReadRpcService/queryPersonPage/9a9f3ba2411348148e138580563df4f2',
	//查询单个员工
	STAFF_INFO: 'gateway/user/baseinfoPersonCompanyOrgReadRpcService/queryAdminPersonInfoByPersonIdComId/dd036ff1eda146e4bd03482d55056fb5',
	//新增员工
	ADD_STAFF: 'gateway/user/baseinfoPersonCompanyOrgWriteRpcService/addAppPerson/b1fa22023c344c5599b01c7650330200',
	//编辑员工
	EDIT_STAFF: 'gateway/user/baseinfoPersonCompanyOrgWriteRpcService/appAdminUpdatePersonByPersonId/d2a235615fdf49f69d42c468789a136b',
	//删除员工
	DELETE_STAFF: 'gateway/user/baseinfoPersonCompanyOrgWriteRpcService/personDisable/00e5b31bf0f54f3db5e860893074aa3f',
}
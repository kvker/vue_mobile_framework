export default {
	// 账号登录接口
	ACCOUNT_LOGIN: 'gateway/login/checkLogin',
	// 账号验证码登录接口
	ACCOUNT_VER_LOGIN: 'gateway/login/checkMobile',
	// 账号请求验证码
	ACCOUNT_SEND_VER: 'msg/msg/send',
	// 账号注册
	ACCOUNT_REGIST: 'gateway/user/baseinfoPersonCompanyOrgWriteRpcService/enrollPerson/c1c9468431aa463897bcedb8ad49d30b',
	// 获取业务类型
	ACCOUNT_TYPES: 'gateway/item/sysGoodsCategoryRpcService/findFirstLevelGoodsCategoryList/ddfbc6fad4cb40be8fb95a97a972a1dc',
	// 获取经营类目
	ACCOUNT_CATEGORYS: 'gateway/item/sysGoodsCategoryRpcService/findFirstLevelGoodsCategoryList/ddfbc6fad4cb40be8fb95a97a972a1dc',
	// 发送密码至手机
	// ACCOUNT_SEND_PASSWORD: 'gateway/user/baseinfoPersonCompanyOrgWriteRpcService/forgetPassword/9babf42e17834ec89e3e56ada07f0554',
	ACCOUNT_SEND_PASSWORD: 'mmt/user/modify_pass',
}
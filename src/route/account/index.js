export default [
  // { path: 'forget', component: Forget },
  { path: 'login', component: () => import('page/account/login.vue'), alias: '', children: [
		{ path: '', component: () => import('page/common/empty.vue') },
		{ path: 'forget', component: () => import('page/account/forget.vue') },
		{ path: 'regist', component: () => import('page/account/regist.vue'), children: [
			{ path: '', component: () => import('page/common/empty.vue') },
			{ path: 'type_single', component: () => import('page/common/type_single.vue') },
			{ path: 'type_multiple', component: () => import('page/common/type_multiple.vue') },
			{ path: 'delegate', component: () => import('page/common/delegate.vue') },
		]},
	] },
]
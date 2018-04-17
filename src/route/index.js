import account from './account/index'
import core from './core/index'

module.exports = new VueRouter({
	routes: [
		{ path: '/welcome', component: () => import('page/welcome/index.vue'), alias: '' },
		{ path: '/account', component: () => import('page/account/index.vue'), children: account },
		{ path: '/core', component: () => import('page/core/index.vue'), children: core },

		// 下面是调试用的
	],
	// mode : 'history'
})

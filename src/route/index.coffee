import welcome from 'page/welcome/index.vue'
import accountVue from 'page/account/index.vue'
import coreVue from 'page/core/index.vue'
import account from './account/index'
import core from './core/index'

export default new VueRouter(
	routes: [
		{
			path: '/welcome'
			component: welcome
			alias: ''
		}
		{
			path: '/account'
			component: accountVue
			children: account
		}
		{
			path: '/core'
			component: coreVue
			children: core
		}
	]
	# mode : 'history'
)

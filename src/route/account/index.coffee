import login from 'page/account/login.vue'
import empty from 'page/common/empty.vue'
import forget from 'page/account/forget.vue'
import regist from 'page/account/regist.vue'
import type_single from 'page/common/type_single.vue'
import type_multiple from 'page/common/type_multiple.vue'
import delegate from 'page/common/delegate.vue'

export default [
	{
		path: 'login'
		component: login
		alias: ''
		children: [
			{
				path: ''
				component: empty
			}
			{
				path: 'forget'
				component: forget
			}
			{
				path: 'regist'
				component: regist
				children: [
					{
						path: ''
						component: empty
					}
					{
						path: 'type_single'
						component: type_single
					}
					{
						path: 'type_multiple'
						component: type_multiple
					}
					{
						path: 'delegate'
						component: delegate
					}
				]
			}
		]
	}
]
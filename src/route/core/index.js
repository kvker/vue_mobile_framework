export default [
	{ path: 'homepage', component: () => import('core/homepage/index.vue') },
	{ path: 'bill', component: () => import('core/bill/index.vue') },
	{ path: 'inventory', component: () => import('core/inventory/index.vue') },
	{ path: 'more', component: () => import('core/more/index.vue') },
	{ path: 'procurement', component: () => import('core/procurement/index.vue') },
	{ path: 'statistics', component: () => import('core/statistics/index.vue') },
]
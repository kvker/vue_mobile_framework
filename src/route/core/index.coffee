import homepage from 'core/homepage/index.vue'
import bill from 'core/bill/index.vue'
import inventory from 'core/inventory/index.vue'
import more from 'core/more/index.vue'
import procurement from 'core/procurement/index.vue'

export default [
	{
		path: 'homepage'
		component: homepage
	}
	{
		path: 'bill'
		component: bill
	}
	{
		path: 'inventory'
		component: inventory
	}
	{
		path: 'more'
		component: more
	}
	{
		path: 'procurement'
		component: procurement
	}
]
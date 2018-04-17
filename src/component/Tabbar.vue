<template lang="pug">
footer#tabbar
	.bar-item(
		v-for="(item, index) of items" :key="index"
		@click="clickItem(index)"
		:class="current===index?'active':''"
	) 
		i.iconfont(v-html="item.icon" :class="item.class")
		span {{item.name}}
</template>

<script>
export default {
	data() {
		return {
			// 底部 Tabbar 参数
			items: [{
				name: '首页',
				path: '/core/homepage',
				icon: '&#xe604;',
				class: 'f17'
			},
			{
				name: '采购',
				path: '/core/procurement',
				icon: '&#xe60e;',
				class: 'f15'
			},
			{
				name: '销售',
				path: '/core/bill',
				icon: '&#xe611;',
				class: 'f17'
			},
			{
				name: '库存',
				path: '/core/inventory',
				icon: '&#xe65c;',
			},
			// {
			// 	name: '统计',
			// 	path: '/core/statistics',
			// },
			{
				name: '管理',
				path: '/core/more',
				icon: '&#xe610;',
				class: 'f17'
			}],
			current: 0
		}
	},
	mounted() {
		if(location.hash.split('/').length > 2) return

		try {
			this.clickItem(0)
		} catch (error) {
			log(error)
		}
	},
	methods: {
		clickItem(index) {
			this.current = index;
			try {
				let item = this.items[index]
				this.$emit('clickItem', item)
			} catch (err) {
				console.log(err)
			}
		}
	}
}
</script>

<style lang="less" scoped>
#tabbar {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	background-color: #fafafa;
	.bar-item {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		flex: 1;
		height: .52rem;
		color: rgba(0,0,0,0.45);
		&.active{
			color: #FF4063;
		}
		span{
			font-size: 11px;
		}
	}
}
</style>


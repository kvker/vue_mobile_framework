export default {
	data: ->
		return
			transitionName: ''
			routerObj: {} # 路由默认参数
	watch:
		'$route':
			handler: 'handleRoute'
	methods: Object.assign(
		Vuex.mapMutations(['resetStates']) # 注册根 mutation
		routerCallback: ->
			console.log('default routerCallback')
		handleRoute: (to, from) ->
			toDepth = to.path.split('/').length
			fromDepth = from.path.split('/').length
			if to.path is '/'
				this.transitionName = 'pop'
			else if from.path is '/'
				this.transitionName = 'push'
			else
				if toDepth > fromDepth
					this.transitionName = 'push'
				else if toDepth is fromDepth
					this.transitionName = ''
				else
					this.transitionName = 'pop'
	)
	# @author zwei
	# 页面销毁前执行清理 state 事件
	beforeDestroy: ->
		this.resetStates {
			storePath: this.storePath
		}
}
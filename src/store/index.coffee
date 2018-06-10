# @author zwei
# 根据路径递归获取当前销毁页面的 state
# @param {Object} state 递归当前的 state
# @param {Array} storePaths 递归当前的路径拆分数组
# @return 返回当前销毁页面的 state
getRealState = (state, storePaths) ->
	if storePaths.length > 0
		currentState = state[storePaths[0]]
		return getRealState currentState, storePaths.slice 1
	else
		return state

export default new Vuex.Store(
	modules: {}
	state:
		# 全局用户信息
		userinfo: {}
	getters: {}
	mutations:
		# @author zwei
		# 重置当前销毁页面的 state
		# @param {Object} state 根 state
		# @param {Object} payload 含有关键的路径参数 storePath
		resetStates: (state, payload) ->
			return if !payload.storePath

			storePaths = payload.storePath.split '/'
			realState = getRealState(state, storePaths)

			if realState.initState and typeof realState.initState is 'function'
				initState = realState.initState null
				for key in initState
					realState[key] = initState[key] if initState.hasOwnProperty key
	actions: {}
)
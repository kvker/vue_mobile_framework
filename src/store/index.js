// import account from './account/index'
// import core from './core/index'

/**@author zwei
 * 根据路径递归获取当前销毁页面的 state
 * @param {Object} state 递归当前的 state
 * @param {Array} storePaths 递归当前的路径拆分数组
 * @return 返回当前销毁页面的 state
 */
const getRealState = (state, storePaths) => {
	if(storePaths.length > 0) {
		let currentState = state[storePaths[0]]
		return getRealState(currentState, storePaths.slice(1))
	}
	else {
		return state
	}
}

module.exports = new Vuex.Store({
	modules: {
		// account,
		// core,
	},
  state: {
		// 全局用户信息
    userinfo: {},
  },
  getters: {
  },
  mutations: {
		/**@author zwei
		 * 重置当前销毁页面的 state
		 * @param {Object} state 根 state
		 * @param {Object} payload 含有关键的路径参数 storePath
		 */
		resetStates(state, payload) {
			if(!payload.storePath) return

			let storePaths = payload.storePath.split('/')
			let realState = getRealState(state, storePaths)

			if(realState.initState && typeof realState.initState === 'function') {
				let initState = realState.initState()
				for (const key in initState) {
					if (initState.hasOwnProperty(key)) {
						realState[key] = initState[key];
					}
				}
			}
		}
  },
  actions: {

  }
})
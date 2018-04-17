export default {
  data() {
    return {
			transitionName: '',
			routerObj: {}, // 路由默认参数
    }
  },
  watch: {
    '$route': {
			handler: 'handleRoute'
		}
	},
	methods: {
		...Vuex.mapMutations(['resetStates']), // 注册根 mutation
		routerCallback() {
			console.log('default routerCallback')
		},
		/**@author zwei
		 * 路由切换动画控制
		 * @param {Object} to 前往的路由
		 * @param {Object} from 之前的路由
		 */
		handleRoute(to, from) {
			const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (to.path === '/') this.transitionName = 'pop'
      else if (from.path === '/') this.transitionName = 'push'
      else {
        if (toDepth > fromDepth) this.transitionName = 'push'
        else if (toDepth === fromDepth) this.transitionName = ''
        else this.transitionName = 'pop'
			}
		}
	},
	/**@author zwei
	 * 页面销毁前执行清理 state 事件
	 */
	beforeDestroy() {
		this.resetStates({
			storePath: this.storePath
		})
	}
}
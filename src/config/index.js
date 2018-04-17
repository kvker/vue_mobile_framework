// iHappy 2018-3-9 赵越

import util from 'src/util'
import api from './api/index'

/**
 * @module 初始化与全局配置模块
 * @return {object} 全局配置
 */
module.exports = (function () {
	// 初始化
	(function init() {
		// 配置 log
		window.log = message => console.log(message)
		window.util = util

		Array.prototype.remove = function (item) {
			let index = this.indexOf(item)
			this.splice(index, 1)
		}
	})()

	// 配置参数
	return {
		api
	}
})()
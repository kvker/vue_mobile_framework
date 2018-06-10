import util from 'src/util'
import api from './api/index'

# 初始化与全局配置模块
window.log = (message) ->
	console.log message
window.util = util

Array::remove = (item) ->
	index = this.indexOf(item)
	this.splice(index, 1)

# 全局配置
export default {
	api
}
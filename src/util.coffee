import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'

export default {
	md5
	# @author zwei
	# 字符串数字累加
	# @param {Array} array 字符串数字数组
	# @return {Number} 至少是 0
	addNumbers: (array) ->
		total = 0
		for item in array
			if !parseInt item
				continue
			else
			total += parseInt item
		total
	get: (path, data, payload) ->
		this.request('get', path, data, payload)
	post: (path, data, payload) ->
		this.request('post', path, data, payload)
	# @author zwei
	# axios 请求封装
	# @param {String} method 请求方式
	# @param {String} path 请求 path
	# @param {Object} data 请求数据
	# @param {Object} payload 其他
	request: (method, path, data, payload) ->
		host = 'http://dev.yl9158.com/'
		url = host + path
		isGet = method is 'get'

		axios.request({
			url
			data
			method
			params: isGet ? data : undefined
			transformRequest: [
				data ->
					qs.stringify(data)
			]
			headers:
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			# 配置跨域携带 Cookie
			withCredentials: true
		})
			.then((res) ->
				rData = res.data

				rData = JSON.parse(rData) if typeof rData isnt 'object'

				if rData.success
					return rData.module
				else if rData.errCode is '10002'
					alert('账号错误')
					location.href = '/'
					return
				else
					alert(rData.errMsg) if(rData.errMsg)
			)
			.catch(err ->
				log(err)
			)
}
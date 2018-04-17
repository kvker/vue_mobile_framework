import axios from 'axios';
import qs from 'qs';
import md5 from 'md5';

export default {
	md5,
	/**@author zwei
	 * 字符串数字累加
	 * @param {Array} array 字符串数字数组
	 * @return {Number} 至少是 0
	 */
	addNumbers(array) {
		let total = 0
		for (const item of array) {
			if(!parseInt(item)) continue
			else total += parseInt(item)
		}
		return total
	},
	/**@author zwei
	 * GET 请求封装
	 * @param {String} path 请求 path
	 * @param {Object} data 请求数据
	 * @param {Object} payload 其他
	 */
	get(path, data, payload) {
		return this.request('get', path, data, payload)
	},
	/**@author zwei
	 * POST 请求封装
	 * @param {String} path 请求 path
	 * @param {Object} data 请求数据
	 * @param {Object} payload 其他
	 */
	post(path, data, payload) {
		return this.request('post', path, data, payload)
	},
	/**@author zwei
	 * DELETE 请求封装
	 * @param {String} path 请求 path
	 * @param {Object} data 请求数据
	 * @param {Object} payload 其他
	 */
	delete(path, data, payload) {
		return this.request('delete', path, data, payload)
	},
	/**@author zwei
	 * axios 请求封装
	 * @param {String} method 请求方式
	 * @param {String} path 请求 path
	 * @param {Object} data 请求数据
	 * @param {Object} payload 其他
	 */
	request(method, path, data, payload) {
		// let host = 'http://sit.yl9158.com/'
		let host = 'http://dev.yl9158.com/'
		let url = host + path
		let isGet = method === 'get'

		return (
			axios.request({
				url,
				data,
				method,
				params: isGet ? data : undefined,
				transformRequest: [data => {
					return qs.stringify(data)
				}],
				headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
				// 配置跨域携带 Cookie
				withCredentials: true,
			})
				.then(res => {
					let rData = res.data
					if (typeof (rData) !== 'object') rData = JSON.parse(rData)

					if (rData.success) return rData.module
					else if(rData.errCode === '10002') {
						alert('账号错误')
						location.href = '/'
						return
					}
					else {
					  if(rData.errMsg) alert(rData.errMsg)
					}
				})
				.catch(err => {
					log(err)
				})
		)
	}
}
import account from './account'
import goods from './goods'
import company from './company'
import user from './user'
import shop from './shop'
import permission from './permission'

export default {
	...account,
	...goods,
	...company,
	...user,
	...shop,
	...permission,
}
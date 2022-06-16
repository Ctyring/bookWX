<template>
	<view class="content">
		首页
	</view>
</template>

<script>

	import {
		api
	} from '../../../tools/api.js'
	import {
		ref
	} from 'vue'
	export default {
		setup() {
			const code = ref("")
			const openid = ref("")
			const getCode = () => {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						code.value = loginRes.code;
						code2Session()
					},
					fail: (error) => {
						console.log(error.errMsg);
					}
				})
			}
			const code2Session = () => {
				api.get("user/code2session/" + code.value, {},
					(data) => {
						openid.value = data.data.data
						console.log(openid.value);
					}
				)
			}
			const getSession = () => {
				getCode()
			}
			getSession()
			return {
				code,
				getSession
			}
		}
	}
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>

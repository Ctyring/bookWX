<template>
	<uni-list>
		<uni-list-item @click="login">
			<template v-slot:footer>
				<image src="/static/logo.png" style="width: 10vw; height: 10vw;"></image>
			</template>
		</uni-list-item>
	</uni-list>
</template>

<script>
	import {api} from '../../../tools/api.js'
	export default {
		setup() {
			const login =() => {
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					console.log(loginRes.authResult);
				  },
				  fail: (error) => {
					console.log(error.errMsg);
				  }
				})
			}
			login()
			// login()
			return {
				login
			}
		}
	}
</script>

<style>

</style>

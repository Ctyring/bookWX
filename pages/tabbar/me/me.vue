<template>
	<uni-list>
		<uni-list-item>
			<template v-slot:footer>
				<image src="/static/logo.png" style="width: 10vw; height: 10vw;"></image>
			</template>
		</uni-list-item>
	</uni-list>
</template>

<script>
	export default {
		setup() {
			const getUser = () => {
				uni.request({
					url: 'http://localhost:9000/user', //仅为示例，并非真实接口地址。
					success: function(res) {
						console.log(res.data);
					}
				})
			}
		}
	}
</script>

<style>

</style>

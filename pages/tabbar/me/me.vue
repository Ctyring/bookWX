<template>
	<uni-list>
		<uni-list-item clickable="true">
			<template v-slot:header>
				<view>昵称</view>
				<view style="font-size: 4vw;">点击昵称和头像修改</view>
			</template>
			<template v-slot:footer>
				<button open-type="chooseAvatar" @chooseavatar="onChooseAvatar"
					style="width: 15vw; height: 15vw; border-radius: 50%; padding:0;">
					<image :src="avatarUrl" style="width: 100%; height: 100%; border-radius: 50%;"></image>
				</button>
			</template>
		</uni-list-item>
	</uni-list>
	<view>
		<!-- 		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="输入内容" value="对话框预置提示内容!" placeholder="请输入内容"
				@confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup> -->
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
			const avatarUrl = ref("/static/defaultPho.png");
			const onChooseAvatar = (e) => {
				avatarUrl.value = e.detail.avatarUrl
			}
			return {
				avatarUrl,
				onChooseAvatar
			}
		}
	}
</script>

<style>

</style>

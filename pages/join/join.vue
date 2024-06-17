<template>
	<view class='join'>
		<view class="img">
			<image src="/static/时间.png" mode=""></image>
		</view>
		<view class="data">
			<uv-count-down :time="30 * 60 * 60 * 1000" format="HH:mm:ss" customStyle="color:#fc4424;"></uv-count-down>
		</view>

		<view class="box1">
			还差 <text>1</text> 人，赶快邀请好友来拼单
		</view>
		<!-- 按钮 -->
		<view class="btn">
			<button>邀请好友拼单</button>
			<button>去首页逛逛</button>
		</view>
		<view class="bottom">

			<uv-avatar customStyle='border:1px solid red;' src="/static/image/头像.jpg" shape='circle'></uv-avatar>
			<uv-avatar text="?"></uv-avatar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.join {
		width: 90%;
		margin: auto;

		.img {
			width: 15%;
			margin: auto;
			margin-top: 5%;

			image {
				width: 100%;
				height: 50px;
			}
		}

		.data {
			width: 17%;
			margin: auto;
			margin-top: 2%;
		}

		.box1 {
			margin-top: 2%;
			text-align: center;

			text {
				color: #fc4424;
			}
		}

		.btn {
			width: 100%;
			margin-top: 2%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			button:nth-child(1) {
				color: #ffffff;
				border-radius: 5px;
				background-color: #fc4424;
				border: 1px solid red;
				margin-top: 2%;
				width: 100%;
			}

			button:nth-child(2) {
				color: #fc4424;
				border-radius: 5px;
				background-color: #ffffff;
				border: 1px solid red;
				margin-top: 5%;
				width: 100%;
			}
		}

		// 底部
		.bottom {
			width: 60%;
			margin: auto;
			margin-top: 5%;
			display: flex;
			justify-content: space-around;
		}
	}
</style>
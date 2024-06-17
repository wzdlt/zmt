<template>
	<view class="application">
		<view class="box">
			<view>退款金额</view>
			<view class="number">￥890.00</view>
		</view>
		<view class="one">
			<view class="box2">退款原因<view class="number1">*</view></view>
			<view class="cause">
				<view>请填写退款原因</view>
				<view class="img">
					<uv-image src="" width="80px" height="80px"></uv-image>
				</view>
			</view>
			
		</view>
		<view class="btn"><button>提交</button></view>

	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.application {
		width: 100%;

		.box {
			border-top: 1px solid #828282;
			display: flex;
			justify-content: space-between;
			background-color: #ffffff;
			padding: 5%;

			.number {
				color: #fc4424;
			}
		}

		.one {
			width: 100%;
			border-top: 1px solid #828282;
			background-color: #ffffff;
			padding: 5%;
			.cause{
				width: 90%;
				margin-top: 2%;
				padding: 2%;
				background-color: #fafafa;
				color: #b1b1b1;
				.img{
					margin-top: 10%;
				}
			}
			.box2 {
				width: 30%;
				display: flex;
				align-items: center;

				.number1 {
					color: #fc4424;
				}
			}
		}

		.btn {
			width: 90%;
			margin: auto;
			margin-top: 5%;

			button {
				border-radius: 25px;
				background-color: #fc4424;
				color: #ffffff;
			}
		}
	}
</style>
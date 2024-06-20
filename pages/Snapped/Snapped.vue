<template>
	<view class="box">
		<view class="box-box1">
			<view class="box1">
				<view class="box1-left">
					<uv-input placeholder="请输入你想要的内容" style="color: white;" shape="circle" v-model="value"
						@change="change"></uv-input>
				</view>


			</view>
			<!-- 轮播图 -->
			<view class="box2">
				<uv-swiper :list="list" indicator indicatorMode="line" circular></uv-swiper>
			</view>
			<!-- 轮播图结束 -->
		</view>


		<!--商品列表  -->
		<view class="box4">
			<view class="box4-text" v-for="(item, index) in list1" :key="index">
				<image :src="item.imgage" alt=""></image>
				<text class="box4-text1">{{ item.text1 }}</text> {{ item.text }}
				<!-- 红包已省开始 -->
				<view class="box4-content">
					<view class="box4-content1">送红包</view>
					<view class="box4-content2">{{ item.price2 }}</view>
				</view>
				<!-- 红包已省结束 -->
				<view class="box4-price"> {{ item.price }}</view>
				<!-- 价格结束 -->
				<view class="box4-text2">
					<view class="box4-text2-left">128.00</view>
					<view>月售180</view>
				</view>
				<view class="box4-text3">
					<view class="box4-text3-left">
						<image src="../../static/image/邀请.png" alt=""></image>
					</view>
					<view class="box4-text3-right">邀请新人参与抢购再优惠15%</view>
				</view>
			</view>
		</view>
		<!-- 商品列表结束 -->

	</view>


</template>

<script>
	export default {
		data() {
			return {
				value: '',
				list: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				list1: [{
					id: 1,
					imgage: "../../static/image/商品.png",
					text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
					price: "￥120.00",
					text1: "自营",
					price2: "￥50"
				}, {
					id: 2,
					imgage: "../../static/image/商品1.png",
					text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
					price: "￥120.00",
					text1: "自营",
					price2: "￥50"
				}, {
					id: 3,
					imgage: "../../static/image/商品2.png",
					text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
					price: "￥120.00",
					text1: "自营",
					price2: "￥50"
				}, {
					id: 4,
					imgage: "../../static/image/商品3.png",
					text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
					price: "￥120.00",
					text1: "自营",
					price2: "￥50"
				}, {
					id: 5,
					imgage: "../../static/image/商品4.png",
					text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
					price: "￥120.00",
					text1: "自营",
					price2: "￥50"
				}, {
					id: 6,
					imgage: "../../static/image/商品1.png",
					text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
					price: "￥120.00",
					text1: "自营",
					price2: "￥50"
				}],
				// 标签选项卡


			}
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			click(item) {
				console.log('item', item);
			}
		}
	}
</script>

<style scoped>
	/* 全部大盒子 */
	.box {
		width: 100%;
		background-color: #F5F5F5;

	}

	/* 输入框 */
	.box-box1 {
		background: linear-gradient(#FC492A, #F8AFA3);
	}

	.box1 {
		width: 100%;
		margin: auto;
		justify-content: space-between;
		display: flex;


	}

	.box1-left {
		width: 90%;
		display: flex;
		z-index: 999;
		margin-left: 20px;
		background-color: white;
		border-radius: 50rpx;
	}

	.box1-right {
		width: 10%;
		height: 20px;
		margin-right: 10px;
	}

	.box1-right .image1 {
		height: 37px;
		width: 100%;
	}

	/* 输入框左右 */
	/* 轮播图 */
	.box2 {
		width: 90%;
		margin: auto;
		margin-top: 20px;
	}

	/* 轮播图结束 */

	/* 商品列表 */
	.box4 {
		width: 100%;
		flex-wrap: wrap;
		display: flex;
		justify-content: space-around;
	}

	.box4-text image {
		height: 180px;
		width: 100%;
	}

	.box4-text {
		width: 48%;
		margin-top: 10px;
		box-shadow: 0px 0px 1px rgb(171, 165, 165);
	}

	.box4-text1 {
		background-color: red;
		border-radius: 4px;
		color: wheat;
	}

	.box4-text2 {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}

	.box4-text2-left {
		text-decoration-line: line-through;
	}

	.box4-price {
		font-weight: bold;
		color: #FC4E30;
		font-size: 20px;
		margin-top: 10px;
	}

	/* 已省 */
	.box4-content {
		display: flex;
		margin-top: 15px;
		width: 100%;
		border: 1px solid red;
		border-radius: 5px;
		width: 48%;
	}

	.box4-content1 {
		color: red;

	}

	.box4-content2 {
		background-color: #FC4E30;
		border-radius: 4px;
		color: white;
		width: 44%;
	}

	/* 商品列表结束 */
	/* 底部 */
	.box4-text3 {
		width: 100%;
		display: flex;
		background-color: #FFF8F6;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px
	}

	.box4-text3-left {
		width: 15%;

		image {
			width: 100%;
			height: 25px;
		}
	}

	.box4-text3-right {
		width: 80%;
		font-size: 11px;
		color: #FD7158;
	}
</style>
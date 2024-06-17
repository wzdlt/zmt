<template>
	<view class="delivery">
		<view class="box" v-for="item in list" :key="item.id">
			<view>{{item.text}}</view>
			<view class="number">{{item.title}}</view>
		</view>
		<view class="btn"><button>确定</button></view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const list = ref([
	{id:1,text:'收货人',title:'请输入手机号'},
	{id:2,text:'联系电话',title:'请输入姓名'},
	{id:3,text:'所在地区',title:'请选择省市区'},
	{id:4,text:'详细地址',title:'请填写详细地址'},
	])
</script>

<style lang="scss" scoped>
	page {
		background-color: #f5f5f5;
	}
	.delivery{
		width: 100%;
		.box{
			border-top: 1px solid #828282;
			display: flex;
			justify-content: space-between;
			background-color: #ffffff;
			padding: 5%;
			.number{
				color: #828282;
			}
		}
		.btn{
			width: 90%;
			margin: auto;
			margin-top: 5%;
			button{
				border-radius: 25px;
				background-color: #fc4424;
				color: #ffffff;
			}
		}
	}
</style>
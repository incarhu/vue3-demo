<template>
	<div class="car-wrap">
		<Navbar :showLeftIcon="false" title="购物车"></Navbar>
		
		<div class="car_content" v-if="shopCars">
			<div class="left_img">
				<img src="./images/1.jpg" width="100" height="100" alt="">
			</div>
			<div class="right_content">
				<div class="title">{{shopCars.arr.title}}</div>
				<div class="sub_title">{{shopCars.arr.subTitle}}</div>
				<div class="price_content">
					<span class="total">{{shopCars.arr.total}}￥</span>
					<div>
						<van-stepper v-model="shopCars.arr.count" @change="change" />
					</div>
				</div>
			</div>
		</div>
		<div class="no-product" v-else>
			<div class="car-icon"></div>
			<p class="empty-text">您还没有添加任何商品</p>
		</div>
		<Tabs />
	</div>
</template>

<script>
	import { onMounted, reactive, ref } from 'vue'
	import { useStore } from 'vuex'
	export default {
		setup() {
			let shopCars = reactive({
				arr: {}
			})
			const store = useStore()
			onMounted(_=> {
				shopCars.arr = store.state.shopCar
				console.log(shopCars.arr.total)
			})

			const change = () => {
				let obj = {
					count: shopCars.arr.count,
					title: shopCars.arr.title,
					subTitle: shopCars.arr.subTitle,
					price: shopCars.arr.price
				}
				store.commit('shopCar', obj)
			}

			return {
				shopCars,
				change
			}
		}
	}
</script>

<style scoped lang="scss">
	.car-wrap {
		width: 100%;
		padding-top: calStyle(150);		
		background:#fff;
		.no-product {
			text-align: center;
			.car-icon {
				width: calStyle(180);
				height: calStyle(180);
				margin: 0 auto;
				background: url('./images/car.png') no-repeat;
				background-size: cover; 
			}
			.empty-text {
				padding: calStyle(20) 0 calStyle(40) 0;
				color: #7f7f7f;
				font-size: 14px;
			}
		}
		.car_content {
			display: flex;
			padding: 0 calStyle(20);
			.right_content {
				width: 100%;
				margin-left: calStyle(40);
				font-size: 16px;
				.sub_title {
					margin-top: calStyle(20);	
				}
				.price_content {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: calStyle(40);
				}
			}
		}
	}
</style>
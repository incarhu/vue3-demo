<template>
	<div class="detail-wrap">
		<Navbar title="商品详情"></Navbar>
		<div class="detail-contain">
			<div class="swiper-box">
				<van-swipe :autoplay="3000" lazy-render>
					<van-swipe-item v-for="(slide, index) in swiperSlides" :key="index">
					<span>
						<img :src="slide.url" class="img-style">
					</span>
					</van-swipe-item>
				</van-swipe>
			</div>

			<div class="product-describe">
				<div class="product-describe-title">{{productObj.title}}</div>
				<div class="product-detail-name">{{productObj.subTitle}}</div>
				<div class="product-detail-price">
					<div class="price-left price">￥{{productObj.price}}</div>
					<div class="price-right">已售604451份</div>
				</div>
				<div class="product-attrs">
					<div class="image-text-container">
						<span class="promotion-img"></span>
						<div class="image-text">
							产地<span>中国</span>
						</div>
					</div>
					<div class="image-text-container">
						<span class="promotion-img"></span>
						<div class="image-text">
							1小时送达
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 底部加入购物车 -->
		<div class="footer-product-car">
			<div class="car-left" @click="toCar">
				<i class="icon iconfont iconxiazai1"></i>
				<span class="image-spot-dot" v-if="count">{{count}}</span>
			</div>
			<div class="add-cart-btn" @click="addCar">加入购物车</div>
		</div>
	</div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
	setup() {
		const swiperSlides = reactive(
			[
				{"url": require('./images/1.jpg')},
				{"url": require('./images/2.jpg')},
				{"url": require('./images/3.jpg')},
				{"url": require('./images/4.jpg')},
				{"url": require('./images/5.jpg')}
			]
		)
		const productObj = reactive({
			title: '广州妃子笑',
			subTitle: '甘甜口感一绝',
			price: 12
		})
		const count = ref(0)
		const store = useStore()
		const router = useRouter()

		// 添加购物车
		const addCar = () => {
			count.value++
			let selectObj = {
				title: productObj.title,
				subTitle: productObj.subTitle,
				price: productObj.price,
				count: count.value
			}
			store.commit('shopCar', selectObj)
		}

		// 跳转至购物车
		const toCar = () => {
			router.push({
				path: '/car'
			})
		}

		return {
			swiperSlides,
			productObj,
			addCar,
			count,
			toCar
		}
	}
}
</script>

<style scoped lang="scss">
@import './style/index.scss';
</style>
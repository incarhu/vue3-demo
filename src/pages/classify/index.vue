<template>
	<section class="category">
		<Navbar :title="'分类'" />
		<Recreation :title="'案例'" />

		<div @click="video">去看短视频</div>
		<div @click="handleCity">去选择城市</div>
		当前城市：{{getCity}}
		<Tabs />
	</section>
</template>

<script>
	import { defineAsyncComponent } from 'vue'
	import { useRouter } from 'vue-router'
	import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters([
				'getCity',
			])
		},
		setup() {
			const router = useRouter()
		
			function video() {
				let id = 12
				router.push({
					path: `/video/${id}`
				})
			}

			const handleCity = ()=> {
				router.push({
					path: 'city-list'
				})
			}

			return {
				video,
				handleCity
			}
		},
		components: {
			Recreation: defineAsyncComponent({
				loader: ()=> import('../Recreation/index.vue')
			}),
		}
	}
</script>

<style scoped lang="scss">
	.category {
		.recreation {
			padding-top: calStyle(90);
		}
	}
</style>
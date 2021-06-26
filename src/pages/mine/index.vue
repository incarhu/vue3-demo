<template>
	<div>
		<TodoList />
		<Tabs />
	</div>
</template>

<script>
	import TodoList from './TodoList/index'
	export default {
		components: {
			TodoList: TodoList
		}
	}
</script>

<style scoped lang="scss">
	
</style>
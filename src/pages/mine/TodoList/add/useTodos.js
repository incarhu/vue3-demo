import { ref, reactive } from 'vue'

export default function useTodos() {
	let val = ref('')
	let lists = reactive({
		arr:[
			{id: 1, title: '读书'},
			{id: 2, title: '电影'},
			{id: 3, title: '音乐'}
		]
	})

	function addTodo() {
		lists.arr.push({
			id: lists.arr.length,
			title: val.value
		})
		val.value = ''
	}

	return {
		val,
		lists,
		addTodo
	}
}
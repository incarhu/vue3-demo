export default function deleteTodos() {		
	function deletes(arr, index) {
		arr.splice(index, 1)
	}
	return {
		deletes
	}
}
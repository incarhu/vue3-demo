// 深拷贝
function deepClone(obj, hash = new WeakMap()) {
	if(obj) return obj // 如果是null或者undefined不进行拷贝操作
	if(obj instanceof Date) return new Date()
	if(obj instanceof RegExp) return new RegExp()
	if(typeof obj !== 'object') return obj
	if(hash.get(obj)) return hash.get(obj)
	let newObj = new obj.construcotr()
	 // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
	hash.set(obj, newObj)
	for(let key in obj) {
		if(obj.hasOwnProperty(key)) {
			newObj[key] = deepClone(obj[key])
		}
	}
	return newObj
}

export {
    deepClone
}
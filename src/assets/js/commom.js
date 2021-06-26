import {Message} from 'element-ui'
export function checkFile(dataObj,callback = function(){}){
	// 判断是否为对象
	if(!!dataObj && Object.prototype.toString.call(dataObj) == "[object Object]") {
		if(dataObj.file && typeof dataObj.file == 'object') {
			let name = dataObj.file.name
			let fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase()			
			// 判断是否为数组
			if (dataObj.type && Array.isArray(dataObj.type)) {
				const type = dataObj.type			
				if(!type.includes(fileName)){
					Message({
						type:'warning',
						message:'请上传正确的文件'
					})
					// return
				}else{
					callback({code:10000})
				}
			}

			if(dataObj.sizes) {
				// 判断文件大小是否有传递
				let size = file.size / 1024000
				if(size > sizes) {
					Message({
						type: 'warning',
						message: '请上传' + sizes + 'M以内得文件'
					})
					return
				}
			}
		}
	} else {
		console.log('请传对象格式')
		return false
	}
}


/* 
	传递格式 dataObj  => 对象{}
	file: 文件对象
	type 校验文件类型  => 数组  ['xlsx', 'xls']
	sizes 校验文件大小  => 字符串
	callBack 回调函数		=> function
*/
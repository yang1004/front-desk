// import md5 from './md5.js'
import md5 from 'js-md5';
// 生成签名
export function setSign(obj) {
	// let a = md5('luobt')
	// console.log('a-----', a)
	// console.log('obj',obj)
	//把对象中值为sign的元素删除掉
	for (let i in obj) {
		// console.log(i)
		if (i == 'sign') {
			delete obj[i]
		}
	}
	// const newkey = Object.keys(obj).sort().reverse();
	const newkey = Object.keys(obj).sort();
	var newObj = {};
	for (var i = 0; i < newkey.length; i++) {
		newObj[newkey[i]] = obj[newkey[i]];
	}
	// console.log('newObj', newObj)
	let new_str = ''
	for (let m in newObj) {
		let tmp = `${m}:${newObj[m]}`
		// console.log('tmp', tmp)
		new_str = new_str + tmp + '&'
	}
	let res_str = new_str.substr(0,new_str.length-1)
	let md5_str = md5(res_str)
	return md5_str
	// console.log('new_str', new_str)
	// console.log('md5_str', md5_str)

}
// export function setSign(obj) {
// 	//把对象中值为sign的元素删除掉
// 	for (let i in obj) {
// 		// console.log(i)
// 		if (i == 'sign') {
// 			delete obj[i]
// 		}
// 	}
// 	console.log('obj', JSON.stringify(obj))
// 	let tmp_arr = []
// 	for (let i in obj) {
// 		tmp_arr.push(obj[i])
// 	}
// 	// for (let i in tmp_arr) {
// 	// 	if (tmp_arr[i] == 'sign') {
// 	// 		tmp_arr.splice(i, 1)
// 	// 	}
// 	// }
// 	console.log('before', tmp_arr)
// 	let asc_sort = tmp_arr.sort();
// 	console.log('asc_sort', asc_sort)
// 	let arsort = asc_sort.sort(f).reverse()
// 	console.log('arsort', arsort)
	
// 	let res_arr = []
// 	for (let m in arsort) {
// 		for (let n in obj) {
// 			// console.log(`${arsort[m]}`)
// 			if (obj[n] == arsort[m] && m <= n) {
// 				let tmp = `${n}:${obj[n]}`
// 				res_arr.push(tmp)
// 			}
// 		}
// 	}
// 	console.log('res_arr', res_arr)
	
// 	let array = [];
// 	for (let i = 0; i < res_arr.length; i++) {
// 		if (array.indexOf(res_arr[i]) === -1) {
// 			array.push(res_arr[i])
// 		}
// 	}
// 	console.log('array', array)
// 	let tmp_str = ''
// 	for (let i in array) {
// 		tmp_str = tmp_str + array[i] + '&'
// 	}
// 	// console.log('tmp_str', tmp_str)
// 	let a = tmp_str.substr(0,tmp_str.length-1)
// 	// console.log('a',a)
// 	console.log('md5 ',md5(a))
// 	let sign = md5(a)
// 	return sign
// }

function f(a, b) {
	return (a - b)
}
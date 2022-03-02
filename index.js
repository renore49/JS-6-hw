// function qwerty() {
// 	let arr = []
// 	for (i = 0; i < 1; i++) {
// 		let i = prompt('Кто такой Неймар?')
// 		if ((i = 'футболист')) {
// 			arr.push(i)
// 		}
// 		i = prompt('Сколько лет Неймару?')
// 		if ((i = '30')) {
// 			arr.push(i)
// 		}
// 		i = prompt('За какой клуб он играет?')
// 		if ((i = 'ПСЖ')) {
// 			arr.push(i)
// 		}
// 	}
// 	console.log(arr)
// }

// qwerty()
// №2
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
// let arr2 = arr1[2]
// function qwert() {
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] === arr2) {
// 			arr1.splice(i, 1)
// 			arr2 += 3
// 		}
// 	}
// }
// qwert()
// console.log(arr1)
// №3
const arr3 = ['Иван', 'Игнат', 'Александр', 'Ира', 'Света', 'Настя']
function ivan() {
	let name1 = arr3[0],
		name2 = arr3[0]
	for (let i = 0; i < arr3.length; i++) {
		if (name1.length > arr3[i].length) {
			name1 = arr3[i]
		}
		if (name2.length < arr3[i].length) {
			name2 = arr3[i]
		}
	}
	console.log('cамое короткое имя:' + name1 + ', cамое длинное имя:' + name2)
}
ivan()

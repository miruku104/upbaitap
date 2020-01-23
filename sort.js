let arr = [1, 5, 2, 4, 6]; // unsorted array
arr.sort(); // arr == [1, 2, 4, 5, 6]
arr.sort().reverse(); // arr = [6, 5, 4, 2, 1]

let strings = ['abc', 'def', 'ade'];
strings.sort(); // strings == ['abc', 'ade', 'def'];

// alphabetical order: 'a11' -> 'a2' -> 'a21'
// natural order: 'a2' -> 'a11' -> 'a21'
//                'a2b' -> 'a11b' -> 'a11c'
//                'a2b1' -> 'a11b'

arr = [1, 5, 2, 4, 6];
arr.sort(function(a, b) {
	// if b > a -> return positive value -> a dung sau b
	// if b < a -> return negative value -> a dung truoc b
	return b - a;
});
arr.sort(function(a, b) {
	// if a > b -> return positive value -> a dung sau b
	// if a < b -> return negative value -> a dung truoc b
	return a - b;
});

// neu compare function return positive value -> a dung sau b
// neu compare function return negative value -> a dung truoc b
// neu return zero -> thu tu a, b khong xac dinh

let cities = [{population: 1000, name: 'Hanoi'}, {population: 1200, name: 'HCM'}, {population: 800, name: 'Da Nang'}];
cities.sort(); // sai
cities.sort(function(a, b) {
	// sap xep theo thu tu tang dan
	// if a.population < b.population -> returns negative -> a truoc b
	return a.population - b.population;
});

cities.sort((a, b) => a.population - b.population); // lambda

// B1: viet function co 2 tham so arr (mang so nguyen), k (so nguyen). lay ra k phan tu lon nhat cua arr
// vd: arr = [1, 5, 2, 4], k = 2 -> return [5, 4]/[4, 5]

function top_k(arr, k) {
	// arr == [1, 5, 2, 4]
	arr.sort(function(a, b) {
		return b - a;
	});
	// arr == [5, 4, 2, 1]
	let result = [];
	for(let i = 0; i < k; i++) {
		result.push(arr[i]);
	}
	// result == [5, 4]
	return result;
}

// B2: cho 1 function co 1 tham so arr (mang so nguyen) co 2*k phan tu (so chan cac phan tu).
// De bai: tach arr thanh 2 phan: k phan tu lon nhat va k phan tu nho nhat
// VD: [1, 5, 2, 4] => [[1, 2], [4, 5]]
function chiadeu(arr){
	arr.sort(function (a,b) {
		return a - b ;
	});
	let tach1 = [];
	let tach2 = [];
	for(let i = 0 ; i < arr.length/2; i++) {
		tach1.push(arr[i]);	
	}
	for (let i = arr.length/2; i < arr.length; i++) {
		tach2.push(arr[i]);
	}
	return [tach1, tach2];
}
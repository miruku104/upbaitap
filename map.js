/**
 * Cau truc map:
 * - Ánh xạ từ thành phố -> số dân của thành phố đó
 * - Ánh xạ từ số CMNT -> nguoi 
 * 
 * let m = {}; // khai bao map rong
 * let cmt = {
 *    '123': 'Nguyen Van A',
 *    '345': 'Tran Van B'
 * }; // khai bao map co 2 phan tu
 * 
 * let cities = {
 *  'Hanoi': {
 *    'Thanh Xuan': 1000,
 *    'Ba Vi': 100
 *  },
 *  'HCM': {
 *    'Thu Duc': 1500
 *  }
 * }
 * 
 * them/sua 1 phan tu vao map
 * cities.Hue = {};
 * cities.Hue = 123;
 * cities['Da Nang'] = 123;
 * cities.Da Nang = 123; // sai
 * 
 * lay gia tri 1 phan tu trong map
 * let city = cities.Hue;
 * let city = cities['Da Nang'];
 * 
 * duyet qua tat ca key cua map:
 * for (let i in map) {
 * }
 */

// B1: cho 1 array so nguyen. tim tan suat xuat hien cua cac phan tu trong array
// arr = [1, 2, 2, 5, 5, 5, 6, 7] -> {1: 1, 2: 2, 5: 3, 6: 1, 7: 1}
// result.i == result['i']

function tan_suat(arr) {
	let result = {};
	for (let i=0; i<arr.length; i++) {
		if (result[arr[i]] == undefined) {
			result[arr[i]] = 1;
		} else {
			result[arr[i]]++;
		}
	}
	return result;
}

// B2: cho 1 array cac so nguyen. return 1 array moi co cac phan tu khong trung nhau
// arr = [1, 5, 2, 6, 2, 5, 7] -> [1, 5, 2, 6, 7]

function no_loop(arr){
	let seen = {};
	let loop_new = [];
	for ( let i = 0 ; i < arr.length ; i++){
		if (seen[arr[i]] == undefined) { // check
			seen[arr[i]] = true; // mark
			loop_new.push(arr[i]);
		}
	}
	return loop_new;
}

// cho 1 array cac so nguyen. tim so luong cac phan tu bi trung nhau
// arr = [1, 5, 2, 6, 2, 5, 5, 7] -> return 3, vi co 3 so (2, 5, 5) bi trung
// yeu cau: khong duoc dung mang moi

function count_duplicate(arr) {
	let double = {};
	let tong_double = 0;
	for (let i = 0 ; i < arr.length ; i++){
		if (double[arr[i]] == undefined) {
			double[arr[i]] = true;
		} else {
			tong_double++;
		}
	}
	return tong_double ;	
}

function count_duplicate(arr) {
	let double = {};
	let tong_double = 0;
	for (let i = 0 ; i < arr.length ; i++){
		if (double[arr[i]] == undefined) {
			double[arr[i]] = 1;
		} else {
			double[arr[i]]++;
		}
	}
	for (let i in double) {
		if (double[i] > 1)
			tong_double += double[i];
	}
	return tong_double ;	
}


// B1: cho 1 array cac so nguyen arr, va 1 so nguyen k. tim so luong cac cap so co tong = k
// VD: [1, 3, 2, 2, 5, -1], k = 4 -> return 2, vi co 2 cap so (1, 3), (2, 2) co tong = 4

function tinh_tong(arr, k){
	let seen = {};
	let tongso = 0;
	for (let i = 0; i < arr.length; i++) {
		let phantu = arr[i];
		let cantim = k - phantu;
		if (seen[cantim] != undefined) {
			tongso++;
		}
		seen[phantu] = true;
	}
	return tongso;
}
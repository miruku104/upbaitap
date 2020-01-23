/**
Array:
- cau truc du lieu tuan tu: gom cac phan tu lien tiep nhau. vd: [1, 2, 5, 0, 7]
- co the sap xep hoac khong. vd [1, 2, 5, 7] la mang duoc sx tang dan, con [2, 5, 0, 1] la mang khong duoc sap xep
- moi phan tu trong mang co the co cung kieu du lieu hoac khong (nhung nen cung kieu du lieu)
  + [1, 2, 5] la mang cac so tu nhien
  + ['abc', 'def'] la mang cac string (chuoi)
  + [1, 'abc', 2, 3, 'def'] la mang tu do
  
Operation (cac thao tac co the thuc hien voi cau truc du lieu):
- lay 1 phan tu bat ki:
  let arr = [1, 2, 3];
  let a = arr[0]; // 0 la chi muc (index) cua phan tu trong mang, index >= 0 && index < arr.length
  complexity (do phuc tap tinh toan): O(1) tuc la thoi gian chay cua operation khong phu thuoc vao input 
     + a[0], a[1111], a[100000] thoi gian chay la nhu nhau
- them 1 phan tu vao trong mang
  let arr = [1, 2, 3];
  arr.push(5); // arr == [1, 2, 3, 5]
- xoa 1 phan tu trong mang
  let arr = [1, 2, 3, 4];
  arr.splice(0, 1); // xoa 1 phan tu, tu phan tu dau tien
  arr.splice(1, 3); // xoa 3 phan tu, tu phan tu thu 2
- xoa phan tu cuoi cung
  arr.pop();
*/

/**
 * cho 1 mang so nguyen arr, tinh tong cac phan tu trong arr chia het cho 3
 * 
 */
let arr= [1,2,4,6];
let tong = 0;
for (let i = 0 ; i < arr.length; i++) {
	if (arr[i] % 3 == 0) {
        tong += arr[i];
	}
}
return tong;

function tao_mang_khac_k(arr, k) {
	let arr_new = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != k) {
			arr_new.push(arr[i]);
		}
	}
	return arr_new;
}

let result = tao_mang_khac_k([1, 2, 2, 5], 2);
function count_phantu(arr, k) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == k) {
			count++;
		}
	}
	return count;
}
function del_phantu(arr,k){
	for (let i = 0; i < arr.length; i++){
		if (arr[i] == k){
			arr.splice(i, 1);
		}
	}
}
function lietke(arr , k ){
	let arr_moi=[];
	for (let i = 0 ; i < arr.lenght ; i ++){
		if (arr[i] == k ){
			arr_moi.push(i);
		}
	}
	return arr_moi;
}

/**
 * B1: viet function gom 2 tham so (arr, k). arr la 1 mang so nguyen, k la 1 so nguyen. return 1 mang giong het arr co cac phan tu khac k
 * VD: arr = [1, 2, 2, 5], k = 2 -> return [1, 5]
 * B2: viet function gom 2 tham so (arr, k). arr la 1 mang so nguyen, xoa phan tu dau tien co gia tri = k khoi arr
 * VD: arr = [1, 2, 2, 5], k = 2 -> arr == [1, 2, 5]
 * B3: viet function gom 2 tham so (arr, k). tinh so phan tu co gia tri bang k trong mang
 * VD: arr = [1, 3, 3, 5], k = 3 -> return 2
 */

function display(arr,k){
	let arr_d=[];
	for ( let i = 0; i < arr.length ; i++){
		if(arr[i] == 0){
			arr_d.push(i);
		}
	}
	return arr_d;
}
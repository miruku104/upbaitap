// Bai 1 
// viet function co 2 tham so n,k 
// tra ve so x lon nhat sao cho x thoa man dieu kien
// 1<=x<=n
// 1+2+3+...+x<=k
// neu khong co so nao thoa man thi return -1

// n=10, k=5
// x=1 -> tong(x) = 1 (thoa man)
// x=2 -> tong(x) = 3 (thoa man)
// x=3 -> tong(x) = 6 (khong thoa man)
// x=4, 5, 6, 7, 8, 9, 10 -> khong thoa man

let arr = new Array(); // arr == []

function dieukien(n,k) {
	for (let x = n; x >= 1; x--) {
		if (tong(x) <= k) {
			return x;
		}
	}
	return -1;
}

function tong(n){
	let result = 0;
	for (let x = 1; x <= n; x++){
		result += x;
	}
	return result;
}

// Bai 2. viet function tich(x) la tich cua cac so tu 1 -> x. vi du tich(3) = 1 * 2 * 3 = 6


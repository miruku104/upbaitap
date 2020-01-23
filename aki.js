// 
console.log("hello");

// viet 1 function co hai tham so n, k
// tra ve so x lon nhat sao cho x thoa man dieu kien
// 1 <= x <= n
// 1 + 2 + 3 + ... x <= k
// vi du: n = 100, k = 5 -> x = 2
// vi du: n = 4, k = 15 -> x = 4
//vi du: n = 100, k = 0 -> x = -1

// cach 1
// 1. x = -1
// 2. for i=1 -> n:
//    2.1 if sum(i) <= k: x = i
//    2.2 else return x
// 3. return n

// cach 2
// 1. for i=n->1:
//    1.1 if sum(i) <= k return i
// 2. return -1

// BTVN:

// 1. cai dat 2 cach
// 2. viet function tich(x) la tich cua cac so tu 1 -> x. vi du tich(3) = 1 * 2 * 3 = 6
// 3. viet function tich_le(x) la tich cua cac so le tu 1 -> x. vi du tich_le(3) = 1 * 3 = 3
// 4. viet function tich_k(x, k) la tich cua cac so chia het cho k tu 1 -> x. vi du tich_k(5, 2) = 2 * 4 = 8
 
function tich(x) {
	let result = 1;
	
	for (let i=2; i <= x; i++) {
		result = result * i;
	}

	
	return result;
}



function tich_le(x) { 
	let tich = 1;
	
    for (let i=1; i<=x; i++) {
        if (i % 2 != 0) {
	       tich = tich * i;
        }
    }
    
    return tich;
}

function tich_le2(x) { 
	let tich = 1;
	
    for (let i = 1; i <= x; i += 2) {
	    tich *= i;
    }
    
    return tich;
}




function tich_k(x,k) {
	let tich = 1; 
	for (let i = 1 ; i <= x ; i++) {
		if (i % k == 0) {
			tich = tich * i;
		}
	}
	return tich;
}	
	
tich_k(4, 2);
	

function add(n,k) {                                                                                                                                                                         
	for (x=1;x<=n;x++){
		if(sum<=k)
			return sum;
	}
}

function sum(x) {
	let result = 0;
	for(let i=1; i<=x; i++) {
		result = result + i;
	}
	return result;
}

let y = sum(10);
let tong = sum(y);

function cong(a, b) {
	return a + b;
}

function tru(a, b) {
	return a - b;
}

let c = cong(1, 2); // c == 3

let d = cong(c, 5); // d == 8

let e = cong(1, cong(2, 3)); // e == 6

let f = tru(5, cong(1, 2)); // f == 2

for (let a = 1; a <= 100; a++) {
	if (a % 3 == 0 && a % 5 == 0) {
		console.log("sj");
	} else if (a % 3 == 0) {
		console.log("s");
	} else if (a % 5 == 0) {
		console.log("j");
	} else {
		console.log(a);
	}
}

let a = 1;


while (a <= 100) {
	if (dieu_kien) {
		break;
	}
	if (dieu_kien_2) {
		continue;
	}
	if (a % 3 == 0 && a % 5 == 0) {
		console.log("sj");
	} else if (a % 3 == 0) {
		console.log("s");
	} else if (a % 5 == 0) {
		console.log("j");
	} else {
		console.log(a);
	}
	a++;
}

if (a % 3 == 0 && a % 5 != 0) {
	console.log("s");
} else if (a % 3 != 0 && a % 5 == 0) {
	console.log("j");
} else if (a % 3 == 0 && a % 5 == 0) {
	console.log("sj");
} else {
	console.log(a);
}

if (a % 3 == 0 && a % 5 == 0) {
	console.log("sj");
} else if (a % 3 == 0) {
	console.log("s");
} else if (a % 5 == 0) {
	console.log("j");
} else {
	console.log(a);
}
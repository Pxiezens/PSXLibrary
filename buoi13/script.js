// 1. Viết hàm sumAvg(arr) tính trung bình cộng một mảng số
let elmt = new Array();

elmt[0] = "1";
elmt[1] = "2";
elmt[2] = "3";
elmt[3] = "4";
elmt[4] = "5";
elmt[5] = "6";
elmt[6] = "7";
elmt[7] = "8";
elmt[8] = "9";
elmt[9] = "10";
let sum = 0;
for( let i = 0; i < elmt.length; i++ ){
    sum += parseInt( elmt[i], 10 ); 
}

let avg = sum/elmt.length;
console.log(avg)
// 2. Viết hàm findMax(arr) tìm giá trị lớn nhất trong một mảng
let randomnumber = new.Array ();
randomnumber[0] = "7";
randomnumber[1] = "5";
randomnumber[2] = "8";
randomnumber[3] = "2";
let maxnum = Math.max.apply(Math, randomnumber)
console

// 3. Viết hàm fibonacci(n) trả về một mảng chứa n số Fibonacci
// 4. Viết hàm removeFalsy(arr) trả về một mảng mới chỉ chứa các giá trị đúng trong mảng
// 5. Viết hàm sortByColumn(arr, col) sắp xếp một mảng 2 chiều theo giá trị cột col tăng dần
// 6. Viết hàm double(arr) trả về một mảng mới với giá trị các phần tử bằng bình phương chính nó
// 7. Viết hàm capitalize(str) chuyển đổi một chuỗi thành dạng capitalize.
// VD: capitalize(“hello world!”); // “Hello World!”
// 8. Viết hàm randItem(arr) trả về một phần tử ngẫu nhiên trong mảng







// 6 ki tu he co so 16
let hex = "";
for (i = 0 ; i < 6; i++) {
    let char = Math.floor(Math.random * 16)
}


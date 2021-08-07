// Bài 1: Viết function nhập vào số month và year bất kỳ. Trả về số ngày của tháng đó (sử dụng switch/case)

// Chú ý: Tháng 2 của năm nhuận có 29 ngày, năm không nhuận có 28 ngày => cần kiểm tra year truyền vào có phải năm nhuận hay không

function songaytrongthang() {
  let result = "thang ";
  let months = {
    1 : 31,
    2 : 28,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31,
  }

  let selectedyear = document.getElementById("select-year").value;
  let selectedmonth = document.getElementById("select-month").value;

  // Lay ket qua thang 2
  if (selectedyear % 100 === 0 && selectedyear % 400 === 0) {
    months[2] = 29;
  } else if (selectedyear % 100 !== 0 && selectedyear % 4 === 0) {
    months[2] = 29;
  } else {
    months[2] = 28;
  }
  console.log("thang2", months[2]);
   
  if(!selectedmonth || !selectedyear) {
    result = "Nhap day du thang hoac nam";
  } else {
    if(selectedmonth > 0 && selectedmonth <13) {
      result += selectedmonth + " co " + months[selectedmonth] + " ngay";
    } else {
      result += selectedmonth + " khong ton tai";
    }
  }


  
  document.getElementById("result").innerHTML = result;
}
// Bài 2: Viết function sử dụng vòng lặp từ 1->100

// Nếu số đó chia hết cho 3 in ra "Fizz"
// Nếu số đó chia hết cho 5 in ra "Buzz"
// Nếu số đó chia hết cho 3 và 5 in ra "FizzBuzz"

function logNumber(number) {
  while (number < 101) {
    number = number + 1;
    if (number % 15 == 0) {
      console.log(number, " fizzbuzz");
    } else if (number % 5 == 0) {
      console.log(number, " buzz");
    } else if (number % 3 == 0) {
      console.log(number, " fizz");
    } else {
      console.log(number);
    }
  }
}
logNumber(0);

// Các trường hợp còn lại in ra giá trị của số đó
// Bài 3: Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
let Pi = 3.14;
function Sprere(R) {
  return (4 / 3) * Pi * Math.pow(R, 3);
}
console.log("the tich hinh cau la : ", Sprere(4));

// Bài 4: Viết function truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.

// for(i = 0 ; i < 5; i++) {
//     console.log("i la", i)
// }

function sumNumber(number1, number2) {
  for (i = 0; i < number1 - number2 - 1; i++) {
    console.log("so nam giua la ", number2 + 1 + i);
  }
}

sumNumber(8, 3);

// Kết quả xuôi ngược đều như nhau
// Ví dụ : sum(3,8) = 22 (4+5+6+7)
// Ví dụ : sum(8,3) = 22 (4+5+6+7)

// Bài 5: Viết function truyền vào 1 số. Kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
let num = 6;
if (num % 2 == 0) {
  console.log("false");
} else if (num % 3 == 0) {
  console.log("false");
} else if (num % 5 == 0) {
  console.log("false");
} else {
  console.log("true");
}

// Bài 6: Viết function truyền vào 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function totalelementnumber() {
  
}
// Bài 7: Viết function truyền vào 1 số nguyên dương bất kỳ. Tính tổng tất cả các ước số của số đó.

// let newArray = [1,2,3,4,5]

// newArray.splice(1,1)

// console.log("newArray", newArray);

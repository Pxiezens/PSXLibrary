// Bài 1: Viết function nhập vào số month và year bất kỳ. Trả về số ngày của tháng đó (sử dụng switch/case)

// Chú ý: Tháng 2 của năm nhuận có 29 ngày, năm không nhuận có 28 ngày => cần kiểm tra year truyền vào có phải năm nhuận hay không


function songaytrongthang() {
  let result = "thang ";
const THANG1 = 31;
const THANG3 = 31;
const THANG4 = 30;
const THANG5 = 31;
const THANG6 = 30;
const THANG7 = 31;
const THANG8 = 31;
const THANG9 = 30;
const THANG10 = 31;
const THANG11 = 30;
const THANG12 = 31;
let thang2 = 28;
let selectedyear = document.getElementById("select-year").value;
let selectedmonth = document.getElementById("select-month").value;


// Lay ket qua thang 2
  if (selectedyear % 100 === 0 && selectedyear % 400 === 0)  {
    thang2 = 29
  } else if (selectedyear % 100 !== 0 && selectedyear % 4 === 0) {
    thang2 = 29
  } else {
    thang2 = 28
  }
console.log("thang2",thang2);

  switch (Number(selectedmonth)) {
    case 1: {
      result += selectedmonth + " co " + THANG1 + " ngay";

      break;
    }
    case 2: {
      result += selectedmonth + " co " + thang2 + " ngay";
      break;
    }
    case 3: {
      result += selectedmonth + " co " + THANG3 + " ngay";
      break;
    }
    case 4: {
      result += selectedmonth + " co " + THANG4 + " ngay";
      break;
    }
    case 5: {
      result += selectedmonth + " co " + THANG5 + " ngay";
      break;
    }
    case 6: {
      result += selectedmonth + " co " + THANG6 + " ngay";
      break;
    }
    case 7: {
      result += selectedmonth + " co " + THANG7 + " ngay";
      break;
    }
    case 8: {
      result += selectedmonth + " co " + THANG8 + " ngay";
      break;
    }
    case 9: {
      result += selectedmonth + " co " + THANG9 + " ngay";
      break;
    }
    case 10: {
      result += selectedmonth + " co " + THANG10 + " ngay";
      break;
    }
    case 11: {
      result += selectedmonth + " co " + THANG11 + " ngay";
      break;
    }
    case 12: {
      result += selectedmonth + " co " + THANG12 + " ngay";
      break;
    }
    default: {
      result += selectedmonth + " khong ton tai";
      break;
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

// Bài 7: Viết function truyền vào 1 số nguyên dương bất kỳ. Tính tổng tất cả các ước số của số đó.

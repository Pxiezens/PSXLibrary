// Viết chương trình tính chu vi của hình tròn
const PI = 3.14;
function chuvihinhtron() {
  const R = document.getElementById("inputR").value;
  console.log("R", R);
  document.getElementById("result-chuvi").innerHTML = 2 * PI * R;
}

// Viết chương trình tính diện tích hình tròn
function dientichhinhtron() {
  const R = document.getElementById("inputR").value;
  console.log("R", R);
  document.getElementById("result-dientich").innerHTML = PI * Math.pow(R, 2);
}
// Viết chương trình có chức năng quy đổi từ cm => m
function leightexchange() {
  // B1 Lay value tu front-end 
  let centimeter = document.getElementById("inputcm").value;
  let meter = 0;
  let result = ""

  //B2 Xu ly logic

  console.log("centimeter",centimeter)



  if(centimeter < 0) {
    result = "Gia tri phai lon hon 0"
  }

  if(-1 < centimeter && centimeter < 99) {
    result = "0 (m)" + centimeter + " (cm)"
  }

  if (centimeter > 99) {
    while (centimeter > 99) {
      (centimeter = centimeter - 100), (meter = meter + 1);
    }

    if (centimeter === 0) {
      result = meter + " (m)"
    } else {
      result = meter + " (m)" + " " + centimeter + " (cm)"
    }

  } 
 

  // B3 in ket qua ra front-end
  document.getElementById("result-centimeter").innerHTML = result;
}

// Viết chương trình có chức năng quy đổi từ phút => giờ
let minute = 120;
let hour = 0;
if (minute > 59) {
  while (minute > 59) {
    (minute = minute - 60), (hour = hour + 1);
  }
  if (minute == 0) {
    console.log(hour + " gio");
  } else {
    console.log(hour + " gio " + minute + " phut");
  }
} else {
  console.log(minute + " phut");
}

// Viết chương trình trả về nghiệm của phương trình bậc nhất (ax + b = c)

let c = 0;
let a = 4;
let b = 6;

function x() {
  if (a == 0) {
    return (c - b) / a;
  } else if (a < 0) {
    return (b - c) / a;
  } else {
    return "vo so nghiem";
  }
}

console.log("ket qua phuong trinh la : ", x());
// Viết chương trình đổi từ độ C => độ F
let temperature_C = 30;

function temperature_F() {
  return temperature_C * 1.8 + 32;
}
console.log(temperature_F());

// Viết chương trình tính chỉ số BMI của 1 người
let weight_kilogram = 38;
let height_meter = 1.6;
function bmi() {
  return weight_kilogram / (height_meter * height_meter);
}
switch (bmi()) {
  case bmi < 18.5: {
    console.log("bmi = " + bmi + ", thieu can");
    break;
  }
  case bmi < 25: {
    console.log("bmi = " + bmi + ", binh thuong");
    break;
  }
  case bmi < 30: {
    console.log("bmi = " + bmi + ", thua can");
    break;
  }
  default: {
    console.log("bmi = " + bmi + ", beo phi");
    break;
  }
}

// Viết chương trình random 1 số trong khoảng min - max (min, max là 2 số nguyên dương tùy ý)
let randum = Math.floor(Math.random() * 11);
console.log(randum);

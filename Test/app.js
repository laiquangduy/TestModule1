//Bài 1
// Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả
// let n = prompt("Nhập chuỗi");
// let a = "";
// for (let i = n.length-1; i>=0;i=i-1){
//     a=a+n[i];
// }
// console.log(a);

//Bài 2
//Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó
//với các ký tự đầu của chữ mỗi chữ được viết hoa
// let n = prompt("Nhập vào chuỗi");
// let arr = n.split(" ");

// console.log(arr);

// for (let i = 0;i<=arr.length-1;i=i+1){
//     console.log(`${i},${arr[i]}`);
//     arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
// }
// let arr2 = arr.join(" ");
// console.log(arr2);

//Bài 3
//in ra các ký tự và số không trùng nhau
// let Arr=["one","two","three","one","one","four","five","four","five","five"]; 
// let newArr = [];
// for (let i = 0; i<Arr.length-1;i++){
//         if (!newArr.includes(Arr[i])){
//             newArr.push(Arr[i]);
//      }
//     }
// console.log(newArr);

//Bài 5
// let nv = ["Thịnh","Phong","Hùng"];

// let state = true;

// while(state){
//     let menu =prompt("Enter C/R/U/D/E");
   
//     if (menu === "C"){
//         let add = prompt("Enter name");
//         nv.push(add);    
//     }else if (menu === "R"){
//         for (let i=0;i<=nv.length-1;i++){
//             console.log(`${i+1}. ${nv[i]}`);
//         }    
//     }else if (menu === "U"){
//         let u1 = Number(prompt("Mời nhập vị trí thay đổi"));
//         let u2 = prompt("Mời nhập tên cần thay đổi");
//         nv[u1] = u2;   
//     }else if (menu === "D"){
//         let d1 = Number(prompt("Mời nhập vị trí cần xóa"));
//         nv.splice(d1,1);
//     }else if (menu === "E"){
//         state = false;    
//     }else {
//         console.log("comand invalid");    
//     }   
// }


//Bài 4
// let a = prompt("Nhập chuối số để sắp xếp");

// for (let i = 0;i<=length-1;i++){}
// 

// 1. method push
// --digunakan untuk menambahkan elemen oada bagian akhir sebuah array
let arr = [1, 2, 3, 4];
console.log(`asli : ${arr}`);
arr.push("999");
console.log(`method push ${arr} \n`);

// 2. method pop
// --digunakan untuk mengahpus elemen di akhir sebuah array
arr = [1, 2, 3, 4];
console.log(`asli : ${arr}`);
arr.pop();
console.log(`method pop ${arr} \n`);

// 3. method shift
// --digunakan untuk menghapus elemen di awal sebuah array
arr = [1, 2, 3, 4];
console.log(`asli : ${arr}`);
arr.shift();
console.log(`method shift ${arr} \n`);

// 4. method unshift
// --digunakan untuk menambah elemen di awal sebuah array
arr = [1, 2, 3, 4];
console.log(`asli : ${arr}`);
arr.unshift("999");
console.log(`method unshift ${arr} \n`);

// 5. method indexOf
// --digunakan untuk mencari index elemen dalam sebuah array
arr = [1, 2, 3, 4];
console.log(`asli : ${arr}`);
console.log(`method indexOf(2) ${arr.indexOf(2)} \n`);

// 6. method splice
// --digunakan untuk menghapus elemen berdasarkan posisi index
arr = [1, 2, 3, 4];
console.log(`asli : ${arr}`);
arr.splice(1, 1); // arg1=posisi, arg2=jumlah elemen yang mau diahpus
console.log(`method splice ${arr} \n`);

// 7. method include
// --digunakan untuk mengetahui apakah sebuah string memiliki suatu kerakter
let str = "hello world";
console.log(`asli : ${str}`);
console.log(`method include("wo") ${str.includes("wo")} \n`);

// 8. method toLowerCase
// --digunakan untuk mengubah setiap huruf dalam string menjadi huruf kecil
str = "HELLO WORLD";
console.log(`asli : ${str}`);
console.log(`method toLowerCase ${str.toLowerCase()} \n`);

// 9. method toUpperCase
// --digunakan untuk mengubah setiap huruf dalam string menjadi huruf besar
str = "hello world";
console.log(`asli : ${str}`);
console.log(`method toUpperCase ${str.toUpperCase()} \n`);

// 10. method replace
// --digunakan untuk mengganti sebuah komponen string dengan komponen baru
str = "hello world";
console.log(`asli : ${str}`);
console.log(`method replace ${str.replace("hello", "hai")} \n`);

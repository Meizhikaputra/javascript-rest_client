const angka = [-1 ,8 ,9 ,1 ,4 ,-5 ,-4 ,3 ,2 ,9];

// filter
// mencari angka >= 3

// looping
// const newAngka =[];

// for(let i = 1; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka)

// menggunakan filter

// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// mengalikan semua angka dengan 2

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);
// console.log(angka);

// reduce
// menjumlahkan seluruh isi array
// const newAngka = angka.reduce((accu, cVal) => accu + cVal);
// console.log(newAngka);


// menggunakan chainning map, filter and reduce
// const hasil = angka.filter(a => a > 5)
//     .map(a => a * 3)
//     .reduce((acc, cur) => acc + cur);


//     console.log(hasil);


// destructuring assignment

// const mhs = ['meizhika', 33];

// const [nama, umur] = mhs;

// console.log(nama);
// console.log(umur);

// jika object
// const mhs = {
//     nama : 'meizhika',
//     umur: 33
// }

// const {nama, umur} = mhs;
// console.log(nama)
// console.log(umur)


// Menggantin nama var dan menyingkat 1 variable dengan banyak values

// const mhs = {
//     id: 123,
//     nama : 'meizhika',
//     umur: 33,
//     // email: 'meizhika@gmail.com'
// }

// function getIdMhs() {
//     return mhs.id;
// }

// console.log(getIdMhs(mhs));

// destructuring function

// function kalkulasi (a,b) {
//     return [a+b, a-b, a*b, a/b];

// }

// normally
// const tambah = kalkulasi(2,3)[0];
// const kurang = kalkulasi(2,3)[1];
// console.log(tambah)
// console.log(kurang)


// assignment

// const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
// console.log(bagi);


// dengan object

// function kalkulasi (a,b ) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         bagi: a/b,
//         kali: a*b
//     }
// }

// const {bagi,kurang,tambah,kali} = kalkulasi(5, 5);
// console.log(kurang) 


// destructuring arguments

// const mhs1 = {
//     nama: 'meizhika', 
//     umur: 23,
//     email:'meizhika@gmail.com',
//     nilai: {
//         tugas: 70,
//         uts: 60,
//         uas: 90
//     }
// }


// function coba({nama, umur,nilai:{tugas, uts,uas}}) {
//     return `Halo nama saya ${nama}, saya berusia ${umur} tahun.
//     nilai uas saya ${uas}`;
// }

// console.log(coba(mhs1));





















































































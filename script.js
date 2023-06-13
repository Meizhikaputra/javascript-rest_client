// object literal


// function decalration
// contructor function 
// object.create



// Closure

// function init() {
//     // let nama = 'Meizhika';
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Meizhika');

// function factory

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan`);
//     }
// }
// let SelamatPagi = ucapkanSalam('Pagi');
// let SelamatSiang = ucapkanSalam('Siang');
// let SelamatMalam = ucapkanSalam('Malam');

// SelamatMalam('Meizhika');



// let add = (function () {
//     let counter = 0
//     return function() {
//         return ++counter;
//     }
// })();


// console.log(add());
// console.log(add());
// console.log(add());


// ARROW FUNCTION

// let tampilNama = nama => `Halo ${nama}`;

// console.log(tampilNama('Meizhika'));


// let mahasiswa = ['Meizhika', 'Rani', 'selly'];
// let jumlahHurud = mahasiswa.map(nama => nama.length);

// let mahasiswa = ['Meizhika', 'Rani', 'selly'];
// let jumlahHurud = mahasiswa.map(nama => ({ nama, jmlHuruf : nama.length }));

// console.log(jumlahHurud);

// this pada arrow function

// const Mahasiswa = function () {
//     this.nama = 'Meizhika';
//     this.umur = '23';
//     this.sayHello = function() {
//         console.log(`Halo nama saya ${this.nama}, saya berusia ${this.umur} tahun`);
//     }
// }

// const meizhika = new Mahasiswa();


// Arrow function
// const Mahasiswa = function () {
//     this.nama = 'Meizhika';
//     this.umur = '23';
//     this.sayHello = () =>  {
//         console.log(`Halo nama saya ${this.nama}, saya berusia ${this.umur} tahun`);
//     }
// }

// const meizhika = new Mahasiswa();


// menggunakan object literal

// const nama = {
//     nama : 'meizhika',
//     umur: '33',
//     sayHello : () => {
//         console.log(`halo nama saya ${this.nama}, saya berusia ${this.umur} tahun`)
//         }
// }



// const Mahasiswa = function () {
//     this.nama = 'Meizhika';
//     this.umur = '23';
//     this.sayHello = function() {
//         console.log(`Halo nama saya ${this.nama}, saya berusia ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500)
// }

// const meizhika = new Mahasiswa();


// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//     let satu = 'size';
//     let dua = 'caption';

//     if(this.classList.contains(satu)) {
//         [satu,dua] = [dua,satu]
//     }

//     this.classList.toggle(satu);

//     setTimeout(() => {
//         this.classList.toggle(dua)
//     },600);
// });




















































































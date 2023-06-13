// spread operator  ...
// digunakan untuk memecah iterables menjadi single element

// const dosen = ['harma', 'joni', 'satria'];

// const orang = [...mhs, 'fajar' ,...dosen];
// const orang = mhs.concat(dosen)



// const mhs = ['meizhika', 'rani', 'selly'];
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs);

// const mhs = document.querySelectorAll('li');
// // const orang = [];
// // for(let i = 0; i < mhs.length; i++){
// //     orang.push(mhs[i].textContent);
// // }
// // console.log(orang)

// const orang = [...mhs].map(m => m.textContent);
// console.log(orang)

// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;

// console.log(huruf)



// rest parameter

// function jumlahkan(...myArgs) {
//     // let total = 0;

//     // for(a of myArgs) {
//     //     total += a;
//     // }
//     // return total;\

//     return myArgs.reduce((m, c) => m + c)


// }

// console.log(jumlahkan(1,2,3,4,5));



// const kelompok = ['meizhika', 'rani', 'selly', 'nova', 'dinda'];
// const [ketua, wakil, ...anggota] = kelompok;
// console.log(anggota)

// filtering

// function filtering(type, ...myArgs) {
//     return myArgs.filter(m =>  typeof m === type)
// }

// console.log(filtering('boolean', 1,2,'meizhika', true, 10, false, 'rani'));








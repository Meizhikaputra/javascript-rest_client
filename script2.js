// 2 looping pda javascript
// for of
// const mhs= ['meizhika', 'rani', 'selly'];


// for
// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }


// foreach
// mhs.forEach(m => console.log(m))


// for...of
// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// nodeList
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(l => console.log(l.innerHTML));

// for(const l of liNama) {
//     console.log(l.innerHTML)
// }


// arguments

// function jumlahAngka() {

//     let jumlah = 0;
//     for( a of arguments) {
//         jumlah += a;
//     }
//     return jumlah
// }


// console.log(jumlahAngka(1,2,3,4,5,6));












// for in


const mhs = {
    nama : 'meizihka',
    umur: 33,
    email: 'meizhika@gmail.com'
    

}

for(m in mhs) {
    console.log(`${m} : ${mhs[m]}`);
}

// tidak bisa menampilkan object
// mhs.foreach( m => console.log(mhs[m]))



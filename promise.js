// fetch('http://www.omdbapi.com/?apikey=3cb7ef27&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response))

// promise 
// let ditepati = true;

// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('janji telah ditepati!');
//     }else {
//         reject('janji tidak ditepati')
//     }
// });

// janji1
//     .then(respon => console.log('Ok!, ' + respon))
//     .catch(respon => console.log('Not OK!,' + respon))

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 6000
        if(waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);

        }else{
            reject('kelamaan');
        }
    })
}

// console.log(coba());
// const coba = cobaPromise()
// coba
// .then(coba => console.log(coba))
async function cobaAsync() {
    try{
        const coba = await cobaPromise();
        console.log(coba)

    }catch(err) {
        console.error(err)
    }
}

cobaAsync()


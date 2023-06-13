// callback
// jquery
console.log('mulai');
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=3cb7ef27&s=avengers',
    success : mhs => {
        console.log(mhs)
    },
    error : (e) => {
        console.log(e.textContent);
    }

})
console.log('selesai');
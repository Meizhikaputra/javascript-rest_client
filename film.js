// $('.pencarian').on('click', function() {

//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=3cb7ef27&s=' + $('.judul').val(),
//         success : result => {
//             const movies = result.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCard(m);
//             });
//             $('.movie').html(cards);
    
//             // ketika detail di klik
    
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=3cb7ef27&i='+ $(this).data('imdbid'),
//                     success: m => {
//                         const modal = showModalDetail(m);
//                                 $('.modal-body').html(modal);
//                     }
//                 });
    
//             })
//         }
//     })
// })

// request dengan fetch
// const search = document.querySelector('.pencarian');
// search.addEventListener('click', function() {
//     const input = document.querySelector('.judul');
    
//     fetch('http://www.omdbapi.com/?apikey=3cb7ef27&s=' + input.value)
//         .then(respon => respon.json())
//         .then(respon => {
//             const movie = respon.Search;
//             let cards = '';
//             movie.forEach(m => cards+= showCard(m));

//             const movieCards = document.querySelector('.movie');
//             movieCards.innerHTML = cards;

//             // detail di klik
//             const movieDetail = document.querySelectorAll('.modal-detail-button');
//             movieDetail.forEach(btn => {
//                 btn.addEventListener('click', function() {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=3cb7ef27&i=' + imdbid)
//                     .then(respon => respon.json())
//                     .then(m => {
//                         const modalBody = document.querySelector('.modal-body');
//                         const modal = showModalDetail(m);
//                         modalBody.innerHTML = modal 

//                     })
//                 })
//             })
//         })
// })


// refactoring

const search = document.querySelector('.pencarian');
search.addEventListener('click', async function (){
    
    try{
        const inputKeyword = document.querySelector('.judul');
        if(inputKeyword.value === ''){
            alert('Ada Belum mengisikan judul film')
        }
        const movies = await getMovies(inputKeyword.value); 
        updateUI(movies);

    }catch(err) {
        alert(err);
    }

    
}) 

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=3cb7ef27&s=' + keyword)
        .then(respon => {
            if(!respon.ok){
                throw new Error(respon.statusText);
            }
            return respon.json()
        })
        .then(respon => {
            if(respon.Response === "False"){
                throw new Error(respon.Error);
            }
            return respon.Search;
        });
}

function updateUI(movies) {
    let cards = '';
        movies.forEach(m => cards+= showCard(m));

        const movieCards = document.querySelector('.movie');
        movieCards.innerHTML = cards;
}


// event binding
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')) {
        try{
            const imdbid = e.target.dataset.imdbid
            const movieDetail = await getMovieDetail(imdbid);
            updateDetail(movieDetail);

        }catch(err) {
            alert(err)
        }

    }
})

function updateDetail(m) {
    const modalBody = document.querySelector('.modal-body');
        const modal = showModalDetail(m);
        modalBody.innerHTML = modal  
}

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=3cb7ef27&i=' + imdbid)
                    .then(respon => {
                        if(!respon.ok) {
                            throw new Error(respon.statusText);

                        }
                        return respon.json()
                    })
                    .then(m => {
                        if(m.Response === "False") {
                            throw new Error(m.Error);
                        }
                        return m
                    })
}




function showCard(m) {
    return`<div class="col-md-4 my-3">
        <div class="card" style="width: 18rem;">
            <img src="${m.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
            </div>
        </div>
    </div>`
}

function showModalDetail(m) {
    return `<div class="container">
        <div class="row">
            <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item active">${m.Title} (${m.Year})</li>
                        <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                    </ul>
            </div>
        </div>
    </div>`
}
let api = 'https://www.omdbapi.com/?apikey=61e576a4&t='
let title =document.getElementById('title')
let date = document.getElementById('date');
let director = document.getElementById('director');
let actors = document.getElementById('actors');
let genre = document.getElementById('genre');
let dese = document.getElementById('dese');
let collection = document.getElementById('collection');
let awards = document.getElementById('awards');
let writer = document.getElementById('writer');
let ratings = document.getElementById('ratings');
let img = document.getElementById('img');



let container = document.getElementById('container')
container.classList.add('d-none')

let loader = document.getElementById('animation-loader')
loader.classList.add('d-none')


function searchMovie(){
    loader.classList.remove('d-none')
    let movieName = document.getElementById('movieName')
    let name = movieName.value.trim()

    if(!name){
        loader.classList.add('d-none')
        alert('Please enter a movie name.')
        return
    }

    let query = api + encodeURIComponent(name)
    fetch(query)
    .then((res) => res.json())
    .then((data)=>{
        loader.classList.add('d-none')
        if(data.Response === 'False'){
            container.classList.add('d-none')
            alert('Movie not found. Please check the title and try again.')
            return
        }
        container.classList.remove('d-none')
        title.innerText = data.Title || 'N/A'
        date.innerText = data.Released || 'N/A'
        director.innerText = data.Director || 'N/A'
        actors.innerText = data.Actors || 'N/A'
        genre.innerText = data.Genre || 'N/A'
        dese.innerText = data.Plot || 'N/A'
        collection.innerText = data.BoxOffice || 'N/A'
        awards.innerText = data.Awards || 'N/A'
        writer.innerText = data.Writer || 'N/A'
        ratings.innerText = data.imdbRating || 'N/A'
        img.src = (data.Poster && data.Poster !== 'N/A') ? data.Poster : 'assets/placeholder.png'
    })
    .catch((err)=>{
        loader.classList.add('d-none')
        container.classList.add('d-none')
        alert('An error occurred while searching. Please try again.')
        console.error(err)
    })
}
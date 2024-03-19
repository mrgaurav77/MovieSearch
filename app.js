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
    let query = api+movieName.value
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
        loader.classList.add('d-none')
        container.classList.remove('d-none')
        title.innerText = data.Title
        title.innerText = data.Title;
        date.innerText = data.Released;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        genre.innerText = data.Genre;
        dese.innerText = data.Plot;
        collection.innerText = data.BoxOffice;
        awards.innerText = data.Awards;
        writer.innerText = data.Writer;
        ratings.innerText = data.imdbRating;
        img.src = data.Poster;
    })
}
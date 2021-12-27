// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

//for (const movie of movies) {
    const moviedate = movies.find(element => element.date < 2011);
    //const film = moviedate.find(element => element > 20000);
    console.log(moviedate);
//}
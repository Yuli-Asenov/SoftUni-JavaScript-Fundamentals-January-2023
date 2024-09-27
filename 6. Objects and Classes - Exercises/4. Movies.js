function movies(movies) {
  for (let el of movies) {
    let movie = {};

    if (el.includes(`addMovie`)) {
      let name = el.replace("addMovie ", "");

      movie.name = name;

      for (let el of movies) {
        if (el.includes(`${name} onDate`)) {
          let date = el.replace(`${name} onDate `, "");
          movie.date = date;
        }

        if (el.includes(`${name} directedBy`)) {
          let director = el.replace(`${name} directedBy `, "");
          movie.director = director;
        }
      }
      if (Object.keys(movie).length === 3) {
        console.log(JSON.stringify(movie));
      }
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

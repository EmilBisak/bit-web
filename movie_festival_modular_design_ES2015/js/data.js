const dataModule = (function () {

  
  class Festival {
    constructor() {
      this.listOfAllMovies = [];
      this.listOfPrograms = [];
    }
  }
  
  
  const createFestival = () => new Festival();
  
  const festival = createFestival();



  class Movie {
    constructor(title, length, genre) {

      this.title = title;
      this.length = parseInt(length);
      this.genre = genre;
    }
    getGenreCode() {
      const firstLetter = this.genre[0].toUpperCase();
      const lastLetter = this.genre[this.genre.length - 1].toUpperCase();
      return `${firstLetter}${lastLetter}`;
    }
    getData() {
      return `${this.title}, ${this.length}min, ${this.getGenreCode()}`;
    }

  }



  const createMovie = (title, length, genre) => new Movie(title, length, genre);


  const addMovie = movie => festival.listOfAllMovies.push(movie) - 1;


  const isValidateMovie = (title, length, genre) => {
    if (!title || !genre || !length) {
      return false;
    }
    return true;
  }




  class Program {
    constructor(date) {
      this.date = new Date(date);
      this.listOfMovies = [];
    }
    lengthOfAllMovie() {
      let sumOfMinutes = 0;
      this.listOfMovies.forEach(function (item) {
        sumOfMinutes += item.length;
      });
      return sumOfMinutes;
    }
    addMovie(movie) {
      if (!movie || !(movie instanceof Movie)) {
        console.log("Invalid input!!!");
        return;
      }
      this.listOfMovies.push(movie);
    }
    getTotalMovies() {
      return this.listOfMovies.length;
    };
    getData() {
      const day = this.date.getDate();
      const month = this.date.getMonth() + 1;
      const year = this.date.getFullYear();
      const date = `${day}.${month}.${year}`;
      let resultStr = date;
      if (this.getTotalMovies() === 0) {
        resultStr += ", Program to be announced.";
        return resultStr;
      }
      resultStr += `, ${this.getTotalMovies()} movies, duration: ${this.lengthOfAllMovie()}min`;
      return resultStr;
    }

  }






  const isValidProgram = dateString => {
    if (!dateString) {
      return false;
    }
    const date = new Date(dateString);

    if (date.getTime() < Date.now()) {
      return false;
    }
    hasProgramWithSameDate = festival.listOfPrograms.some((program) => date.getTime() === program.date.getTime());

    if (hasProgramWithSameDate) {
      return false;
    }
    return true;
  }

  const createProgram = dateString => {
    const date = new Date(dateString);
    return new Program(date);
  }

  const addProgram = program => festival.listOfPrograms.push(program) - 1;


  const addMovieToProgram = (movieIndex, programIndex) => {

    const movie = festival.listOfAllMovies[movieIndex];
    const program = festival.listOfPrograms[programIndex];
    const oldProgramData = program.getData();

    program.addMovie(movie);

    return {
      program,
      oldProgramData
    };
  }



  return {
    createFestival,
    isValidateMovie,
    createMovie,
    addMovie,
    isValidProgram,
    createProgram,
    addProgram,
    addMovieToProgram

  };


})();



//****************************************task 1********************************

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
}


class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    return this.name + " " + this.surname + " " + this.salary;
  }
  getSalary() {
    console.log(this.salary);
  }
  increaseSalary() {
    this.salary = this.salary * 1.1;
  }
}










class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    console.log(this.specialization);
  }
}






class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    this.department = department;
    super(name, surname, job, salary);
  }
  getDepartment() {
    console.log(this.department);
  }
  changeDepartment(newValue) {
    this.department = newValue;
  }
}







const ukiDeveloper = new Developer("Uros", "Miletic", "Vrsni programer", 2200, "frontend");

ukiDeveloper.increaseSalary();
ukiDeveloper.getSalary();
ukiDeveloper.getSpecialization();




//****************************************task 2********************************



class App {
  constructorApp(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }
  isCCLicence() {
    return this.licence === "CC";
  };
  like() {
    this.stars++;
  };
  showStars() {
    console.log(this.stars);
  };
}








class WebApp extends App {
  constructor(name, licence, stars, url, technologies) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  }
  getData() {
    var resString = this.name + ", licence: " + this.licence + ", number of stars: " + this.stars + "\n";
    resString += "url: " + this.url;
    return resString;
  };
  reactBased() {
    return this.technologies.some(technology => technology === "react");
  };
}







class MobileApp extends App {
  constructor(name, licence, stars, platforms) {
    super(name, licence, stars);
    this.platforms = platforms;
  }
  getData() {
    return this.name + ", licence: " + this.licence + ", number of stars: " + this.stars;
  };
  forAndroid() {
    return this.platforms.some(platform =>platform === "android");
  };
}




const donesi = new WebApp("Donesi.com", "CC", 5, "http://www.donesi.com", ["mongoDB", "react", "node.js", "css3", "html5"]);
const playground = new MobileApp("Playground", "BC", 12, ["ios", "android", "symbian"]);

console.log(playground.forAndroid());

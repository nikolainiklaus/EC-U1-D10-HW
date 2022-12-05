/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/

console.log("----------------A-------------------");

let test = "Hello";
console.log(test);

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/


console.log("----------------B-------------------");

let sum = 10 + 20;
console.log(sum);


/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

console.log("----------------C-------------------");
let random = Math.floor(Math.random()*21)
console.log(random);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/

console.log("----------------D-------------------");

let me = {
    name: "Nikolai",
    surname: "Niklaus",
    age: 29,
}

console.log(me);

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/

console.log("----------------E-------------------");

delete me.age
console.log(me);

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

console.log("----------------F-------------------");

let skills = ["Javascript", "html", "CSS"];
me.skills = skills
console.log(me);

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

console.log("----------------G-------------------");

me.skills.pop();
console.log(me);


// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

console.log("----------------1-------------------");

function dice(a, b) {
    let random = Math.floor(Math.random()*6)+a;
    return random
}

console.log(dice(1,6));

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/

console.log("----------------2-------------------");

function whoIsBigger(c,d) {
    if (c > d) {
        return c;
    } else if (d > c) {
        return d;
    }
    else {
        return "both numbers are equal";
    }
}

console.log(whoIsBigger(3, 3));


/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

console.log("----------------3-------------------");

function splitMe(strToSplit) {
    let splittedStr = strToSplit.split(" ");
    return splittedStr;
}

console.log(splitMe("Hello Here is Nik"));

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

console.log("----------------4-------------------");

function deleteOne(randomStr, booleanValue) {
    if (booleanValue === true) {
        let adjStr = randomStr.slice(1);
        return adjStr;
    } else {
        let adjStr = randomStr.slice(0, -1)
        return adjStr;
    }
}

console.log(deleteOne("Hello", true));

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

console.log("----------------5-------------------");

function onlyLetters(randomString) {
    let onlyLetters = randomString.replace(/\d+/g,'-');
    let split = onlyLetters.split(" ");
    
    for (let index = 0; index < split.length; index++) {
        let char = split[index];
        if (char.length === 1 && char === "-") {
            split.splice(index, 1);
        }
    }
    return split.join(" ");
}

console.log(onlyLetters("I have 4 dogs and 3 cats"));


/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

console.log("----------------6-------------------");

function isThisAnEmail(email) {
    const isEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    return isEmail.test(email);
}

console.log(isThisAnEmail("nik.oadf"));

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

console.log("----------------7-------------------");

function whatDayIsIt() {
    let dayOfWeekName = new Date().toLocaleString(
        'default', {weekday: 'long'}
      );
    return dayOfWeekName;
}

console.log(whatDayIsIt()); 



/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/


console.log("----------------8-------------------");


function rollTheDices(x) {
    let values = [];
    let valuesSum = 0;
    for (let i = 0; i < x; i++) {
        let value = Math.floor(Math.random()*6)+1;
        values.push(value);
        valuesSum += value;
    }
    console.log("values: ", values);
    return (`sum: ${valuesSum}`)
}

console.log(rollTheDices(3));



/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

console.log("----------------9-------------------");


function howManyDays(date) {
    let dateNow = new Date();
    let dateThen = new Date(date); 
    let differenceInTime = dateNow.getTime() - dateThen.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.floor(differenceInDays);
}

console.log("time difference in days: ", howManyDays("11/30/2022"));

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/

console.log("----------------10-------------------");

function isTodayMyBirthday(birthday) {
    let myBirthday = new Date(birthday).getDate()
    let today = new Date().getDate();

    if(myBirthday === today) {
        return true;
    } else {
        return false;
    }
}

console.log("today is my birthday?", isTodayMyBirthday("11/02/22"));



// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/

console.log("----------------11-------------------");

let randomObj = {
    name: "Nikolai",
    surname: "Niklaus",
    age: 29,
    }   

function deleteProp(obj, str) {

    let prob = str; 
    delete randomObj[prob];
    return(randomObj)
}

console.log(deleteProp(randomObj, "age"));

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */

const movies = [

    {

    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:

    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

    ];



console.log("----------------12-------------------");

function oldestMovie(movies) {
    let oldestMovie = movies[0]; 

    for (let i = 1; i < movies.length; i++) {
        if (movies[i].Year < oldestMovie.Year) {
            oldestMovie = movies[i];
        }
    }
    return oldestMovie;
}

console.log(oldestMovie(movies));

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

console.log("----------------13-------------------");

function countMovies(movies) {
    return movies.length
}

console.log(countMovies(movies));


/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

console.log("----------------15-------------------");

function onlyInThisMillennium(movies) {
    let modernMovies = [];
    for (let index = 0; index < movies.length; index++) {
        let movie = movies[index];
        if (movie.Year > 1999) {
            modernMovies.push(movie);
        }
    }
    return modernMovies; 
}

console.log(onlyInThisMillennium(movies));




/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

console.log("----------------16-------------------");

function getMovieById(movies, id) {
    let rightMovie = [];
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        if (movie.imdbID === id) {
            rightMovie = movie;
        }
    }
    return rightMovie;
}

console.log(getMovieById(movies, "tt4154756"));


/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

console.log("----------------17-------------------");

function sumAllTheYears(movies) {
    let yearSum = 0;
    for (let i = 0; i < movies.length; i++) {
        let int = parseInt(movies[i].Year)
        yearSum += int;
    }
    return yearSum;
}

console.log(sumAllTheYears(movies));


/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

console.log("----------------18-------------------");

    function searchByTitle(movies, movTitle) {
    
        let rightMovie = [];
        for (let i = 0; i < movies.length; i++) {
            let movie = movies[i];
            if (movie.Title.includes(movTitle)) {
                rightMovie.push(movie);
            }
        }
        return rightMovie;
    }

console.log(searchByTitle(movies, "Avengers"));


/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

console.log("----------------19-------------------");

function searchAndDivide(movies, string2) {
    let match = [];
    let unmatch = [];

    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        if (movie.Title.includes(string2)) {
            match.push(movie);
        } else {
            unmatch.push(movie);
        }
    }

    let sorting = {
        matches: match,
        unmatches: unmatch,
    };

    return sorting

}

console.log(searchAndDivide(movies, "Avengers"));

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

console.log("----------------20-------------------");

function removeIndex(movies, int2) {
    movies.splice([int2], 1)
    return movies;
}

console.log(removeIndex(movies, 1));


// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

console.log("----------------21-------------------");

function halfTree(trees) {
    let treeArray = []

    for (let i = 0; i <= trees; i++) {
        treeArray.push(i);
        console.log("*".repeat(i));
    }
}

console.log(halfTree(10));


/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3) 1, 2, 3 -> 1, 3, 5, 

*

***

*****

*/

console.log("----------------22-------------------");

function tree(trees) {
    let treeArray = []
    
    for (let i = 1; i <= trees; i++) {
        prevTree = i-1
        combinedTree = parseInt(i+prevTree)
        treeArray.push(combinedTree);
        console.log("*".repeat(combinedTree));
    }
}

console.log(tree(5));


/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

console.log("----------------23-------------------");

function isItPrime(randNumb) {
    if (randNumb > 2) {
        for (let i = 2; i < randNumb; i++) {
            if (randNumb % i == 0) {
                return ("not prime number")
            } else {
                return ("prime number")
            }
        }
    } else {
        if (randNumb === 2) {
            return ("prime number")
        } else {
            return ("enter number greater 1")
        }
    }
}


console.log(isItPrime(7));

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

console.log("----------------14-------------------");


function onlyTheTitles(movies) {
    
    for (let i = 0; i < movies.length; i++) {
        delete movies[i].Year;
        delete movies[i].Type;
        delete movies[i].imdbID;
        delete movies[i].Poster;
    }
    return movies
}

console.log(onlyTheTitles(movies));


/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/


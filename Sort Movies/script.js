let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function () {
    // sortMoviesByRank(movies);
    searchSortAttr()
    // Display Movies list
    displayMovies(movies);
}

function searchSortAttr() {
    let selectedValue = document.getElementById("sort").value;
    switch (selectedValue) {
        case "id":
            sortMoviesByAttr(movies, 'id');
            break;
        case "title":
            sortMoviesByAttr(movies, 'title');
            break;
        case "rank":
            sortMoviesByAttr(movies, 'rank');
            break;
    }
}

function displayMovies(movies) {
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for (let index = 0; index < movies.length; index++) {
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}


function sortMoviesByRank(movies) {
    // Code from previous sortBestRatingsFirst() function
    for (let j = 0; j < movies.length - 1; j++) {

        let max_obj = movies[j];
        let max_location = j;

        for (let i = j; i < movies.length; i++) {
            if (movies[i].rank > max_obj.rank) {
                // Know max AND it's index (location)
                max_obj = movies[i]
                max_location = i
            }
        }
        // swap the first and the last
        movies[max_location] = movies[j]; // --> 10
        movies[j] = max_obj;
    }

    return movies;
}

function sortMoviesByAttr(movies, sortAttr) {
  
    for (let j = 0; j < movies.length; j++) {
        let obj = getMaxMovieObject(movies, j, sortAttr);
        // console.log(obj);
        movies[obj.max_index] = movies[j];
        movies[j] = obj.max_obj;
    }

    return movies;
}


function getMaxMovieObject(movies, start, sortAttr) {
    // Code from previous findMaxHelper() function
    let maximum = movies[start];
    let max_location = start;

    for (let i = start; i < movies.length; i++) {

        if (movies[i][sortAttr] > maximum[sortAttr]) {
            maximum = movies[i];
            max_location = i;
        }
    }
    // console.log(maximum, max_location);
    return { max_obj: maximum, max_index: max_location };
}




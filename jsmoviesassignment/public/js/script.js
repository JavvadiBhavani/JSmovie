function getMovies() {
	thePromise=fetch(" http://localhost:3000/movies");
        thePromise.then(function(response){
            textPromise=response.json();
            textPromise.then(function(names){
                let list=" ";
					for(let i=0;i<names.length;i++){
                        list+="<li>"+names[i].title+" "+names[i].year+"   "+"<button onclick='addFavourite("+JSON.stringify(names[i])+")'>Add to Favourites</button>"+"</li>";
                    }
					alert(list);
					let main=document.getElementById("moviesList");
					main.innerHTML=list;

            }).catch(function(error){
                document.getElementById("main").innerHTML=error;
            });    
        }).catch(function(error){
            console.log(error);
        });
       
}

function getFavourites() {
	thePromise=fetch(" http://localhost:3000/favourites");
        thePromise.then(function(response){
            textPromise=response.json();
            textPromise.then(function(names){
                let list=" ";
					for(let i=0;i<names.length;i++){
                        list+="<li>"+names[i].title+" "+names[i].year+"</li>";
                    }
	
					let main=document.getElementById("favouritesList");
					main.innerHTML=list;

            }).catch(function(error){
                document.getElementById("main").innerHTML=error;
            });    
        }).catch(function(error){
            console.log(error);
        });
}

function addFavourite(movie) {
	alert("do u want to add this movie to favourites?");
	//alert(typeof movie);
	let obj={
		method:"POST",
		// body:movie,
		body: JSON.stringify(movie),

		headers:{
			"Content-type":"application/json"
		}
	}
	thePromise=fetch("http://localhost:3000/favourites",obj);
	thePromise.then(function(response){
		getFavourites();
	}).catch(function(error){
		console.log(error);
	});
}

module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};
// getFavourites();
// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution



function getUsers(){
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => { 
        let output = '<h2> User </h2'>
        data.(function(){
            output += `
            <div>
                <span>Name: ${results["0"].name.first} </span>
                <img src="${} </img>
            </div>
            `
        })
    document.getElementById('output').innerHTML = output;
    })
}

    // .catch( err => console.log("Oops, looks like we got an error: ", err))
    // .finally( ()=> console.log("Finally, This function always runs.."))

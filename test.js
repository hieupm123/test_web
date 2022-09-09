function post_data(data){
    var option = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    }
    fetch("https://fake-product-api.herokuapp.com/itemTypes",option)
        .then(function(res){
            return res.json();
        })
}

function get_data(){
    fetch("https://fake-product-api.herokuapp.com/itemTypes")
        .then(function(json){
            return json.json();
        })
        .then(function(json){
            console.log(json)
        })
}

get_data();

data = "123";
post_data(data);
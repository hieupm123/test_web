document.getElementById("hieu").addEventListener("click",function(){
    window.open("https://www.facebook.com/minhhieu.vu.33449138/");
})

document.getElementById("hoang").addEventListener("click",function(){
    window.open("https://www.facebook.com/profile.php?id=100007883520690");
})

function get_data(callback){
    fetch("http://localhost:3000/data")
        .then(function(json){
            return json.json();
        })
        .then(callback)
}
// function get_data(callback){
//     fetch("https://alonewapppm.herokuapp.com/data")
//         .then(function(json){
//             return json.json();
//         })
//         .then(callback)
// }

document.getElementById("ve").addEventListener("click",function(){
    window.location.replace("index.html");
})


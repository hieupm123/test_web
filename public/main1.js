function get_data(callback){
    fetch("//https://alonewapppm.herokuapp.com/data")
        .then(function(json){
            return json.json();
        })
        .then(callback)
}
function delete_data(id){
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    fetch(`//https://alonewapppm.herokuapp.com/data/${id}`,option)
        .then(function(res){
            return res.json();
        })
        .then(function(){
            var a = document.getElementById(`${id}-div`);
            if(a){
                a.remove();
            }
        })
}
function day(data){
    var a = []; var text = "";
    for(let i = 0; i < data.length; ++i){
        if(data[i] != '-'){
            text = text + data[i]
        }else{
            a.push(parseInt(text));
            text = "";
        }
    }
    a.push(parseInt(text));
    return a;
}

function cpday(time){
    times = new Date();
    if(time[0] < times.getFullYear()){
        return 1
    }else if(time[0] == times.getFullYear()){
        if(time[1] < (times.getMonth() + 1) || time[1] > 12 || time[1] <= 0){
            return 1
        }else if(time[1] == (times.getMonth() + 1)){
            if(time[2] < times.getDate() || time[2] > 32 || time[2] <= 0){
                return 1
            }
        }
    }
    return 0;
}


function run(){
    get_data(function(data){
        var t = 0;
        for(let i = 0; i < Object.keys(data).length; ++i){
            time = day(data[i].ngayhethan)

            if(cpday(day(data[i].ngayhethan))){
                delete_data(data[i].id)
                continue;
            }
            t += data[i].tien;
        }
        alert(`Tổng thu là ${t}`);
    })
}
document.getElementById("hieu").addEventListener("click",function(){
    window.open("https://www.facebook.com/minhhieu.vu.33449138/");
})

document.getElementById("hoang").addEventListener("click",function(){
    window.open("https://www.facebook.com/profile.php?id=100007883520690");
})

document.getElementById("ve").addEventListener("click",function(){
    window.location.replace("index.html");
})


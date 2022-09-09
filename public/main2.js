// function get_data(callback){
//     fetch("https://alonewapppm.herokuapp.com/data")
//         .then(function(json){
//             return json.json();
//         })
//         .then(callback)
// }


function get_data(callback){
    fetch("http://localhost:3000/data")
        .then(function(json){
            return json.json();
        })
        .then(callback)
}


// function delete_data(id){
//     var option = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//     }
//     fetch(`https://alonewapppm.herokuapp.com/data/${id}`,option)
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(){
//             var a = document.getElementById(`${id}-div`);
//             if(a){
//                 a.remove();
//             }
//         })
// }

function delete_data(id){
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    fetch(`http://localhost:3000/data/${id}`,option)
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

get_data(function(data){
    htmls = "";
    times = new Date();
    for(let i = 0; i < Object.keys(data).length; ++i){
        time = day(data[i].ngay)
        if(time[0] < times.getFullYear()){
            delete_data(data[i].id)
            break;
        }else if(time[0] == times.getFullYear()){
            if(time[1] < (times.getMonth() + 1) || time[1] > 12 || time[1] <= 0){
                delete_data(data[i].id)
                break;
            }else if(time[1] == (times.getMonth() + 1)){
                if(time[2] < times.getDate() || time[2] > 32 || time[2] <= 0){
                    delete_data(data[i].id)
                    break;
                }
            }
        }

        htmls = htmls + `\n<div class="container mt-5 d-flex justify-content-center" id = "${data[i].id}-div">


        <div class="card p-3">

            <div class="d-flex align-items-center">

                <div class="image">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155" >
            </div>

            <div class="ml-3 w-100">
                
               <h4 class="mb-0 mt-0" style="font-size: 0.9rem;">${data[i].ten}</h4>
               <span>${data[i].sdt}</span>

               <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

                <div class="d-flex flex-column">

                    <span class="articles">Giới tính</span>
                    <span class="number1">${data[i].sex}</span>
                    
                </div>

                <div class="d-flex flex-column">

                    <span class="followers">Hạn tập</span>
                    <span class="number2">${data[i].ngay}</span>
                    
                </div>


                <div class="d-flex flex-column">

                    <span class="rating">Số gói</span>
                    <span class="number3">${data[i].goi_tap}</span>
                    
                </div>
                   
               </div>


               <div class="button mt-2 d-flex flex-row align-items-center">

                <!-- <button id="${data[i].id}" class="btn btn-sm btn-outline-primary w-100">Chat</button> -->
                <button class="btn btn-sm btn-primary w-100 ml-2" onclick="delete_data(${data[i].id})">Xóa</button>

                   
               </div>


            </div>

                
            </div>
            
        </div>
        
         
     </div>\n`
    }
    document.getElementById("main_pg3").innerHTML = htmls;
})

document.getElementById("huy3").addEventListener("click",function(){
    window.location.replace("index.html");
})

function find(){
    get_data(function(data){
        htmls = "";
        let tmp = document.getElementById("search").value
        for(let i = 0; i < Object.keys(data).length; ++i){
            if(data[i].sdt.includes(tmp)){
                htmls = htmls + `\n<div class="container mt-5 d-flex justify-content-center" id = "${data[i].id}-div">


        <div class="card p-3">

            <div class="d-flex align-items-center">

                <div class="image">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155" >
            </div>

            <div class="ml-3 w-100">
                
               <h4 class="mb-0 mt-0" style="font-size: 0.9rem;">${data[i].ten}</h4>
               <span>${data[i].sdt}</span>

               <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

                <div class="d-flex flex-column">

                    <span class="articles">Giới tính</span>
                    <span class="number1">${data[i].sex}</span>
                    
                </div>

                <div class="d-flex flex-column">

                    <span class="followers">Hạn tập</span>
                    <span class="number2">${data[i].ngay}</span>
                    
                </div>


                <div class="d-flex flex-column">

                    <span class="rating">Số gói</span>
                    <span class="number3">${data[i].goi_tap}</span>
                    
                </div>
                   
               </div>


               <div class="button mt-2 d-flex flex-row align-items-center">

                <!-- <button id="${data[i].id}" class="btn btn-sm btn-outline-primary w-100">Chat</button> -->
                <button class="btn btn-sm btn-primary w-100 ml-2" onclick="delete_data(${data[i].id})">Xóa</button>

                   
               </div>


            </div>

                
            </div>
            
        </div>
        
         
     </div>\n`
            }
        }
        document.getElementById("main_pg3").innerHTML = htmls;
    })
}
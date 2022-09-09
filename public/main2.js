function get_data(callback){
    fetch("http://localhost:3000/data")
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

get_data(function(data){
    htmls = "";

    for(let i = 0; i < Object.keys(data).length; ++i){
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
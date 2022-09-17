function post_data(data){
    var option = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    }
    fetch("//https://alonewapppm.herokuapp.com/data",option)
        .then(function(res){
            return res.json();
        })
}



document.getElementById('form_page2').addEventListener('submit', function(evt){
    evt.preventDefault();
    var a = [];
    for(let i = 1; i <= 6; ++i){
        a.push(document.getElementById(`${i}_pg2`).value);
    }
    if (confirm(`Bạn có muốn lưu và thanh toán ${parseInt(a[2])} VNĐ`) == true) {
        data = {
            ten : a[0],
            sdt : a[1],
            goi_tap : parseInt(a[2]),
            sex : a[3],
            ngayhethan : a[4],
            ngaycap : a[5],
            tien : parseInt(a[2])
        }
        post_data(data);
        // setTimeout(() => {
            window.location.replace("index.html");
        // }, 1000);
    }
})

document.getElementById("huy2").addEventListener('click',function(){
    if (confirm("Bạn có muốn hủy?") == true) {
        window.location.replace("index.html");
    }
})



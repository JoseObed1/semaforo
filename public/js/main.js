const socket = io();
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green")
const counter = document.getElementById("counter-number")
const btn = document.getElementById("phonebtn")

const tm = document.getElementById("tm")
const tp = document.getElementById("tp")

var activeLight = ''

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('updateSemaphore', function (state) {
    let light = JSON.parse(state).light
    changeLight(light)

})

socket.on('updateData', function(data) {

    tm.innerHTML = data.totalM
    tp.innerHTML = data.totalP
    if ($.fn.dataTable.isDataTable('#maintable')) {
        $('#maintable').DataTable()
        .clear()
        .draw();
        $('#maintable').DataTable().destroy();
    }
    console.log(data)
    
    let html = ''
    data.data.forEach(row => {
        console.log(row)
       html += "<tr><td>" + row.steps + "</td><td>" + row.location +"</td></tr>"
    })
    $("#maintable tbody").append(html)

   $('#maintable').DataTable()
})

function changeLight(light) {
    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.remove("active");

    switch(light) {
        case 'GREEN':
            green.classList.add("active");
          break;
        case 'RED':
            red.classList.add("active");
            initCounter()
          break;
        case 'YELLOW':
            yellow.classList.add("active");

        break;
        default:
          // code block
      }
}

var totalTime = 0;
function initCounter() {
    totalTime = 10
    counter.classList.remove("disable");

    updateClock()
}


function updateClock() {
    counter.innerHTML = totalTime;

    if(totalTime < 10){
        counter.innerHTML = "0" + totalTime;
    }

    if(totalTime==0) {
        counter.innerHTML = '00';
        counter.classList.add("disable");


    } else {
        totalTime-=1;
        setTimeout("updateClock()",1000);
    }
}

btn.addEventListener("click", function(){
    window.location.href="/telefono.html"
});


// $(document).ready(function() {
//     $('#maintable').DataTable();
// } );


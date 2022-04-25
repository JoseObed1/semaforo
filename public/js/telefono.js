const socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

stopbtn.addEventListener("click", function(){
    console.log("stop")
    socket.emit('stop')
});

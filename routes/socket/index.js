module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log('socket client connected');

        socket.on('disconnect', function() {
            console.log('socket client disconnected');
        });

        socket.on('mousemove', function(data) {
            console.log(data);
        });
    });
}


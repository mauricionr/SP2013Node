module.exports = function (io) {
    //SPio.on('connection', function (client) {
    io.of('/SPio').on('connection', function (client) {
      console.log('connected socket io with user ' + client.handshake.session.user.username );
      setInterval(function () { 
          io.of('/SPio').emit('sendTimer', 'do it');
        }, 1000);
      client.on('timerSent', function (data) {
          client.emit('timerPingback', data);
      });
    // Add more client.on here
    // The requests should be authenticated, and you can get profile info 
    // var username = client.handshake.session.user.username;
    });
}

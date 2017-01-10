// We require/import the HTTP module
var http = require("http");

// =====================================================================

// Then define the ports we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;

// =====================================================================

// We need two different functions to handle requests, one for each server.
var server1 = http.createServer(handleGoodRequest).listen(7000);
var server2 = http.createServer(handleBadRequest).listen(7500);

function handleGoodRequest(request, response) {
    response.end("You look nice today!");
}

// =====================================================================

// Create our servers
function handleBadRequest(request, response) {
    response.end("You dont look nice today");
}

// =====================================================================

// Starting our servers
server1.listen(PORT1, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on; http://localhost:%s", PORT1);
});

server2.listen(PORT2, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on; http://localhost:%s", PORT2);
});

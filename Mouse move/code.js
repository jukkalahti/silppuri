// Globals
$(document).ready(function() {

    var ball = {
        mouseX: 0,
        mouseY: 0,
        currentX: 0,
        currentY: 0,
        accelerationX: 0,
        accelerationY: 0,
        accelerationSpeed: 0.01, // acceleration per tick
        Speed: 0, // vector
        maxSpeed: 1,
        tickSpeed: 8
    }

    // asetetaan lähtöpistepallolle
    var div = $("div");
    var position = div.position();
    var width = div.width();
    var height = div.height();
    ball.currentX = position.left + width / 2;
    ball.currentY = position.top + height / 2;

    var myTimer = setInterval(moveball, ball.tickSpeed);

    $("div").mousemove(function(event) {
        var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
        var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";

        ball.mouseX = event.pageX;
        ball.mouseY = event.pageY;

        $("span:first").text("( event.pageX, event.pageY ) : " + pageCoords);
        $("span:last").text("( event.clientX, event.clientY ) : " + clientCoords);
    });

    function moveball() {

        if (ball.mouseX > ball.currentX) {
            ball.accelerationX = ball.accelerationX + ball.accelerationSpeed;
            if (ball.accelerationX > ball.maxSpeed) ball.accelerationX = ball.maxSpeed;
        }
        if (ball.mouseX < ball.currentX) {
            ball.accelerationX = ball.accelerationX - ball.accelerationSpeed;
            if (ball.accelerationX < -1 * ball.maxSpeed) ball.accelerationX = -1 * ball.maxSpeed;
        }

        if (ball.mouseY > ball.currentY) {
            ball.accelerationY = ball.accelerationY + ball.accelerationSpeed;
            if (ball.accelerationY > ball.maxSpeed) ball.accelerationY = ball.maxSpeed;
        }
        if (ball.mouseY < ball.currentY) {
            ball.accelerationY = ball.accelerationY - ball.accelerationSpeed;
            if (ball.accelerationY < -1 * ball.maxSpeed) ball.accelerationY = -1 * ball.maxSpeed;
        }

        ball.currentX = ball.currentX + ball.accelerationX;
        ball.currentY = ball.currentY + ball.accelerationY;

        //console.log ("AccelerationX " + ball.accelerationX + " CurrentX " + ball.currentX + " CurrentMouseX " + ball.mouseX);
        // new place for h1
        $("h1").offset({
            top: ball.currentY,
            left: ball.currentX
        });
    }

});

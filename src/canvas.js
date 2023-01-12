let timerID;

window.onload = function() {
    canvas = document.getElementById('myCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext('2d');

    const video = document.getElementById('video');

    timerID = window.setInterval( function() {
        ctx.drawImage(video, 5, 5, window.innerWidth, 270);
    }, 30);

    video.addEventListener('pause', function() {
        stopTimer();
    });

    video.addEventListener('ended', function() {
        stopTimer();
    });
};

function stopTimer() {
    window.clearInterval(timerID);
};

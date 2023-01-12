window.onload = function() {
    canvas = document.getElementById('myCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    const video = document.getElementById('video');

    requestAnimationFrame(animate);

    function animate(currentTime){
        ctx.drawImage(video, 5, 5, window.innerWidth, 270);

        requestAnimationFrame(animate);
    }
};

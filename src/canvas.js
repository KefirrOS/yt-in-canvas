const canvas = document.querySelector('canvas');

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementsByTagName('video')[0];
    console.log('[Mariusz] video: ', video.childNodes);

    video.addEventListener('loadedmetadata', function() {
        canvas.width = this.videoWidth;
        canvas.height = this.videoHeight;
    });

    function draw() {
        canvas.getContext('2d').drawImage(video, 0, 0);
    }

    video.addEventListener('play', function() {
        if (video.paused || video.ended) return;
        draw();
    });
})
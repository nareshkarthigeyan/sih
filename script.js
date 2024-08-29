let video = document.getElementById("video");

const setUpCam = () => {
    navigator.mediaDevices.getUserMedia({
        video: {width: 600, height: 400},
        audio: false
    })
    .then((stream) => {
        video.srcObject = stream;
    })
}

setUpCam();
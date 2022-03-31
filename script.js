const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const captureStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = captureStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }





    } catch (error) {
        console.log("THIS IS AN ERROR" + error);
        
    }

}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true
    // Start Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;

});

// On load

selectMediaStream();
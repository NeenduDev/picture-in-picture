const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // Prompt the user to select a screen or window to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    // Assign the selected media stream to the video element's srcObject property
    videoElement.srcObject = mediaStream;

    // Play the video once metadata has been loaded
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Handle any errors that occur during media stream selection
    console.error("Error selecting media stream:", error);
  }
}

// Add an event listener to the button to handle Picture-in-Picture mode
button.addEventListener("click", async () => {
  // Disable the button to prevent multiple clicks
  button.disabled = true;

  try {
    // Request Picture-in-Picture mode for the video element
    await videoElement.requestPictureInPicture();
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error entering Picture-in-Picture mode:", error);
  }

  // Re-enable the button after the operation is complete
  button.disabled = false;
});

// Automatically invoke the media stream selection function when the page loads
selectMediaStream();

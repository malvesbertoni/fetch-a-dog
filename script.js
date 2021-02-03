const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggo-image");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
    .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse) {
        if (!document.getElementById("image-id")) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Dog picture";
            img.id = "image-id"
            doggos.appendChild(img);
        } else {
            document.getElementById("image-id").remove();
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Dog picture";
            img.id = "image-id"
            doggos.appendChild(img);
        }
    });
}

document.querySelector(".fetch-button").addEventListener("click", addNewDoggo);
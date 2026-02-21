let btn = document.querySelector("button");


btn.addEventListener("click", async function () {
    const loader = document.getElementById('loader');
    const container = document.getElementById("image-container");

    loader.classList.remove("hidden");
    container.innerHTML = '';
    container.style.display="grid";
    try {
        let data = await fetch("https://dog.ceo/api/breeds/image/random/20").then(response => response.json());
        container.innerHTML = '';
        for (let i = 0; i < data.message.length; i++) {
            let img = document.createElement("img");
            img.src = data.message[i];
            container.appendChild(img);
            img.classList.add(".img");
        }
    } catch (error) {
        alert(error.message);
    } finally {
        loader.classList.add("hidden");
    }
})

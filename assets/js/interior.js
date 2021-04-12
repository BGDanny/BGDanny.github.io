const divs = document.getElementsByTagName("div");
const section = document.getElementById("display");
divs[0].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/831001604588044298/2021_side_21eb.png";
    section.innerHTML = "";
    section.appendChild(img);
});
divs[1].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/831001532467511346/2021_side_02ea.png";
    section.innerHTML = "";
    section.appendChild(img);
});
divs[2].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/831002377104392243/2021_side_74ea.png";
    section.innerHTML = "";
    section.appendChild(img);
});
divs[3].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/831001785925107752/2021_side_41eb.png";
    section.innerHTML = "";
    section.appendChild(img);
});
const interior = document.getElementById("exterior");
interior.addEventListener("click", function () {
    window.location.href = "exterior.html";
});
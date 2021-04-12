const divs = document.getElementsByTagName("div");
const section = document.getElementById("display");
divs[0].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/830994427911995392/b21_ga1d2t_fl1_0223.png";
    section.innerHTML = "";
    section.appendChild(img);
});
divs[1].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/830994491711553566/b21_ga1d2t_fl1_0083.png";
    section.innerHTML = "";
    section.appendChild(img);
});
divs[2].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/830994542479409152/b21_ga1d2t_fl1_03t5.png";
    section.innerHTML = "";
    section.appendChild(img);
});
divs[3].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/830994606690009118/b21_ga1d2t_fl1_01j7.png";
    section.innerHTML = "";
    section.appendChild(img);
});
divs[4].addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/798361410421653505/830994723899441182/b21_ga1d2t_fl1_08x1.png";
    section.innerHTML = "";
    section.appendChild(img);
});
const interior = document.getElementById("interior");
interior.addEventListener("click", function () {
    window.location.href = "interior.html";
});
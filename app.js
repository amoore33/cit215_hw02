var thanos = 0;

function hit (dmg, phrase) {
    thanos += dmg;
    document.body.querySelector(".thanos").innerHTML = "Damage Taken: " + thanos.toString();
    document.body.querySelector(".phrase").innerHTML = phrase;
}

document.body.querySelector(".ironman").addEventListener("click", function () {
    hit(50, "Heh, nice.");
});
document.body.querySelector(".mario").addEventListener("click", function () {
    hit(25, "Here we go!");
});
document.body.querySelector(".crash").addEventListener("click", function () {
    hit(30, "WHOA!");
});
document.body.querySelector(".thor").addEventListener("click", function () {
    hit(75, "ANOTHER!");
});

document.body.querySelector(".reset").addEventListener("click", function () {
    thanos = 0;
    hit(0, "");
});
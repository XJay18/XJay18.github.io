function showGif(radio) {
    var gifMap = {
      "jelly": "assets/neuma/kunkun_jelly.gif",
      "rubber": "assets/neuma/kunkun_rubber.gif",
      "honey": "assets/neuma/kunkun_honey.gif"
    };
    var selectedGif = gifMap[radio.value];
    var displayGif = document.getElementById("displayKunkun");

    displayGif.src = selectedGif;
    displayGif.style.display = "block";
}
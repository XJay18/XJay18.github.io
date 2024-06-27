function showGifForRadio(radio) {
    var gifMap = {
      "jelly": "assets/neuma/kunkun_jelly",
      "rubber": "assets/neuma/kunkun_rubber",
      "honey": "assets/neuma/kunkun_honey"
    };
    var selectedGif = gifMap[radio.value];
    var displayGif = document.getElementById("displayKunkun");
    var displayView = document.getElementById("demoViewSelection").value;
    
    selectedGif = selectedGif + "_view" + displayView + ".gif";

    displayGif.src = selectedGif;
    displayGif.style.display = "block";
}

function showGifForRange(range) {
  var gifMap = {
    "jelly": "assets/neuma/kunkun_jelly",
    "rubber": "assets/neuma/kunkun_rubber",
    "honey": "assets/neuma/kunkun_honey"
  };
  var selected = document.querySelector('input[name="demoNameSelection"]:checked');
  if (selected) {
      var selectedGif = gifMap[selected.value];
      var displayGif = document.getElementById("displayKunkun");
      var displayView = range.value;
      
      selectedGif = selectedGif + "_view" + displayView + ".gif";
    
      displayGif.src = selectedGif;
      displayGif.style.display = "block";
  }

}
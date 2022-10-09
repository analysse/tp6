// javascript for tp5

window.onload = function() {
  document.querySelector("#titleBanner h1").classList.add("tp");

  document.querySelector("#titleBanner h1").onclick = function() {
    this.classList.toggle("blue");
  }
  
  document.querySelector("#columns #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#columns #equipment").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#columns #directions").onclick = function() {
    this.classList.toggle("tpShow");
  }

  document.querySelector("#columns #directions ol").innerHTML += "<li>Eat as much as your heart desires!</li>";  
} // end window.onload
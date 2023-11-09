function main() {
  document.getElementById("grow-me").classList.add("big");
  document.getElementById("shrink-me").classList.remove("big");
  var lis = document.getElementsByTagName("li");

  for (var i = 0; i < lis.length; i++) {
    console.log(lis[i].textContent);
  }

  var link = document.getElementsByClassName("link")[0];
  link.href = "https://www.example.com";
  link.innerHTML = "somewhere";
  document.getElementById("hide-me").style.display = "none";
  document.getElementById("show-me").style.display = "block";
  var name = document.getElementById("name").value;
  document.getElementsByTagName("h1")[0].textContent = "Welcome " + name;
}

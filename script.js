window.content = document.querySelector(".content");
window.startb = document.querySelector("#start");

function c() {
  content.innerHTML = `
  <span style="font-size: 35px"><i>Credits</i></span><br>
  | CubicDev<br>
  | ...<br>
  | boi I rly need some devs.
  `
}

function e() {
  window.location.href = window.location.href.replace(/level.\.html/gm, "index.html");
}

if (startb)
	document.querySelector("#lvl").innerText = "1";

if (localStorage.getItem("level") !== null) {
	if (startb) {
		startb.href = `level${localStorage.getItem("level")}.html?page=1`;
		document.querySelector("#lvl").innerText = localStorage.getItem("level");
	}
}
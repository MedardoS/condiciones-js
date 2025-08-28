//********** Ejercicio 1: Imagen borde rojo */
document.getElementById("imagen").addEventListener("click", function() {
  this.classList.toggle("borde-rojo");
});

//***** Ejercicio 2: Stickers */
document.getElementById("btn-stickers").addEventListener("click", function() {
  let s1 = Number(document.getElementById("sticker1").value) || 0;
  let s2 = Number(document.getElementById("sticker2").value) || 0;
  let s3 = Number(document.getElementById("sticker3").value) || 0;
  let total = s1 + s2 + s3;

  document.getElementById("resultado-stickers").textContent =
    total <= 10 ? `Llevas ${total} stickers` : "Llevas demasiados stickers";
});

//***** Ejercicio 3: Password */
let d1 = document.getElementById("digito1");
let d2 = document.getElementById("digito2");
let d3 = document.getElementById("digito3");

//***** llenar opciones del 1 al 9*/ 
for (let i = 1; i <= 9; i++) {
  [d1, d2, d3].forEach(sel => sel.add(new Option(i, i)));
}

document.getElementById("btn-password").addEventListener("click", function() {
  let password = d1.value + d2.value + d3.value;
  let msg = "password incorrecto";

  if (password === "911") msg = "password 1 correcto";
  else if (password === "714") msg = "password 2 correcto";

  document.getElementById("resultado-password").textContent = msg;
});

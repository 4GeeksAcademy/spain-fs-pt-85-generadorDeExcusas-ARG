var who = ["The dog", "My grandma", "The mailman", "My bird"];
var action = ["ate", "peed", "crushed", "broke"];
var what = ["my homework", "my phone", "the car"];
var when = [
   "before the class",
   "when I was sleeping",
   "while I was exercising",
   "during my lunch",
   "while I was praying"
 ];
var excusa = document.getElementById("excuse");

function randomElement(myArr) {
  return myArr[Math.floor(Math.random() * myArr.length)];
}
document.getElementById("generador").onclick = function() {
  let quien = randomElement(who);
  let accion = randomElement(action);
  let que = randomElement(what);
  let cuando = randomElement(when);
  excusa.innerHTML = `<h1>${quien} ${accion} ${que} ${cuando}.</h1>`;
};


const input = document.getElementById("input");
const btn = document.getElementById("btn");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

btn.addEventListener("click", function () {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    input.value = "";
    msg1.classList.add("hidden")
    msg2.classList.add("hidden")
    input.classList.remove("wrong-input")
  } else {
    console.log(window.innerWidth)
    if (window.innerWidth <= 768){
        msg1.classList.remove("hidden");
        msg2.classList.add("hidden")
    }else{
        msg2.classList.remove("hidden")
        msg1.classList.add("hidden")
    }

    input.classList.add("wrong-input")

  }
});

const userSlider = document.getElementById("user");
const cards = document.querySelectorAll(".card");
const close = document.getElementById("close");
const FormSubmition = document.getElementById("FormSubmition");
const offerBtn = document.getElementById("btn");
const offerBtn1 = document.getElementById("btn2");
const offerBtn2 = document.getElementById("btn3");

const titel = document.getElementById("titel");
const cardvalue = document.getElementsByClassName("cardvalue");
const submit = document.getElementById("submit");
const box = document.getElementById("formContainer");

userSlider.addEventListener("input", highlight);

function highlight() {
  const users = parseInt(userSlider.value);
  cards.forEach((card, index) => {
    const cardminUser = index * 43;
    const cardmaxuser = (index + 1) * 43;

    if (users >= cardminUser && users < cardmaxuser) {
      card.classList.add("highlighted");
    } else {
      card.classList.remove("highlighted");
    }
  });
}

close.addEventListener("click", () => {
  FormSubmition.style.display = "none";
});
offerBtn.addEventListener("click", (e) => {
  FormSubmition.style.display = "block";
  titel.innerText = cardvalue[0].innerText;
});
offerBtn1.addEventListener("click", (e) => {
  FormSubmition.style.display = "block";
  titel.innerText = cardvalue[1].innerText;
});
offerBtn2.addEventListener("click", (e) => {
  FormSubmition.style.display = "block";
  titel.innerText = cardvalue[2].innerText;
});
//
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  // ALLOWED_HOSTS = ["*"]
  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", "https://forms.maakeetoo.com/formsdata/996");
  // xhr.setRequestHeader("Ocp-Apim-Subscription-Key",LAZQR6SGIX2X8BZM4ZXDCEUHM);
  // xhr.send(null);
  // return xhr.responseText;
  // xhr.responseType = "json";
  // xhr.onload = () => {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     const data = xhr.response;
  //     console.log(data);
  //   } else {
  //     console.log(`Error: ${xhr.status}`);
  //   }
  // e.target.value = ""
  // };
  alert("Thank you! Your information saved ");
});

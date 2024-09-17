const eForm = document.querySelector("#formEmail")
const bForm = document.querySelector("#buttForm")
const bModal= document.querySelector("#buttonModal")
const modl = document.querySelector("#modal")
const pa = document.querySelector("#parra")
eForm.addEventListener("submit",verificar)
bModal.addEventListener("click",toggleModal)

let contacts =[
{ id:1,
  email:"josue@hotmail.com"
}
]

function toggleModal() {
    modl.classList.toggle("hidden")
}
function showEmail() {
pa.innerHTML=""

 const templ= `
 <p id="parra">A confirmation email has been sent to <br> <span>${contacts[contacts.length-1].email}</span>
  Please open it and <br> click the button inside to confirm your <br>subscription.
</p>`
pa.innerHTML += templ
}

function verificar(e) {
    e.preventDefault();
    const dat = new FormData(eForm)
    contacts.push({
    id: contacts[contacts.length-1]?.id +1 || 1,
    email: dat.get("email")
    })
    eForm.reset()
    toggleModal();
    showEmail();
}
console.log(contacts)




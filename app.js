
//mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu")
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
});

//modal window
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
let scrollTop = window.scrollTo(0,500);

if (scrollTop = true) {
    openModal()
}

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide")
}

closeBtn.addEventListener("click", closeModal)


function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show")
}

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal()
    }
})

//modal form
let formButton = document.querySelector(".submitmessage");
let modalForm = document.querySelector(".modalform");

formButton.addEventListener("click", openModalForm)

 
function openModalForm() {
    modalForm.classList.add("showform");
    modalForm.classList.remove("hideform")
}

closeBtn.addEventListener("click", closeModalForm)


function closeModalForm() {
    modalForm.classList.add("hideform");
    modalForm.classList.remove("showform")
}

modal.addEventListener("click", function(e) {
    if(e.target === modalForm) {
        closeModalForm()
    }
})
  
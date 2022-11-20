const modalButtonClick = () => { 
    const button = document.querySelector("#button-open-modal");
    const modal = document.querySelector(".backdrop");
    const closeModal = document.querySelector(".modal__close-btn");
    closeModal.addEventListener("click", () => { 
        modal.classList.add("is-hidden");
    });
    button.addEventListener("click", () => { 
        modal.classList.remove("is-hidden");
    });

}

modalButtonClick()
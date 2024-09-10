const contactForm = document.querySelector<HTMLFormElement>(".contact-form")!
const contactNameInput = document.querySelector<HTMLInputElement>("#name")!
const contactEmailInput = document.querySelector<HTMLInputElement>("#email")!
const contactMessageTextarea = document.querySelector<HTMLTextAreaElement>("#message")!
const contactSubmitBtn = document.querySelector<HTMLButtonElement>(".contact-submit-btn")!

contactSubmitBtn.addEventListener("click", async () => {
    const name = contactNameInput.value
    const email = contactEmailInput.value
    const message = contactMessageTextarea.value

    contactSubmitBtn.disabled = true

    console.log("Submit message", name, email, message)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    contactNameInput.value = ""
    contactEmailInput.value = ""
    contactMessageTextarea.value = ""
    contactSubmitBtn.disabled = false
})
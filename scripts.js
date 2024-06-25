document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (name && email && message) {
            console.log("Form Submitted");
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);
            alert("Thank you for your message!");
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});

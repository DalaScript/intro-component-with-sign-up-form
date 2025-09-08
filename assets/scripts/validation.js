const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll("input");
    let valid = true;
    let user = {};

    fields.forEach((field) => {
        const formGroup = field.parentElement;
        const errorMsg = formGroup.querySelector(".error-msg");
        const errorIcon = formGroup.querySelector(".error-icon");

        if (!field.value.trim()) {
            formGroup.classList.add("error");
            errorMsg.style.display = "block";
            errorIcon.style.display = "block";
            if(field.name === "email") {
                field.placeholder = "email@example/com";
            } else {
                field.placeholder = "";
            }
            valid = false;
        } else if (
            field.type === "email" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
        ) {
            formGroup.classList.add("error");
            errorMsg.textContent = "Looks Like this is not an email";
            errorMsg.style.display = "block";
            valid = false;
        } else {
            formGroup.classList.remove("error");
            errorMsg.style.display = "none";
            user[field.name] = field.value;
        }
    });
    
    if (valid) {
        alert("Form Submitted Successfully!");
        console.log(user);
        form.reset();
    }
});
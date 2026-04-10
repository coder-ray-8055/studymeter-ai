const btn = document.querySelector(".predict")

btn.addEventListener("click", async (e) => {
    e.preventDefault()

    const hour = document.querySelector(".hour")
    const hours = hour.value

    if (hours === "") {
        showToast("Enter hours of study", "warning")
        return
    }

    if (!hours || hours <= 0) {
        showToast("Enter proper values", "error")
        return
    }

    const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ hours: Number(hours) })
    });

    const data = await res.json()
    const icon = document.querySelector(".result i")


    console.log(data)
    if (data.marks > 100) {
        data.marks = 99.99
    }
    document.querySelector(".result p").innerText = "Predicting..."
    setTimeout(() => {
        document.querySelector(".result p").innerText =
            `Based on your ${hours} hours study you are likely to get ${data.marks} marks.`;

        if (data.marks > 40) {
            // icon.classList.remove("fa-calculator")
            icon.className = ""
            icon.classList.add("fa-circle-check", "fa-solid")
        } else {
            icon.classList.remove("fa-calculator")
            icon.classList.add("fa-circle-xmark")
        }

        showToast("Predicted", "success")
    }, 1500)

    // let marks = data.marks
    if (data.marks > 100) {
        data.marks = 99.99
    }
})

const marks = document.querySelector("#Marks")
const howw = document.querySelector(".HH")

marks.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "#markswindow"
})

howw.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "#How"
})

function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const msg = document.getElementById("toastMsg");
    const icon = document.getElementById("toastIcon");

    msg.textContent = message;

    toast.className = "toast show " + type;

    if (type === "success") {
        icon.innerHTML = "✔️";
    } else if (type === "error") {
        icon.innerHTML = "❌";
    } else if (type === "warning") {
        icon.innerHTML = "⚠️";
    }

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


const toggler = document.querySelector(".toggle")


toggler.addEventListener("click", (e) => {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        toggler.classList.remove("fa-moon")
        toggler.classList.add("fa-sun")
    } else {
        toggler.classList.remove("fa-sun")
        toggler.classList.add("fa-moon")
    }
})
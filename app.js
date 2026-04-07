const btn = document.querySelector(".predict")

btn.addEventListener("click", async (e) => {
    e.preventDefault()

    const hour = document.querySelector(".hour")
    const hours = hour.value

    if (hours === "") {
        console.log("Hours bar is empty")
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
    document.querySelector(".result p").innerText = "Predicting..."
    setTimeout(() => {
        document.querySelector(".result p").innerText = 
            `Based on your ${hours} hours study you are likely to get ${data.marks} marks.`;

        if (data.marks > 40) {
            icon.classList.remove("fa-calculator")
            icon.classList.add("fa-circle-check")
        } else {
            icon.classList.remove("fa-calculator")
            icon.classList.add("fa-circle-xmark")
        }
    }, 1500)
})
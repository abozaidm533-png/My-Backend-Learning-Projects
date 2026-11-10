const gameContainer = document.querySelector(".container")
const userResult = document.querySelector(".user_result img")
const BotResult = document.querySelector(".Bot_result img")
const result = document.querySelector(".result")
const optionImages = document.querySelectorAll("span.option_images")

const BotImages = ["images/rock.jpeg", "images/paper.jpeg", "images/scissor.jpeg"]

const outcomes = {
    RR: "Draw",
    RP: "You Lose",
    RS: "You Win",
    PR: "You Win",
    PP: "Draw",
    PS: "You Lose",
    SR: "You Lose",
    SP: "You Win",
    SS: "Draw",
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const clickedIndex = Array.from(optionImages).indexOf(clickedImage)

    optionImages.forEach((image, index) => {
        image.classList.toggle("active", index === clickedIndex)
    })

    gameContainer.classList.add("start")

    setTimeout(() => {
        gameContainer.classList.remove("start")

        userResult.src = clickedImage.querySelector("img").src

        const randomNumber = Math.floor(Math.random() * BotImages.length)
        BotResult.src = BotImages[randomNumber]

        const userValue = ["R", "P", "S"][clickedIndex]
        const botValue = ["R", "P", "S"][randomNumber]

        result.textContent = outcomes[userValue + botValue]
    }, 2500)
}

optionImages.forEach((image) => {
    image.addEventListener("click", handleOptionClick)
})
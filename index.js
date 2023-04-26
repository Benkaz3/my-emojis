const myEmojis = ["🐋", "😈","🐼"]
const emojiInput = document.getElementById('emoji-input')
const emojiContainer = document.getElementById('emojis-container')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')

pushBtn.addEventListener('click', function () {
    if (emojiInput.value) { 
        myEmojis.push(emojiInput.value)
        render()
    }   
})

function render() {
    emojiContainer.innerHTML = ''
    for (let i = 0; i < myEmojis.length; i++) {
        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
    }
    emojiInput.value = ''
}

unshiftBtn.addEventListener('click', function () {
    if (emojiInput.value) { 
        myEmojis.unshift(emojiInput.value)
        render()
    }   
})

popBtn.addEventListener('click', function () {
    myEmojis.pop()
    render()
})

shiftBtn.addEventListener('click', function () {
    myEmojis.shift()
    render()
})

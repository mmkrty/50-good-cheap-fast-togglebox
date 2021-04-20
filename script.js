const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(clickedtoggle) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === clickedtoggle){
            fast.checked = false
        }

        if(cheap === clickedtoggle){
            good.checked = false
        }

        if(fast === clickedtoggle){
            cheap.checked = false
        }
    }
}
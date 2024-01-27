window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem != null) {
        if (document.getElementById('home')) {
            document.getElementById('home').style.background = localStorage.getItem('cc')
        }
        if (document.getElementById('page1')) {
            document.getElementById('page1').style.background = localStorage.getItem('cc')
        }
    }
})
function reset() {
    localStorage.setItem('cc', `
    linear-gradient(
        338deg,
        rgb(193 146 146) 0%,
        rgba(116, 115, 255, 1) 35%,
        rgba(107, 107, 255, 1) 59%,
        rgba(89, 164, 159, 1) 81%,
        rgba(194, 194, 194, 1) 100%
      )
    `)

    window.location.reload()
}

window.addEventListener("load", (e)=>{
    document.querySelectorAll("figure").forEach(element => {
        element.classList.add("one-third")
    });
})

document.querySelector("footer").addEventListener("click", e => {
    document.querySelector("footer").remove()
})

console.log(document.querySelectorAll("figure")[4])

document.querySelectorAll("figure")[4].addEventListener("dblclick", e => {
    console.log("Hi")
    document.querySelectorAll("figure")[4].style.visibility = 'hidden'
})

let og_font
document.querySelectorAll("figure")[0].addEventListener("mouseover", e => {
    console.log(document.querySelectorAll("figure")[0])
    if(document.querySelectorAll("figcaption")[0].style.fontFamily != 'cursive') og_font = document.querySelectorAll("figcaption")[0].style.fontFamily
    document.querySelectorAll("figcaption")[0].style.fontFamily = 'cursive'
})

document.querySelectorAll("figure")[0].addEventListener("mouseleave", e => {
    e.stopPropagation()
    document.querySelectorAll("figcaption")[0].style.fontFamily = 'Times'
})
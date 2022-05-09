



function showSpan(e){

let span = e.parentElement.parentElement.children[1];


let p = e.parentElement.children[0];


if(span.classList.contains("span")){
span.setAttribute("class", "spanActive")
e.style.transform = "rotate(180deg)"
p.style.fontWeight = "700"

}
else if (span.classList.contains("spanActive")){
    span.setAttribute("class", "span")
    e.style.transform = "rotate(0deg)"
    p.style.fontWeight = "400"

}
}
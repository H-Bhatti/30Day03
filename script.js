const input = document.querySelectorAll(".controls input");

input.forEach(input=>{
    input.addEventListener("change",handleUpdate)
})
input.forEach(input=>{
    input.addEventListener("mousemove",handleUpdate)
})

function handleUpdate (){
    console.log(this.value)
    let suffix = this.dataset.sizing || ""

    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}
const slider = document.querySelector('.slider')
const before = document.querySelector('.img-container-before')
const after = document.querySelector('.img-container-after')
const container = document.querySelector('.container')

const drag = (event) =>{
   let xPos = event.layerX
   let size = container.offsetWidth
   console.log(size)
   before.style.width = xPos + "px"
   slider.style.left = xPos + "px"

   if(xPos<20){
    before.style.width = 0 + "px"
    slider.style.left = 0 + "px" 
   }

   if(xPos + 20 > size){
    before.style.width = size + "px"
    slider.style.left = size + "px" 
   }

}

container.addEventListener('mousemove', drag)
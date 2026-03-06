
export function startNeuralActivity(){

 document.addEventListener("keydown", pulse)
 document.addEventListener("click", pulse)

}

function pulse(){

 const node=document.createElement("div")

 node.style.position="fixed"
 node.style.width="6px"
 node.style.height="6px"
 node.style.borderRadius="50%"
 node.style.background="#00ff9c"
 node.style.boxShadow="0 0 12px #00ff9c"

 node.style.left=Math.random()*window.innerWidth+"px"
 node.style.top=Math.random()*window.innerHeight+"px"

 document.body.appendChild(node)

 setTimeout(()=>node.remove(),500)

}

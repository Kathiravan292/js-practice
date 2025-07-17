document.querySelector("#notes1").addEventListener("dblclick",()=>{
    if(confirm("delete")){
        notes1.value = ""
    }
})
document.querySelector("#notes").addEventListener("dblclick",()=>{
    if(confirm("delete")){
        notes.value = ""
    }
})
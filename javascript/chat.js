const form = document.querySelector(".typing-area"),
inputField = document.querySelector(".input-field"),
sendBtn = document.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault(); // determine of default functions (form submitting)
}

sendBtn.onclick = ()=>{
    
    // let's start Ajax
    let xhr = new XMLHttpRequest(); // creating XML object
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                inputField.value = ""; // once message inserted into database then leave bank the tinput field
                scrollToBottom();
            }
        }
    }
    // we haveto end the form data through ajax to php
    let formData = new FormData(form); // creating new formData Object
    xhr.send(formData); // sending the form data to php
}

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
} 
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(()=> {
    // let's start Ajax
    let xhr = new XMLHttpRequest(); // creating XML object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){ // if active class not contains in chatbox the scroll to bottom
                    scrollToBottom();
                }
            }
        }
    }
    // we haveto end the form data through ajax to php
    let formData = new FormData(form); // creating new formData Object
    xhr.send(formData);
}, 500); // this function will run frequently after 500ms


function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}
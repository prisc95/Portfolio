function typing() {
    const text = document.querySelector(".typing-text");
    const fullText = "Frontend Developer"; 
    let index = 0;

    function typeText() {
        if (index < fullText.length) {
            text.textContent += fullText[index];
            index++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(deleteText, 1000); 
        }
    }

    function deleteText() {
        if (index > 0) {
            text.textContent = text.textContent.slice(0, -1); 
            index--;
            setTimeout(deleteText, 100); 
        } else {
            setTimeout(typeText, 500); 
        }
    }

    text.textContent = ""; 
    typeText(); 

}

/*typing();
setInterval(typing, 8000);*/



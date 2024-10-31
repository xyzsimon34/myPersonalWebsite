$(document).ready(function() {
    let text = "Welcome to My Portfolio Hi, I'm Simon,";
    let index = 0;
    let speed = 100;

    function typeWriter() {
        if (index < text.length) {
            $("#hero-text").append(text.charAt(index));
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    function flashWeb3Text() {
        $("#web3-text").fadeToggle(1000); 
    }

    setInterval(flashWeb3Text, 1000); // 每500ms執行一次flashWeb3Text

});
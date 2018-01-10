function recognizeKeyCode() {
    window.addEventListener('keyup', (e) => {
        console.log(e.key);
        var code = e.keyCode;
        document.querySelector('h2').innerHTML = code;

        if (code == 32) {
            document.querySelector('h4').innerHTML = "SPACE";
        } else {
            document.querySelector('h4').innerHTML = e.key;
        }
    })

}
recognizeKeyCode();

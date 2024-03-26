document.addEventListener('keydown', function(event) {
    let keylogger = document.getElementById('keylogger');
    let key = event.key.toLowerCase();
    if (key.length === 1 && key.match(/[a-z]/i)) {
        if (document.activeElement === keylogger) {
            keylogger.value += key + key;
        } else {
            keylogger.value += key;
        }
    }
});

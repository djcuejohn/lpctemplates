function copyText(textboxId) {
    var textbox = document.getElementById(textboxId);
    textbox.select();
    document.execCommand("copy");
}

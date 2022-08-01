
document.getElementById('checkAll').onclick = function() {
    const checkboxes = document.getElementsByName('check');
    for (let checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
}

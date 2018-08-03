
HTMLDivElement.prototype.toggleModal = function (toggle) {
    var modal = this;
    if (!modal.classList.contains('modal')) {
        return false;
    }
    var display = modal.style.display;
    if (toggle != undefined) {
        modal.style.display = !!toggle ? 'block' : 'none';
        return true;
    }
    modal.style.display = (display === 'none' || display === '') ? 'block' : 'none';
    return true;
}
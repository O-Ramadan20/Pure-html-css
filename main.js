const droppToggle = document.querySelector('.toggle-menu');
const droopToggleI = document.querySelector('.toggle-menu i');
const dropMenu = document.querySelector('.drop-menu');

droppToggle.onclick = function () {
    dropMenu.classList.toggle('open');
    const isOpen = dropMenu.classList.contains('open')

    droopToggleI.classList = isOpen
        ? 'fa fa-xmark fa-2x'
        : 'fa fa-bars fa-2x'
}
//Chặn click chột phải
// document.addEventListener('contextmenu', event => event.preventDefault());
//Chặn F12 và Ctrl U
// document.onkeydown = function (e) {
//     if (e.ctrlKey && (e.keyCode === 85) || (e.keyCode === 123) || e.ctrlKey && (e.keyCode === 16) && (e.keyCode === 73)) {
//         $("#linkGG").attr("href", "#");
//         return false;
//     }
// };
//Hiệu ứng waiting cho button
function pleaseWaitButton(thatButton) {
    thatButton.disabled = true;
    thatButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Đợi xíu nha...';
}
console.log('start')
function classToggle() {
    this.classList.toggle('active');
    this.classList.toggle('activ');
    sidebarOpen()
}
document.querySelector('.navbar__trigger').addEventListener('click', classToggle);

function sidebarOpen() {

var b = document.getElementsByClassName("bodyy")[0]
console.log(b)
 b.classList.toggle("navbar--is-open");

 b.classList.toggle("navbar--is-closed");

}
console.log('end')

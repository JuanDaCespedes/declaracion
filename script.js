let si = document.getElementById('si');
// let url = "https://github.com/JuanDaCespedes/declaracion/tree/main/img/Sami.gif"
si.addEventListener("click",function(e){
    Swal.fire({
        title: 'Me Haces Feliz!',
        width: 600,
        padding: '5em',
        background: 'url(img/Sami.gif)'
        
      });
});
let no = document.getElementById('no');
no.addEventListener("mousemove",function(e){
    let x = Math.round(Math.random() * 93);
    let y = Math.round(Math.random() * 93);
    no.style.left = x + "%";
    no.style.top = y + "%";
});
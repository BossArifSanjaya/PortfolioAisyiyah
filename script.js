navbar = document.querySelector(".dropdown").querySelectorAll(".menu");
console.log(navbar);
navbar.forEach(element => {
    element.addEventListener("click", function() {
     navbar.forEach(nav=>nav.classList.remove("aktif")) 
     this.classList.add("aktif");  
    })   
});

const menuicon = document.querySelector('.menu-icon input');
const dropdown = document.querySelector('.dropdown');
menuicon.addEventListener('click', function() {
    dropdown.classList.toggle('slide');
});

function aktif(pilih){
if (pilih == "Beranda"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Beranda.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/Logo Musyda Aisyiyah kecil.png'></img>";
}else if (pilih == "Internal"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Internal.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/Internal.png'></img>";
}else if (pilih == "Eksternal"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Eksternal.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/Eksternal.png'></img>";
}else if (pilih == "Umum"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Program Umum.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/Logo Aisyiyah Vector.png'></img>";
}else if (pilih == "Bidang"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Program Bidang.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/kesehatan.png'></img>";
}else if (pilih == "Tantangan"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Tantangan.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/tantangan.png'></img>";
}else if (pilih == "Strategi"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Strategi.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/Strategi.png'></img>";
}else if (pilih == "Peluang"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Peluang.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/Peluang.png'></img>";
}else if (pilih == "TopikTerkini"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Topik.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/koran.png'></img>";
}else if (pilih == "Tentang"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/Tentang.html'></iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/Logo Aisyiyah Vector.png'></img>";
}
 else if (pilih == "Kontak"){
    document.getElementById('isi1').innerHTML = "<iframe src='Portofolio/kontak.html'</iframe>";
    document.getElementById('isi2').innerHTML = "<img src='Gambar/WA.png'></img>";
}
};
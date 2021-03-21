const pertanyaan = document.querySelector('h1');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const yj = yes.querySelector('h2');
const nj = no.querySelector('h2');

var questions = ["Yok Dimulai!!!", "Sudah Siap", "jangan coba jawab ngga ya", "Kamu sayang ga sama saya?", "Kamu kangen ga sama saya?"];
var Oks = ["Mulai", "Sudah", "Iya", "Iya", "Iya", "Iya"];
var Nos = ["", "Belum", "Iya", "Iya", "Iya", "Iya"];
var n = 50000;
let i = 0;


pertanyaan.innerHTML = questions[i];
yj.innerHTML = Oks[i];
no.style.display = 'none';
yes.addEventListener('click', function Q2() {
    i++;
    no.style.display = 'table';
    if (i == 5) {
        alert("Saya juga kangen banget");
        pertanyaan.innerHTML = 'Terima Kasih Sudah menjawab';
        yj.innerHTML = 'Selesai';
        no.style.display = 'none';
        alert("Heheheheh");
        i = 0;
        return;
    } else if (i == 4) {
        alert("Saya juga syang banget sama kamu");
    }
    pertanyaan.innerHTML = questions[i];
    yj.innerHTML = Oks[i];
    nj.innerHTML = "Ngga";
    yes.addEventListener('click', Q2);

    no.addEventListener('mouseover', function () {
        nj.innerHTML = Oks[i];
    })
    no.addEventListener('mouseout', function () {
        nj.innerHTML = "Ngga";
    })
    no.addEventListener('click', Q2);
})










// alert("hello");





// sleep(n)
// if(i!=0 && i<5){
//     pertanyaan.innerHTML=questions[i];
//     alert(i);
//     yj.innerHTML = Oks[i];

//     yes.addEventListener('click',function(){
//         isleep = 0;
//     })
//     no.addEventListener('mouseover',function(){
//         no.innerHTML = nos[i];
//         isleep=0;
//     })
// } 
// alert(i)
// i=5;

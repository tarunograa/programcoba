const pertanyaan = document.querySelector(".atas");
const no = document.querySelector(".no");
const yes = document.querySelector(".yes");

no.addEventListener('click', function(){
    pertanyaan.innerHTML="kenapa?";
    no.innerHTML = "aku jelek ya";
    yes.innerHTML = "aku buriq ya";
})

yes.addEventListener('click', function(){
    alert("aku juga sayang kamu");
    pertanyaan.innerHTML="Mau jadi pacar aku ga?";
    no.innerHTML = "mau";
    yes.innerHTML = "mau banget";
})
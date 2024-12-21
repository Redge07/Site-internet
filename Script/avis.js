var cpt = 0;

function move(value) {
    distance = value * -150;
    Elems = document.querySelectorAll(".elem");
    Textes = document.querySelectorAll(".texte");
    Paras = document.querySelectorAll(".para");
    Elems.forEach(function(Elem,index){
        if (index != value) {
            Elem.style.transform = `translate(${distance}%,0)`;
            Elem.style.scale = 0.6;
            Elem.style.position = 'absolute';
            Elem.style.pointerEvents = 'none';
            Elem.style.opacity = 0.5;
        }
        else if (index == value){
            Elem.style.transform = 'none';
            Elem.style.position = 'relative';
            Elem.style.scale = 1;
            Elem.style.pointerEvents = 'auto';
            Elem.style.opacity = 1;
        }

        distance = distance + 150;
    });
        
}

function change(value) {
    Elems = document.querySelectorAll(".elem");
    len = Elems.length;
    cpt = cpt + value;
    if (cpt < 0) {
        cpt = len - 1;
    }else if(cpt == len) {
        cpt = 0;
    }
    move(cpt);
}

window.addEventListener("load", function() {
    move(0);
});

function sidebar2() {
    main = document.getElementById('main2');
    footer = document.querySelector('.footer');
    var headerphone = document.getElementById('header_phone');

    if (headerphone.classList.contains('open')) {
        main.style.filter = "blur(5px)";
        footer.style.filter = "blur(5px)";

        main.classList.add('open');
        footer.classList.add('open');

    }else{

        main.style.filter = "blur(0px)";
        footer.style.filter = "blur(0px)";

        main.classList.remove('open');
        footer.classList.remove('open');
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('header').addEventListener('click', () => {
        main = document.getElementById('main2');
        footer = document.querySelector('.footer');
        if (!headerphone.classList.contains('open')) {
            main.style.filter = "blur(0px)";
            footer.style.filter = "blur(0px)";

            main.classList.remove('open');
            footer.classList.remove('open');
        }
    });
});

document.getElementById('novalid').addEventListener('click', () => {
    document.querySelector('.res').style.display = 'none';
    Containers_input = document.querySelectorAll('.container_input');
                Containers_input.forEach(function(container_input){
                    container_input.style.pointerEvents = 'auto';
                });
});

function avis() {
    let cpt = 0;
        Inputs = document.querySelectorAll('.info');
        Inputs.forEach(function(input){
            if (input.querySelector('input')){
                if (input.querySelector('input').value === '') {
                    input.querySelector('span').textContent = 'Veuillez remplir cette case';
                }else{
                    input.querySelector('span').textContent = '';
                    cpt = cpt + 1;
                }
            }
            if (input.querySelector('textarea')){
                if (input.querySelector('textarea').value === '') {
                    input.querySelector('span').textContent = 'Veuillez remplir cette case';
                }else{
                    input.querySelector('span').textContent = '';
                    cpt = cpt + 1;
                }
            }
        });
        if (cpt === 4) {
                console.log('yes');
                document.querySelector('.res').style.display = 'block';
                let Containers_input = document.querySelectorAll('.info');
                Containers_input.forEach(function(container_input){
                    container_input.style.pointerEvents = 'none';
                });
            }else {
                console.log('no');
            }
}

$(document).ready(function(){
    $("#valid").click(function(event){
        event.preventDefault();
        let Contenus = document.querySelectorAll('.info');
        let tab = [];
        Contenus.forEach(function(contenu){
            if (contenu.querySelector('input')) {
                tab.push(contenu.querySelector('input').value);
            }else{
                tab.push(contenu.querySelector('textarea').value);
            }
        });
        console.log(tab);
        $.ajax({
            url: "phpfichier/send.php",
            type: "POST",
            data: {nom: tab[0], prenom: tab[1], mail: tab[2], message: tab[3]},
            dataType: "json",
            success: function(response){
                var res = response.res;
                if (res == 0) {
                    alert('Votre message a bien été envoyé');
                    location.reload();
                }else{
                    alert("Votre adresse mail est incorrecte");
                    location.reload();
                }
            },
            error: function(xhr, status, error){
                // Gérer les erreurs
                console.error(error);
              }
        });

    });
});
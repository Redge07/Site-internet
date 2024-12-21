
function msg() {
    Box = document.querySelector(".box");
    if (!Box.classList.contains("open")) {
        document.querySelector(".sidebar").style.display = "none";
        document.getElementById("header").style.filter = "blur(5px) brightness(0.5)";
        document.getElementById("header").style.pointerEvents = "none";
        document.getElementById("footer").style.filter = "blur(5px) brightness(0.5)";
        document.getElementById("footer").style.pointerEvents = "none";
        document.querySelector(".container").style.filter = "blur(5px) brightness(0.3)";
        document.querySelector(".img").style.filter = "brightness(0.3) blur(5px)";
        Box.classList.add("open");
        document.getElementById('main').style.pointerEvents = 'none';
        if(window.innerWidth < 800) {
            document.getElementById("footer").style.display = "none";
        }
    }else{
        document.querySelector(".sidebar").style.display = "flex";
        document.getElementById("header").style.filter = "brightness(1)";
        document.getElementById("header").style.pointerEvents = "auto";
        document.getElementById("footer").style.filter = "brightness(1)";
        document.getElementById("footer").style.pointerEvents = "auto";
        document.getElementById("footer").style.display = "flex";
        document.querySelector(".container").style.filter = "none";
        document.querySelector(".img").style.filter = "brightness(0.5)";
        Box.classList.remove("open");
        document.getElementById('main').style.pointerEvents = 'auto';
    }
}

function footer() {
    const box = document.querySelector(".box");
    if (box.classList.contains("open") && window.innerWidth < 800) {
        console.log("OUI");
        document.getElementById("footer").style.display = "none";
    }else{
        document.getElementById("footer").style.display = "flex";
    }
}

window.addEventListener('resize', footer);
window.addEventListener('load', footer);


$(document).ready(function(){
    $("#btn_envoi").click(function(event){
        event.preventDefault();
        var nom = $("#nom").val();
        var mail = $("#mail").val();
        var sujet = $("#sujet").val();
        var message = $("#message").val();
        if(nom == "") {
            $(".wrong_nom").text("*Veuillez remplir le champ");
        }else{
            $(".wrong_nom").text("");
        }
        if(mail == "") {
            $(".wrong_mail").text("*Veuillez remplir le champ");
        }else{
            $(".wrong_mail").text("");
        }
        if(sujet == "") {
            $(".wrong_sujet").text("*Veuillez remplir le champ");
        }else{
            $(".wrong_sujet").text("");
        }
        if(message == "") {
            $(".wrong_message").text("*Veuillez écrire votre message");
        }else{
            $(".wrong_message").text("");
        }

        if (nom !== "" & mail !== "" & sujet !== "" & message !== "") {
            $.ajax({
                url: "phpfichier/send.php",
                type: "POST",
                data: {nom: nom, mail: mail, sujet: sujet, message: message},
                dataType: "json",
                success: function(response){
                    var res = response.res;
                    if (res == 0) {
                        alert('Votre message a bien été envoyé');
                        location.reload();
                    }else{
                        alert("Votre adresse mail est incorrecte");
                    }
                },
                error: function(xhr, status, error){
                    // Gérer les erreurs
                    console.error(error);
                  }
            });
        }
    });
});
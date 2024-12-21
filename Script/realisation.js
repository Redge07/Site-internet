var index_dossier = 0;
var url_photo = "vide";

function test(photo,value,toggle) {
  index_dossier = value;
  const img = photo.querySelector(".source");
  if (img) {
    var url = img.src;
  } else {
    var url = photo.src;
  }
  const Defilement = document.querySelector(".defilement");
  if (toggle == -1 ) {
    Defilement.classList.toggle('open');
  }
  SelectPhotos = document.querySelectorAll(".select_photo");
  SelectPhotos.forEach(function(selectphoto){
    var url_select = selectphoto.src;
    if (url_select == url) {
      url_photo = url;
      selectphoto.style.display = "flex";
    } else {
      selectphoto.style.display = "none";
    }
  });
}

function change(value) {
  Dossiers = document.querySelectorAll(".container_liste_photos");
  Dossiers.forEach(function(dossier,index){
    if (index == index_dossier) {
      Fichiers = dossier.querySelectorAll(".source");
      len_fichiers = Fichiers.length;
      Fichiers.forEach(function(fichier, index){
        var url = fichier.src;
        if (url == url_photo) {
          if (value == 1) {
            if (len_fichiers - 1 == index) {
              test(Fichiers[0],index_dossier);
              value = 0;
            }else{
              test(Fichiers[index+1],index_dossier);
              value = 0;
            }
          }else if(value == -1){
            if (index == 0) {
              test(Fichiers[len_fichiers - 1],index_dossier,0);
              value = 0;
            }else{
              test(Fichiers[index-1],index_dossier,0);
              value = 0;
            }
          }
        }
      });
    }
  });
}

function fermer() {
  const Defilement = document.querySelector(".defilement");
  Defilement.classList.toggle('open');
}

function ouvrir(value) {
  Dossiers = document.querySelectorAll(".dossier");
  Dossiers.forEach(function(dossier,index){
    if (value == index) {
      Fichiers = dossier.querySelectorAll(".photo");
      if (!dossier.classList.contains("open")){
        dossier.querySelector(".couverture").classList.add("open");
        dossier.querySelector(".btn_open").style.display = "none";
        dossier.classList.add("open");
        Fichiers.forEach(function(fichier){
          fichier.style.transform = "translate(0,0)";
          fichier.style.position = "relative";
          fichier.style.opacity = 0.5;
          fichier.style.pointerEvents = "auto";
          fichier.addEventListener('mouseover', () => {
            fichier.style.opacity = '1';
        });

        fichier.addEventListener('mouseout', () => {
            fichier.style.opacity = '0.5';
        });
        });
      }else{
        dossier.querySelector(".couverture").classList.remove("open");
        dossier.querySelector(".btn_open").style.display = "flex";
        dossier.classList.remove("open");
        Fichiers.forEach(function(fichier){
          fichier.style.transform = "translate(0,-50%)";
          fichier.style.position = "absolute";
          fichier.style.opacity = 0;
          fichier.style.pointerEvents = "none";
        });
      }
    }
  });
}

function remonter() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

function open_dossier(value) {
  Dossiers = document.querySelectorAll(".container_dossier");
  let max = Dossiers.length;
    Dossiers.forEach(function(dossier,index){
    if (index===value) {
      if (dossier.style.height === '0px' || dossier.style.height === '' ) {
        dossier.style.height = "auto";
        if (index === max-1) {
          Dossiers[0].style.height = "0px";
        } else {
          Dossiers[1].style.height = "0px";
        }
        
      }else{
        dossier.style.height = '0px';
      }
    }
  });
}

function scroll_section(value) {
  let Parties = document.querySelectorAll('.partie');
  Parties.forEach(function(partie,index){
    if (index == value) {
      if (partie.querySelector('.dossier').classList.contains('dossier_active')) {
        partie.querySelector('.dossier').classList.remove('dossier_active');
      }else{
        partie.querySelector('.dossier').classList.add('dossier_active');
      }
    }
    if (value == 1) {
      Parties[0].querySelector('.dossier').classList.remove('dossier_active');
     }else{
      Parties[1].querySelector('.dossier').classList.remove('dossier_active');
     }
  }); 
}

function raccourci() {
  if(window.scrollY > 600) {
      document.querySelector('.raccourci').style.opacity = 1;
      document.querySelector('.raccourci').style.transform = 'translate(0,-50%)';
      document.querySelector('.raccourci').style.pointerEvents = 'auto';
  }else{
    document.querySelector('.raccourci').style.opacity = 0;
    document.querySelector('.raccourci').style.transform = 'translate(50%,-50%)';
    document.querySelector('.raccourci').style.pointerEvents = 'none';
  }
}

window.addEventListener('resize', raccourci);
window.addEventListener('load', raccourci);
window.addEventListener('scroll', raccourci);




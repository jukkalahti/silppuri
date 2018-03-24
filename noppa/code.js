$(document).ready(function() {

  // Alustetaan lomake
  $("#rounds").val(100);
  $("#dices").val(3);

  function heitto(noppia) {
    var nopat = 0;
    var noppa = 0;
    for (j = 0; j < noppia; j++) {
      noppa = Math.floor(Math.random() * 6) + 1;
      nopat = nopat + noppa;
    }
    return nopat;
  }

  function arvonta(rounds, dice) {
    //console.log(rounds + " " + dice + " ");
    var taulukko = [];
    for (i = 0; i<rounds; i++){
      var tulos = heitto(dice);
      //console.log("Noppia: " + dice + " Tulos: " + tulos);
      // $("#content").append("<p>Noppia: " + dice + " Tulos: " + tulos +"</p>");
      // Otetaan tulokset talteen taulukkoon
      if (!taulukko[tulos]) {
        taulukko[tulos] = 1;
      } else {
        taulukko[tulos] = taulukko[tulos] + 1;
      }
    }
    // Tyhjennetään tulostusalue
    $("#content").empty();
    // Tulostetaan yhteenveto
    $("#content").append("<p>Kierroksia: " + rounds + " Noppia: " + dice +"</p>");
    for (k = dice; k < taulukko.length; k++) {
      // Putsataan undefined arvot nolliksi
      if (!taulukko[k]) {taulukko[k] = 0}
      // Tulos sivulle
      $("#content").append("<p>Tulos " + k + " saatiin " + taulukko[k] +" kertaa ( " + Math.round(taulukko[k] / rounds * 100) + "% )</p>");
    }

  }
  $( "button" ).click(function() {
    let rounds = $("#rounds").val();
    let dices = $("#dices").val();
    arvonta (rounds, dices);
  });
});

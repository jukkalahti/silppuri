$(document).ready(function (){
  var actions = [
    ["case 1", "case 2", ["subcase 1", "subcase 2"], "case 3"],
    ["next 1", "next 2", "next 3"],
    ["final 1", "final 2", "final 3"],
    "End"
  ];

  /* Output action*/
  function outputAction(actionTxt) {
      $('body').append("<p>" + actionTxt + "</p>");
  }

  /* The end */
  function theEnd() {
    if (!endReached) $('body').append("<p>The End</p>");
    endReached = true;
  }


  // Rekursio kaikki nodet
  function rekursio(data) {
    for (var x=0; x < data.length; x++) {
      // Tarkistetaan jos on array tehdään rekursio
      if (Array.isArray(data[x])) {
        console.log(data[x].length);
        rekursio(data[x]);
      } else {
        // Jos ei ole array tulostetaan action
        console.log (data[x]);
      }
    }
  }

  // Rekursio arvtoaan näytettävät
  function rndRekursio(data) {
    var x = Math.floor((Math.random() * data.length));
    // Tarkistetaan jos on array tehdään rekursio
    if (Array.isArray(data[x])) {
      console.log(data[x].length);
      rndRekursio(data[x]);
    } else {
      // Jos ei ole array tulostetaan action
      outputAction(data[x]);
      console.log (data[x]);
    }
  }

  // Tulosta kaikki vaihtoehdot
  console.log("REKURSIO");
  rekursio(actions);

  // Satunnainen valinta vaihtoehdoista
  console.log("rndREKURSIO ********************");
  for (var x = 0; x < actions.length; x++) {
    if (Array.isArray(actions[x])) {
      rndRekursio(actions[x]);
    } else {
      outputAction(actions[x]);
      console.log(actions[x]);
    }
  }

});

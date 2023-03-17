function shuffleAndPlay() {
    // Get the list of songs
    const songs = ['Low', 'Here with me', 'K','heavenly','I Follow Rivers','Smells Like Teen Spirit','i wanna be your girlfriend','i wanna be yours','p power','Fade into you','mytery of love','die for you','je te laisserai des mots','cinnamon girl','try me','Harvest Moon','Nothing Gonna Hurt You Baby','Anyone Who Knows What Love Is (Will Understand)','Make You Feel My Love','Robbers','III. Urn','To Build A Home (feat. Patrick Watson)']
   

    // Shuffle the list of songs
    for (var i = songs.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = songs[i];
      songs[i] = songs[j];
      songs[j] = temp;
    }

    // Get the name of the first song in the shuffled list
    var firstSong = songs[0];

    // Redirect the user to the Anghami play page with the first song in the shuffled list as the query parameter
    var anghamiURL = "https://play.anghami.com/search/" + encodeURIComponent(firstSong);
    window.location.href = anghamiURL;
  }
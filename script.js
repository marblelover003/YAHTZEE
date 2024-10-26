var versionNum = "1.7.1";
var roundNum, aces, twos, threes, fours, fives, sixes, subtotal, upper_bonus, upper_total, triplet, quadruplet, full_house, s_straight, l_straight, chance, yahtzee, lower_bonus, lower_total, grand_total, dice, potentialScore, heldDice, scoringAvailable, titleFormat, rollNum, fullScreen, upperSectionColors, totalColors, oneshotColors;
roundNum = (!localStorage.getItem("prevRound") ? 1 : Number(localStorage.getItem("prevRound")));
document.getElementById("games").innerHTML = (!localStorage.getItem("prevGames") ? "" : localStorage.getItem("prevGames"));
if (document.getElementById("games").innerHTML != "") {
  roundNum -= 1;
  document.getElementById("message").innerHTML = "Here you can view the results of the past " + (roundNum > 1 ? roundNum + " " : "") + "game" + (roundNum > 1 ? "s" : "") + " you have played.";
  roundNum += 1;
}
rollNum = 0;
fullScreen = false;
upperSectionColors = ["#ff0000", "#ff9900", "#ffff00", "#00df00", "#00ffff", "#0000ff"];
totalColors = ["#ff9900","#ffaa00","#ffbb00","#ffcc00","#ffdd00","#ffee00","#ffff00","#dffb00","#bff700","#9ff300","#80ef00","#60eb00","#40e700","#20e300","#00df00","#00e320","#00e740","#00eb60","#00ef80","#00f39f","#00f7bf","#00fbdf","#00ffff","#00aaff","#0055ff","#0000ff"];
oneshotColors = ["#ff0000", "#00df00"];
aces = twos = threes = fours = fives = sixes = triplet = quadruplet = full_house = s_straight = l_straight = chance = yahtzee = "";
subtotal = upper_bonus = upper_total = lower_bonus = lower_total = grand_total = potentialScore = 0;
dice = ['','','','',''];
heldDice = [false, false, false, false, false];
scoringAvailable = ['ACES', 'TWOS', 'THREES', 'FOURS', 'FIVES', 'SIXES', 'TRIPLET', 'QUADRUPLET', 'FULL HOUSE', 'S STRAIGHT', 'L STRAIGHT', 'CHANCE', 'YAHTZEE'];
titleFormat = "YAHTZEE - " + ("00" + grand_total).slice(-3) + " (R" + ("0" + roundNum).slice(-2) + ", T" + ("0" + ((14 - scoringAvailable.length) == 14 ? 13 : (14 - scoringAvailable.length))).slice(-2) + ")";
document.title = titleFormat;
setInterval(function() {
  titleFormat = "YAHTZEE - " + ("00" + grand_total).slice(-3) + " (R" + ("0" + roundNum).slice(-2) + ", T" + ("0" + ((14 - scoringAvailable.length) == 14 ? 13 : (14 - scoringAvailable.length))).slice(-2) + ")";
  document.title = titleFormat;
}, 1000);
document.getElementById("version").innerHTML = versionNum;
function howToPlay() {
  document.getElementById("howToPlay").style.display = "block";
  setTimeout(function() {
    document.getElementById("howToPlay").style.opacity = "1";
    document.getElementById("howToPlay").style.transform = "scale(1, 1)";
  }, 30);
}
function closeHowToPlay() {
  document.getElementById("howToPlay").style.opacity = "0";
  document.getElementById("howToPlay").style.transform = "scale(0.8, 0.8)";
  setTimeout(function() {
    document.getElementById("howToPlay").style.display = "none";
  }, 250);
}
function openMaxedScorecard() {
  document.getElementById("maxedScorecard").style.display = "block";
  setTimeout(function() {
    document.getElementById("maxedScorecard").style.opacity = "1";
    document.getElementById("maxedScorecard").style.transform = "scale(1, 1)";
  }, 30);
}
function closeMaxedScorecard() {
  document.getElementById("maxedScorecard").style.opacity = "0";
  document.getElementById("maxedScorecard").style.transform = "scale(0.8, 0.8)";
  setTimeout(function() {
    document.getElementById("maxedScorecard").style.display = "none";
  }, 250);
}
function openChangelog() {
  document.getElementById("changelog").style.display = "block";
  setTimeout(function() {
    document.getElementById("changelog").style.opacity = "1";
    document.getElementById("changelog").style.transform = "scale(1, 1)";
  }, 30);
}
function closeChangelog() {
  document.getElementById("changelog").style.opacity = "0";
  document.getElementById("changelog").style.transform = "scale(0.8, 0.8)";
  setTimeout(function() {
    document.getElementById("changelog").style.display = "none";
  }, 250);
}
function openChangelogV(version) {
  document.getElementById("changelogV" + version).style.display = "block";
  setTimeout(function() {
    document.getElementById("changelogV" + version).style.opacity = "1";
    document.getElementById("changelogV" + version).style.transform = "scale(1, 1)";
  }, 30);
}
function closeChangelogV(version) {
  document.getElementById("changelogV" + version).style.opacity = "0";
  document.getElementById("changelogV" + version).style.transform = "scale(0.8, 0.8)";
  setTimeout(function() {
    document.getElementById("changelogV" + version).style.display = "none";
  }, 250);
}
function openShortcuts() {
  document.getElementById("shortcuts").style.display = "block";
  setTimeout(function() {
    document.getElementById("shortcuts").style.opacity = "1";
    document.getElementById("shortcuts").style.transform = "scale(1, 1)";
  }, 30);
}
function closeShortcuts() {
  document.getElementById("shortcuts").style.opacity = "0";
  document.getElementById("shortcuts").style.transform = "scale(0.8, 0.8)";
  setTimeout(function() {
    document.getElementById("shortcuts").style.display = "none";
  }, 250);
}
function openNewGameMenu() {
  document.getElementById("newGameMenu").style.display = "block";
  document.getElementById("nextRound").innerHTML = roundNum + 1;
  document.getElementById("prevScore").innerHTML = grand_total;
  setTimeout(function() {
    document.getElementById("newGameMenu").style.opacity = "1";
    document.getElementById("newGameMenu").style.transform = "scale(1, 1)";
  }, 30);
}
function closeNewGameMenu() {
  document.getElementById("newGameMenu").style.opacity = "0";
  document.getElementById("newGameMenu").style.transform = "scale(0.8, 0.8)";
  setTimeout(function() {
    document.getElementById("newGameMenu").style.display = "none";
  }, 250);
}
function openPreviousGames() {
  document.getElementById("previousGames").style.display = "block";
  setTimeout(function() {
    document.getElementById("previousGames").style.opacity = "1";
    document.getElementById("previousGames").style.transform = "scale(1, 1)";
  }, 30);
}
function closePreviousGames() {
  document.getElementById("previousGames").style.opacity = "0";
  document.getElementById("previousGames").style.transform = "scale(0.8, 0.8)";
  setTimeout(function() {
    document.getElementById("previousGames").style.display = "none";
  }, 250);
}
function newGame() {
  closeNewGameMenu();
  document.getElementById("games").innerHTML += "<h1>Game " + roundNum + "</h1>" + document.getElementById("scorecard").outerHTML;
  localStorage.setItem("prevGames", document.getElementById("games").innerHTML);
  document.getElementById("message").innerHTML = "Here you can view the results of the past " + (roundNum > 1 ? roundNum + " " : "") + "game" + (roundNum > 1 ? "s" : "") + " you have played.";
  roundNum += 1;
  localStorage.setItem("prevRound", roundNum);
  aces = twos = threes = fours = fives = sixes = triplet = quadruplet = full_house = s_straight = l_straight = chance = yahtzee = "";
  subtotal = upper_bonus = upper_total = lower_bonus = lower_total = grand_total = potentialScore = 0;
  resetDice();
  scoringAvailable = ['ACES', 'TWOS', 'THREES', 'FOURS', 'FIVES', 'SIXES', 'TRIPLET', 'QUADRUPLET', 'FULL HOUSE', 'S STRAIGHT', 'L STRAIGHT', 'CHANCE', 'YAHTZEE'];
  for (var i = 1; i <= 13; i++) {
    document.getElementById("uid" + ("0" + i).slice(-2)).removeAttribute("disabled");
  }
  document.getElementById("aces").innerHTML = aces;
  document.getElementById("twos").innerHTML = twos;
  document.getElementById("threes").innerHTML = threes;
  document.getElementById("fours").innerHTML = fours;
  document.getElementById("fives").innerHTML = fives;
  document.getElementById("sixes").innerHTML = sixes;
  document.getElementById("aces").style.background = "white";
  document.getElementById("twos").style.background = "white";
  document.getElementById("threes").style.background = "white";
  document.getElementById("fours").style.background = "white";
  document.getElementById("fives").style.background = "white";
  document.getElementById("sixes").style.background = "white";
  document.getElementById("subtotal").innerHTML = subtotal;
  document.getElementById("upperbonus").innerHTML = upper_bonus;
  document.getElementById("uppertotal").innerHTML = upper_total;
  document.getElementById("triplet").innerHTML = triplet;
  document.getElementById("quadruplet").innerHTML = quadruplet;
  document.getElementById("fullhouse").innerHTML = full_house;
  document.getElementById("sstraight").innerHTML = s_straight;
  document.getElementById("lstraight").innerHTML = l_straight;
  document.getElementById("chance").innerHTML = chance;
  document.getElementById("yahtzee").innerHTML = yahtzee;
  document.getElementById("lowerbonus").innerHTML = lower_bonus;
  document.getElementById("lowertotal").innerHTML = lower_total;
  document.getElementById("grandtotal").innerHTML = grand_total;
  document.getElementById("triplet").style.background = "white";
  document.getElementById("quadruplet").style.background = "white";
  document.getElementById("fullhouse").style.background = "white";
  document.getElementById("sstraight").style.background = "white";
  document.getElementById("lstraight").style.background = "white";
  document.getElementById("chance").style.background = "white";
  document.getElementById("yahtzee").style.background = "white";
}
function roll() {
  if (rollNum < 3) {
    rollNum += 1;
    for (var i = 0; i < 5; i++) {
      if (heldDice[i] == false) {
        dice[i] = Math.floor(Math.random() * 6) + 1;
        document.getElementById("d" + (i + 1)).innerHTML = dice[i];
      }
    }
    document.getElementById("rollNum").innerHTML = rollNum;
  }
}
function hold(diceID) {
  if (rollNum > 0) {
    heldDice[diceID - 1] = !heldDice[diceID - 1];
    if (heldDice[diceID - 1]) {
      document.getElementById("d" + diceID).classList.add("held");
    } else if (!heldDice[diceID - 1]) {
      document.getElementById("d" + diceID).classList.remove("held");
    }
  }
}
function checkScorePlacement() {
  var scorePlacement = document.getElementById("scorePlacement").value;
  if (scorePlacement == "SELECT ONE") {
    document.getElementById("placeScoreBtn").style.display = "none";
  } else {
    document.getElementById("placeScoreBtn").style.display = "inline";
  }
}
function placeScore() {
  var combo = document.getElementById("scorePlacement").value;
  if (combo == "ACES") {
    aces = 0;
    for (var i = 0; i < 5; i++) {
      if (dice[i] == 1) {
        aces += 1;
      }
    }
    document.getElementById("aces").style.background = upperSectionColors[aces];
    subtotal += aces;
    upper_total += aces;
    if (yahtzee == 50 && aces == 5) {
      lower_bonus += 100;
      lower_total += 100;
    }
    scoringAvailable.splice(scoringAvailable.indexOf("ACES"), 1);
    document.getElementById("uid01").disabled = "true";
  } else if (combo == "TWOS") {
    twos = 0;
    for (var i = 0; i < 5; i++) {
      if (dice[i] == 2) {
        twos += 2;
      }
    }
    document.getElementById("twos").style.background = upperSectionColors[Math.floor(twos / 2)];
    subtotal += twos;
    upper_total += twos;
    if (yahtzee == 50 && twos == 10) {
      lower_bonus += 100;
      lower_total += 100;
    }
    scoringAvailable.splice(scoringAvailable.indexOf("TWOS"), 1);
    document.getElementById("uid02").disabled = "true";
  } else if (combo == "THREES") {
    threes = 0;
    for (var i = 0; i < 5; i++) {
      if (dice[i] == 3) {
        threes += 3;
      }
    }
    document.getElementById("threes").style.background = upperSectionColors[Math.floor(threes / 3)];
    subtotal += threes;
    upper_total += threes;
    if (yahtzee == 50 && threes == 15) {
      lower_bonus += 100;
      lower_total += 100;
    }
    scoringAvailable.splice(scoringAvailable.indexOf("THREES"), 1);
    document.getElementById("uid03").disabled = "true";
  } else if (combo == "FOURS") {
    fours = 0;
    for (var i = 0; i < 5; i++) {
      if (dice[i] == 4) {
        fours += 4;
      }
    }
    document.getElementById("fours").style.background = upperSectionColors[Math.floor(fours / 4)];
    subtotal += fours;
    upper_total += fours;
    if (yahtzee == 50 && fours == 20) {
      lower_bonus += 100;
      lower_total += 100;
    }
    scoringAvailable.splice(scoringAvailable.indexOf("FOURS"), 1);
    document.getElementById("uid04").disabled = "true";
  } else if (combo == "FIVES") {
    fives = 0;
    for (var i = 0; i < 5; i++) {
      if (dice[i] == 5) {
        fives += 5;
      }
    }
    if (yahtzee == 50 && fives == 25) {
      lower_bonus += 100;
      lower_total += 100;
    }
    document.getElementById("fives").style.background = upperSectionColors[Math.floor(fives / 5)];
    subtotal += fives;
    upper_total += fives;
    scoringAvailable.splice(scoringAvailable.indexOf("FIVES"), 1);
    document.getElementById("uid05").disabled = "true";
  } else if (combo == "SIXES") {
    sixes = 0;
    for (var i = 0; i < 5; i++) {
      if (dice[i] == 6) {
        sixes += 6;
      }
    }
    document.getElementById("sixes").style.background = upperSectionColors[Math.floor(sixes / 6)];
    subtotal += sixes;
    upper_total += sixes;
    if (yahtzee == 50 && sixes == 30) {
      lower_bonus += 100;
      lower_total += 100;
    }
    scoringAvailable.splice(scoringAvailable.indexOf("SIXES"), 1);
    document.getElementById("uid06").disabled = "true";
  } else if (combo == "TRIPLET") {
    var counts = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) {
      counts[dice[i] - 1] += 1;
    }
    triplet = 0;
    document.getElementById("triplet").style.background = "#ff0000";
    for (var i = 0; i < 6; i++) {
      if (counts[i] >= 3) {
        triplet = dice[0] + dice[1] + dice[2] + dice[3] + dice[4];
        if (counts[i] == 5 && yahtzee == 50) {
          lower_bonus += 100;
          lower_total += 100;
        }
        document.getElementById("triplet").style.background = totalColors[triplet - 5];
        break;
      }
    }
    lower_total += triplet;
    scoringAvailable.splice(scoringAvailable.indexOf("TRIPLET"), 1);
    document.getElementById("uid07").disabled = "true";
  } else if (combo == "QUADRUPLET") {
    var counts = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) {
      counts[dice[i] - 1] += 1;
    }
    quadruplet = 0;
    document.getElementById("quadruplet").style.background = "#ff0000";
    for (var i = 0; i < 6; i++) {
      if (counts[i] >= 4) {
        quadruplet = dice[0] + dice[1] + dice[2] + dice[3] + dice[4];
        if (counts[i] == 5 && yahtzee == 50) {
          lower_bonus += 100;
          lower_total += 100;
        }
        document.getElementById("quadruplet").style.background = totalColors[quadruplet - 5];
        break;
      }
    }
    lower_total += quadruplet;
    scoringAvailable.splice(scoringAvailable.indexOf("QUADRUPLET"), 1);
    document.getElementById("uid08").disabled = "true";
  } else if (combo == "FULL HOUSE") {
    var counts = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) {
      counts[dice[i] - 1] += 1;
    }
    full_house = 0;
    document.getElementById("fullhouse").style.background = oneshotColors[0];
    for (var i = 0; i < 6; i++) {
      if (counts[i] == 5 && yahtzee == 50) {
        lower_bonus += 100;
        lower_total += 100;
        full_house = 25;
        document.getElementById("fullhouse").style.background = oneshotColors[1];
        break;
      }
    }
    if ((counts[0] == 3 || counts[1] == 3 || counts[2] == 3 || counts[3] == 3 || counts[4] == 3 || counts[5] == 3) && (counts[0] == 2 || counts[1] == 2 || counts[2] == 2 || counts[3] == 2 || counts[4] == 2 || counts[5] == 2)) {
      full_house = 25;
      document.getElementById("fullhouse").style.background = oneshotColors[1];
    }
    lower_total += full_house;
    scoringAvailable.splice(scoringAvailable.indexOf("FULL HOUSE"), 1);
    document.getElementById("uid09").disabled = "true";
  } else if (combo == "S STRAIGHT") {
    var counts = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) {
      counts[dice[i] - 1] += 1;
    }
    s_straight = 0;
    document.getElementById("sstraight").style.background = oneshotColors[0];
    for (var i = 0; i < 6; i++) {
      if (counts[i] == 5 && yahtzee == 50) {
        lower_bonus += 100;
        lower_total += 100;
        s_straight = 30;
        document.getElementById("sstraight").style.background = oneshotColors[1];
        break;
      }
    }
    if ((counts[0] > 0 && counts[1] > 0 && counts[2] > 0 && counts[3] > 0) || (counts[1] > 0 && counts[2] > 0 && counts[3] > 0 && counts[4] > 0) || (counts[2] > 0 && counts[3] > 0 && counts[4] > 0 && counts[5] > 0)) {
      s_straight = 30;
      document.getElementById("sstraight").style.background = oneshotColors[1];
    }
    lower_total += s_straight;
    scoringAvailable.splice(scoringAvailable.indexOf("S STRAIGHT"), 1);
    document.getElementById("uid10").disabled = "true";
  } else if (combo == "L STRAIGHT") {
    var counts = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) {
      counts[dice[i] - 1] += 1;
    }
    l_straight = 0;
    document.getElementById("lstraight").style.background = oneshotColors[0];
    for (var i = 0; i < 6; i++) {
      if (counts[i] == 5 && yahtzee == 50) {
        lower_bonus += 100;
        lower_total += 100;
        l_straight = 40;
        document.getElementById("lstraight").style.background = oneshotColors[1];
        break;
      }
    }
    if ((counts[0] > 0 && counts[1] > 0 && counts[2] > 0 && counts[3] > 0 && counts[4] > 0) || (counts[1] > 0 && counts[2] > 0 && counts[3] > 0 && counts[4] > 0 && counts[5] > 0)) {
      l_straight = 40;
      document.getElementById("lstraight").style.background = oneshotColors[1];
    }
    lower_total += l_straight;
    scoringAvailable.splice(scoringAvailable.indexOf("L STRAIGHT"), 1);
    document.getElementById("uid11").disabled = "true";
  } else if (combo == "CHANCE") {
    var counts = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) {
      counts[dice[i] - 1] += 1;
    }
    for (var i = 0; i < 6; i++) {
      if (counts[i] == 5 && yahtzee == 50) {
        lower_bonus += 100;
        lower_total += 100;
        break;
      }
    }
    chance = dice[0] + dice[1] + dice[2] + dice[3] + dice[4];
    document.getElementById("chance").style.background = totalColors[chance - 5];
    lower_total += chance;
    scoringAvailable.splice(scoringAvailable.indexOf("CHANCE"), 1);
    document.getElementById("uid12").disabled = "true";
  } else if (combo == "YAHTZEE") {
    var counts = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) {
      counts[dice[i] - 1] += 1;
    }
    yahtzee = 0;
    document.getElementById("yahtzee").style.background = oneshotColors[0];
    for (var i = 0; i < 6; i++) {
      if (counts[i] == 5) {
        yahtzee = 50;
        document.getElementById("yahtzee").style.background = oneshotColors[1];
        break;
      }
    }
    lower_total += yahtzee;
    scoringAvailable.splice(scoringAvailable.indexOf("YAHTZEE"), 1);
    document.getElementById("uid13").disabled = "true";
  }
  if (upper_bonus == 0 && subtotal >= 63) {
    upper_bonus = 35;
    upper_total += 35;
  }
  grand_total = upper_total + lower_total;
  document.getElementById("aces").innerHTML = aces;
  document.getElementById("twos").innerHTML = twos;
  document.getElementById("threes").innerHTML = threes;
  document.getElementById("fours").innerHTML = fours;
  document.getElementById("fives").innerHTML = fives;
  document.getElementById("sixes").innerHTML = sixes;
  document.getElementById("subtotal").innerHTML = subtotal;
  document.getElementById("upperbonus").innerHTML = upper_bonus;
  document.getElementById("uppertotal").innerHTML = upper_total;
  document.getElementById("triplet").innerHTML = triplet;
  document.getElementById("quadruplet").innerHTML = quadruplet;
  document.getElementById("fullhouse").innerHTML = full_house;
  document.getElementById("sstraight").innerHTML = s_straight;
  document.getElementById("lstraight").innerHTML = l_straight;
  document.getElementById("chance").innerHTML = chance;
  document.getElementById("yahtzee").innerHTML = yahtzee;
  document.getElementById("lowerbonus").innerHTML = lower_bonus;
  document.getElementById("lowertotal").innerHTML = lower_total;
  document.getElementById("grandtotal").innerHTML = grand_total;
  resetDice();
  document.getElementById("scorePlacement").selectedIndex = 0;
  checkScorePlacement();
}
function resetDice() {
  dice = ['','','','',''];
  for (var i = 0; i < 5; i++) {
    if (heldDice[i]) {
      hold(i + 1);
    }
    document.getElementById("d" + (i + 1)).innerHTML = dice[i];
  }
  rollNum = 0;
  document.getElementById("rollNum").innerHTML = 0;
}
function holdAll() {
  for (var i = 1; i <= 5; i++) {
    if (!heldDice[i-1]) {
      hold(i);
    }
  }
}
function unholdAll() {
  for (var i = 1; i <= 5; i++) {
    if (heldDice[i-1]) {
      hold(i);
    }
  }
}
function invert() {
  for (var i = 1; i <= 5; i++) {
    hold(i);
  }
}
function reset() {
  document.getElementById("reset").style.display = "block";
  document.getElementById("message2").innerHTML = "Are you sure you want to reset your game history?";
  document.getElementById("exit").innerHTML = "Nah, keep it";
  document.getElementById("conf").innerHTML = "Yes, wipe it";
  setTimeout(function() {
    document.getElementById("reset").style.opacity = "1";
    document.getElementById("reset").style.transform = "scale(1, 1)";
  }, 30);
}
function reset2() {
  document.getElementById("messageContainer").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("message2").innerHTML = "Are you CERTAIN you want to wipe your game history? This action is permanent and cannot be undone!";
    document.getElementById("exit").innerHTML = "Nah, I changed my mind";
    document.getElementById("conf").innerHTML = "Reset it!";
    document.getElementById("conf").href = "javascript:reset3()";
    document.getElementById("messageContainer").style.opacity = "1";
  }, 500);
}
function reset3() {
  document.getElementById("messageContainer").style.opacity = "0";
  document.getElementById("resetBkgd").style.background = "rgba(255, 0, 0, 0.8)";
  setTimeout(function() {
    document.getElementById("message2").innerHTML = "Your game history will be lost forever! ARE YOU ABSOLUTELY CERTAIN YOU WANT TO DO THIS?";
    document.getElementById("exit").innerHTML = "No!";
    document.getElementById("conf").innerHTML = "DO IT ALREADY!";
    document.getElementById("conf").href = "javascript:reset4()";
    document.getElementById("messageContainer").style.opacity = "1";
  }, 500);
}
function reset4() {
  document.getElementById("reset2").style.display = "block";
  localStorage.setItem("prevGames", "");
  localStorage.setItem("prevRound", 1);
  setTimeout(function() {
    document.getElementById("reset2").style.opacity = "1";
  }, 30);
}
function refresh() {
  document.getElementById("reload").style.display = "block";
  setTimeout(function() {
    document.getElementById("reload").style.opacity = "1";
    document.getElementById("reload").style.transform = "scale(1, 1)";
  }, 30);
}
function closeReload() {
  document.getElementById("reload").style.opacity = "0";
  document.getElementById("reload").style.transform = "scale(0.8, 0.8)";
  setTimeout(function() {
    document.getElementById("reload").style.display = "none";
  }, 250);
}
function closeReset() {
  document.getElementById("resetBkgd").style.background = "rgba(0, 0, 0, 0.8)";
  document.getElementById("reset").style.opacity = "0";
  document.getElementById("reset").style.transform = "scale(0.8, 0.8)";
  document.getElementById("conf").href = "javascript:reset2()";
  setTimeout(function() {
    document.getElementById("reset").style.display = "none";
  }, 250);
}
document.addEventListener("keydown", function(event) {
  event.preventDefault();
  if (event.key == "q") {
    reset();
  } else if (event.key == "r") {
    refresh();
  } else if (event.key == "t") {
    howToPlay();
  } else if (event.key == "c") {
    openChangelog();
  } else if (event.key == "/") {
    openShortcuts();
  } else if (event.key == "n") {
    openNewGameMenu();
  } else if (event.key == " ") {
    roll();
  } else if (event.key == "1") {
    hold(1);
  } else if (event.key == "2") {
    hold(2);
  } else if (event.key == "3") {
    hold(3);
  } else if (event.key == "4") {
    hold(4);
  } else if (event.key == "5") {
    hold(5);
  } else if (event.key == "h") {
    holdAll();
  } else if (event.key == "u") {
    unholdAll();
  } else if (event.key == "i") {
    invert();
  } else if (event.key == "p") {
    if (document.getElementById("scorePlacement").value != "SELECT ONE") {
      placeScore();
    }
  } else if (event.key == "g") {
    openPreviousGames();
  }
});
checkScorePlacement();
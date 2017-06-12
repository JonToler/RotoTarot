// Back End Logic
var obliqueDeck = ['0 The Fool – New beginnings, optimism, trust in life','1 The Magician – Action, the power to manifest','2 The High Priestess – Inaction, going within, the subconscious','3 The Empress – Abundance, nurturing, fertility, life in bloom!','4 The Emperor – Structure, stability, rules and power','5 The Hierophant – Institutions, tradition, society and its rules','6 The Lovers – Sexuality, passion, choice, uniting','7 The Chariot – Movement, progress, integration','8 Strength – Courage, subtle power, integration of animal self','9 The Hermit – Meditation, solitude, consciousness','10 Wheel of Fortune – Cycles, change, ups and downs','11 Justice – Fairness, equality, balance','12 The Hanged Man – Surrender, new perspective, enlightenment','13 Death – The end of something, change, the impermeability of all things','14 Temperance – Balance, moderation, being sensible','15 The Devil – Destructive patterns, addiction, giving away your power','16 The Tower – Collapse of stable structures, release, sudden insight','17 The Star – Hope, calm, a good omen!','18 The Moon – Mystery, the subconscious, dreams','19 The Sun – Success, happiness, all will be well','20 Judgment – Rebirth, a new phase, inner calling','21 The World – Completion, wholeness, attainment, celebration of life'
];
var pickCard = function(){
  var cardNumber = Math.floor(Math.random() * obliqueDeck.length);
  return obliqueDeck[cardNumber];
};

// Interface Logic
$(document).ready(function() {
  $("#cardText").text(pickCard());
  $("#pickACard").submit(function(event){
    $("#cardText").text(pickCard());
    event.preventDefault();
  });
});

var question;
var sz = 30;
var arrow;
var booton1 = false; //Til ja-knap.
var booton2 = false; //Til nej-knap

var names = ["Jawad","Mohamed","Ali","Abiel","Ana","Sofus","William","Isabella"]; //Det er måske her hvor problemet er? Isabella har erstattet de andre?
var questionText = ["Kan du lide hårdkogte æg?","Kan du lide blødkogte æg?","Står du også op til en kop kaffe om morgen?","Synes du det er hyggeligt når det regner?","Kan du godt lide at spille fodbold med vennerne?","Følger du med i champions league?","Danser du også nogle gange for dig selv, når der er en god sang i radioen?","Kan et godt måltid mad også gøre dig rigtig glad?","Har du nogensinde spist så meget slik at du fik ondt i maven?","Er du en dårlig taber i spil?","Lader du nogle gange opvasken stå i længere tid?"];

function preload() {
  arrow = loadImage('arrow.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  question = new Question(questionText[0], width/2, height/2, sz)
  angleMode(DEGREES);
  textAlign(CENTER);
}

function draw() {
  background(255, 204, 153);
  push();
  question.display();
  arrows();

  if (keyIsPressed) { //booton1 = true
    pop();
    background(255, 204, 153);
    textSize(sz);
    text("Det har du tilfælles med "+question.yes[floor(random(question.yes.length))]+".", width/2, height*0.33);
    text("Kom til MadMekka ved Ungdomskulturhuset og find ud af", width/2, height*0.66);
    text("hvad du mere har tilfælles med andre unge i Aarhus", width/2, height*0.77);
    booton1 = false;
  }
  //   else if (booton2 != booton2) {
  //   pop();
  //   textSize(sz);
  //   text("Det har du tilfælles med "+question.no[random(question.no)]".", width/2, height*0.33);
  //   text("Kom til MadMekka ved Ungdomskulturhuset og find ud af hvad du mere har tilfælles med andre unge i Aarhus", width/2, height*0.66, sz);
  //   delay(10000);
  //   question = new Question(questionText[random(questionText)], width/2, height/2, sz);
  //   draw();
  // }
}

function mousePressed() {
  question = new Question(questionText[floor(random(questionText.length))], width/2, height/2, sz);
  draw();
}

function arrows() {
  push();
  translate(width*0.33, height-100);
  rotate(90);
  image(arrow, 0, 0, 40, 40);
  pop();
  push();
  translate(width*0.66, height-100);
  rotate(90);
  image(arrow, 0, 0, 40, 40);
  pop();
}

function buttons() {
  
}

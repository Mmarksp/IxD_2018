var question;
var sz = 30; //Tekststørrelse
var arrow; //billede. Også en funktion til at placere billederne.
var booton1 = false; //Til ja-knap. Det er to boolean value, som samlet set sørger for, at ved interaktion (ja/nej) vil responsen kun køre én gang; det forhindrer programmet i hele tiden at "tegne over" sådan at sige, fordi det ellers vil køre i ring.
var booton2 = false; //Til nej-knap
var potentMeasure = 50;


var names = ["Jawad","Mohamed","Ali","Abiel","Ana","Sofus","William","Isabella"]; //Det er måske her hvor problemet er? Isabella har erstattet de andre?
var questionText = ["Kan du lide hårdkogte æg?","Kan du lide blødkogte æg?","Står du også op til en kop kaffe om morgen?","Synes du det er hyggeligt når det regner?","Kan du godt lide at spille fodbold med vennerne?","Følger du med i champions league?","Danser du også nogle gange for dig selv, når der er en god sang i radioen?","Kan et godt måltid mad også gøre dig rigtig glad?","Har du nogensinde spist så meget slik at du fik ondt i maven?","Er du en dårlig taber i spil?","Lader du nogle gange opvasken stå i længere tid?"];

function preload() {
  arrow = loadImage('arrow.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  question = new Question(questionText[0], width/2, height/2, sz) //Hvert Question er sit eget objekt med specificeret svar fra vores survey
  angleMode(DEGREES);
  textAlign(CENTER);
  background(255, 204, 153);
  question.display();
  arrows();
}

function draw() {

  if (booton1 === true) {
    background(255, 204, 153);
    textSize(sz);
    text("Det har du tilfælles med "+question.yes[floor(random(question.yes.length))]+".", width/2, height*0.33); //kringlet funktion, men den udvælger en tilfældig respondent fra question-objektet.
    text("Kom til MadMekka ved Ungdomskulturhuset og find ud af", width/2, height*0.66);
    text("hvad du mere har tilfælles med andre unge i Aarhus", width/2, height*0.77);
    booton1 = false; //Ved at skifte boolean fra "true" til "false" undgår vi at programmet tegner over sig selv igen og igen. Det skal kun ske én gang pr. tryk på knap.
  } else if (booton2 === true) {
    background(255, 204, 153);
    textSize(sz);
    text("Det har du tilfælles med "+question.no[floor(random(question.no.length))]+".", width/2, height*0.33);
    text("Kom til MadMekka ved Ungdomskulturhuset og find ud af", width/2, height*0.66);
    text("hvad du mere har tilfælles med andre unge i Aarhus", width/2, height*0.77);
    booton2 = false;
    }
    // if (serial.available() > 0) {
    var potentData = serial.read();
    var YesorNo = serial.read();
  // }
    if (YesorNo === yes) {
    booton1 = true;
    console.log("yup");
  } else if (YesorNo === no) {
    booton2 = true;
    console.log("nope");
  }

//  Testing potentiometer with p5
    if (potentData > potentMeasure) {
    background(0, 204, 153);
    booton1 = true;
  } else {
    booton2 = true;
    console.log("nope");
  }

}
      


function mousePressed() { //Basically, udvælg et nyt spørgsmål og start forfra
  question = new Question(questionText[floor(random(questionText.length))], width/2, height/2, sz);

  background(255, 204, 153);
  question.display(); //Har puttet det op i setup for at det kun k'rer EN gang
  arrows();
}

function arrows() { //Hard code af billedplacering. Urgh.
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

function keyPressed() { //I tilfælde af ingen Arduino kan vi køre det med tastaturet. Vi skal bare have en interaktion til at skifte boolean fra "false" til "true"
  if (keyCode === 75) { //K
    booton1 = true;
    console.log("yup");
  } else if (keyCode === 76) {  //L
    booton2 = true;
    console.log("nope");
  }
  return false;
}

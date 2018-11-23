class Question {
  constructor(text, x, y, textSz) {
    this.text = text;
    this.pos = new createVector(x, y);
    this.textSz = textSz;

    this.yes = [];
    this.no = [];
  }
//DEN DISPLAYER KUN EN ENKELT STRING VED [0], to strings ovenpaa hinanden ved [1]. DEN VISER DESUDEN OGSAA KUN SIDSTE INDSLAG I ARRAY
  display() {
    textAlign(CENTER)
    textSize(this.textSz);
    text(this.text, this.pos.x, this.pos.y); //Maske er deet noget her, Her bliver den rendered

    if (this.text = questionText[0]) {  //Kan du bedst lide hårdkogte æg?
      this.yes = [names[0],names[1],names[2],names[7]];
      this.no = [names[3],names[4],names[5],names[6]];
    } else if(this.text = questionText[1]) {  //Kan du bedst lide blødkogte æg?
      this.yes = [names[5],names[6],names[7]];
      this.no = [names[0],names[1],names[2],names[3],names[4]];
    } else if (this.text = questionText[2]) { //Står du også op til en kop kaffe om morgenen?
      this.yes = [names[0],names[2],names[7]];
      this.no = [names[1],names[3],names[4],names[5],names[6]];
    } else if (this.text = questionText[3]) { //Syntes du det er hyggeligt når det regner?
      this.yes = [names[2],names[3],names[4],names[5],names[6],names[7]];
      this.no = [names[0],names[1]];
    } else if (this.text = questionText[4]) { //Kan du godt lide at spille fodbold med vennerne?
      this.yes = [names[0],names[2],names[3],names[4],names[7]];
      this.no = [names[1],names[5],names[6]];
    } else if (this.text = questionText[5]) { //Følger du med i Champions league?
      this.yes = [names[2],names[3]];
      this.no = [names[0],names[1],names[4],names[5],names[6],names[7]];
    } else if (this.text = questionText[6]) { //Danser du også nogle gange for dig selv når der er en god sang i radioen?
      this.yes = [names[0],names[1],names[2],names[3],names[4],names[6],names[7]];
      this.no = [names[5]];
    } else if (this.text = questionText[7]) { //Kan et godt måltid mad også gøre dig rigtig glad?
      this.yes = [names[0],names[1],names[2],names[3],names[4],names[6],names[7]];
      this.no = [names[5]];
    } else if (this.text = questionText[8]) { //Har du nogensinde spist så meget slik at du fik ondt i maven?
      this.yes = [names[0],names[2],names[4],names[5],names[6],names[7]];
      this.no = [names[1],names[3]];
    } else if (this.text = questionText[9]) { //Er du en dårlig taber i spil
      this.yes = [names[2],names[5]];
      this.no = [names[0],names[1],names[3],names[4],names[6],names[7]];
    } else if (this.text = questionText[10]) {  //Lader du nogle gange opvasken stå i længere tid?
      this.yes = [names[0],names[1],names[2],names[6],names[7]];
      this.no = [names[3],names[4],names[5]];
    }
  }

  buttonPressed() {
    
  }

}

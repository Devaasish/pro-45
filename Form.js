class Form {
    constructor(){
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    }
    
    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
      this.title.hide();
    }
    
    display(){
      this.title.html("Karate Competition");
      this.title.style("color","red");
      this.title.position(displayWidth/2 - 50, 0);

      this.input.position(displayWidth/2 - 90 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 - 20, displayHeight/2);
    }
}
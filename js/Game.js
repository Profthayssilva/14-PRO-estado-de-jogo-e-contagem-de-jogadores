// Crie a classe Game e defina suas funções para obter e definir os dados para o banco
// de dados

class Game {
  constructor() {}

  getState(){
var gameStateRef = database.ref ("gameState");
gameStateRef.on("value", function(data){
    gameState = data.val();

});

  }

  update(state){
    database.ref ("/").update({
        gameState: state
    });
  }

  start() {
    
//     Crie sprite para os jogadores,inicie a variável playerCount, e crie uma instância de
// novo jogador.

    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite (width/2 - 50, height - 100);
    car1.addImage("car1",car1_img);
    car1.scale = 0.07;

    // criar sprite car 2 conforme car 1
    car2 = createSprite (width/2 + 100, height - 100);
    car2.addImage("car2",car2_img);
    car2.scale = 0.07;

    // atribua os objrtos ao vetor cars
    cars = [car1,car2];


  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffects");
  }


  // Use a função drawSprite para exibir a imagem e chame a função play, 
  // para esconder os elementos quando necessário:
  play () {

    this.handleElements();

    drawSprites();
  }
}

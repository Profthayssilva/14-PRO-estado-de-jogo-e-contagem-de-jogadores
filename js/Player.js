class Player {
  constructor (){}


getCount(){

  // Leia os dados e armazene os valores de playerCount dentro da função getCount():
  var playerCountRef = database.ref('playerCount');
  playerCountRef.on ("value",(data)=>{
      playerCount = data.val();

  })
}

updateCount (count){
  // Atualize o playerCount no banco de dados
  database.ref("/").update({
    playerCount: count
  });
}
}

function startTimer(duration, display) {
   
  let timer = duration, minutes, seconds;

    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);


}

window.onload = function() {
  let duration = 60 * 4; //Conversão para segundos
   let display = document.querySelector("#timer"); //Elemento para exibir o timer
  
   startTimer(duration, display); // Inicia a função

}
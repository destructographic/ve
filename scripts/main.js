// main.js



// chain the functions with promises
preloadAssets()
  .then(() => {
    populateTitleScreen();
    loaderCurtain('hide');
    // gameLoop();
  })
  .catch(() => {
    console.error('Error in asset preload.');
  });





function populateTitleScreen() {
    const gameArea = document.getElementById('game-area');  
    gameArea.style.backgroundImage = `url(${preloadedAssets['assets/space_bg1.png'].src}), url(${preloadedAssets['assets/space_bg_dust1.png'].src})`;
  
    const titleLogo = document.createElement('img');
    titleLogo.id = 'title-logo';
    titleLogo.src = preloadedAssets['assets/ve_logo_dither.png'].src;
    gameArea.appendChild(titleLogo);
  
    const startGameText = document.createElement('p');
    startGameText.textContent = 'START GAME';
    startGameText.classList.add('start-game-text'); // CSS class for hover
    gameArea.appendChild(startGameText);

    // add event listener to startGameText
    startGameText.addEventListener('click', gameLoop);
  }
  





function gameLoop() {
  console.log("called: gameLoop()");
}

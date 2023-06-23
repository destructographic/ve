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
    gameArea.appendChild(startGameText);
  }
  





function gameLoop() {
  console.log("called: gameLoop()");
  // const canvas = document.getElementById("main-canvas");
  // const ctx = canvas.getContext("2d");
  // canvas.width = 1280;
  // canvas.height = 720;
}


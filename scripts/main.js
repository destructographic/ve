// main.js



// chain the functions with promises
preloadAssets()
  .then(() => {
    populateTitleScreen();
    loaderCurtain('hide');
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


    // add special link to *real* version (after deadline)
    const textLink = document.createElement('a');
    textLink.href = 'https://destructographic.com/vector-eclipse';
    textLink.textContent = 'real version HERE';
    textLink.style.color = 'var(--purple)';
    textLink.style.fontSize = '12px';
    textLink.style.position = 'absolute';
    textLink.style.bottom = '10px';
    textLink.style.left = '50%';
    textLink.style.transform = 'translateX(-50%)';
    gameArea.appendChild(textLink);

  }





function gameLoop() {
  // console.log("called: gameLoop()");
  const titleLogo = document.getElementById('title-logo');
  const startGameText = document.querySelector('.start-game-text');

  // hide titleScreen content
  titleLogo.style.display = 'none';
  startGameText.style.display = 'none';

  // rest of game here
  
}

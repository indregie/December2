const snowflakesContainer = document.querySelector(".snowflake");

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

function createSnowflake() {
  const snowflake = document.createElement("p");
  snowflake.textContent = "❄️";

  const startLeft = getRandomValue(0, window.innerWidth) / 16;
  const startSpeed = getRandomValue(10, 40);
  const startOpacity = getRandomValue(0.5, 1);

  snowflake.style.left = `${startLeft}rem`;
  snowflake.style.opacity = startOpacity;
  snowflake.style.animationDuration = `${startSpeed}s`;

  snowflake.style.animation = `fall ${startSpeed}s linear infinite`;

  snowflakesContainer.appendChild(snowflake);

  const randomXStart = getRandomValue(50, 150) / 16;
  const randomXEnd = getRandomValue(50, 150) / 16;
  const randomXDuration = getRandomValue(12, 20);

  const styleSheet = document.styleSheets[0];

  styleSheet.insertRule(
    `
    @keyframes moveX${startLeft} {
        0% { left: ${startLeft}rem; }
        25% { left: ${startLeft + randomXStart}rem; }
        50% { left: ${startLeft + randomXEnd}rem; }
        75% { left: ${startLeft - randomXStart}rem; }
        100% { left: ${startLeft + randomXStart}rem; }
      }
  `,
    styleSheet.cssRules.length
  );
  snowflake.style.animation += `, moveX${startLeft} ${randomXDuration}s ease-in-out infinite`;
}

function generateSnowflakes() {
  const numberOfSnowflakes = getRandomValue(1, 10);

  for (let i = 0; i < numberOfSnowflakes; i++) {
    setTimeout(() => {
      createSnowflake();
    }, getRandomValue(0, 3000));
  }
}

setInterval(generateSnowflakes, 5000);

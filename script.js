var animationContainer = document.getElementById('lottie');
var animation = bodymovin.loadAnimation({
  container: animationContainer,
  path: 'https://valerierogalska.github.io/logoAe/data.json',
  renderer: 'svg',
  loop: true,
  autoplay: false,
  prerender: true,
  name: "Denial Logo",
});
animationContainer.addEventListener('mouseenter', function () {
  animation.play();
  animation.loop = true;
});
animationContainer.addEventListener("mouseleave", function () {
animation.loop = false;
});

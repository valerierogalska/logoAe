var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'),
  path: 'https://valerierogalska.github.io/logoAe/data.json',
  renderer: 'svg',
  loop: true,
  autoplay: false,
  name: "Denial Logo",
});

var animate;
animate = bodymovin.loadAnimation(params);
var selectedContainer = document.querySelector('#lottie');
selectedContainer.addEventListener('mouseover', function() {
  animate.play();
});

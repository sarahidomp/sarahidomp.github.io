let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #905E96;">Estudiante de Ingeniería en Sistemas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

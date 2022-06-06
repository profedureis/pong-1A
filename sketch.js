function setup() {
  createCanvas(600, 400);
}
let xbola = 300;
let ybola = 200;
let diametro = 20;
let velocidadexbola = 8;
let velocidadeybola = 8;

function draw() {
  background(0);
  circle(xbola, ybola, diametro);
  
  xbola = xbola + velocidadexbola;
  ybola = ybola + velocidadeybola;
  
  if (xbola > width || xbola < 0) {velocidadexbola = velocidadexbola*-1}
  
  if (ybola > 400 || ybola < 0) {velocidadeybola = velocidadeybola*-1}
}
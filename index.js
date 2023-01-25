const fs = require('fs');
const basePath = "source/1.txt";

function extractPixels(filePath){
  const text =fs.readFileSync(filePath)
    .toString()
    .split('\n');

  const pixels = text.slice(3, -1);

  return pixels;
}

function extractColorComponents(pixels){
  let reds = [];
  let greens = [];
  let blues = [];

  
  pixels.forEach(pixel => {
    pixel = pixel.split(' ')

    let red = parseInt(pixel[0]);
    let green = parseInt(pixel[1]);
    let blue = parseInt(pixel[2]);

    reds.push(red);
    greens.push(green);
    blues.push(blue);
  });

  return {
    reds,
    blues,
    greens
  }
}

function computeHistogram(colorArray) {
  let hist = {};

  for(let i = 0; i < 256; i++){
    hist[i] = 0;
  }


  colorArray.forEach(color => {
    hist[color] = hist[color] + 1;
  })

  return hist;
}

function doPartA(filePath) { 
  const pixels = extractPixels(filePath);
  const colorComponents = extractColorComponents(pixels);

  const redHist = computeHistogram(colorComponents.reds);
  const greenHist = computeHistogram(colorComponents.greens);
  const blueHist = computeHistogram(colorComponents.blues);




  return{
    redHist,
    greenHist,
    blueHist,
    totalreds
  };
}

console.log(doPartA('source/1.txt'));

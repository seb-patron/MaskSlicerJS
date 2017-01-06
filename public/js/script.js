const mask = new Image(), background = new Image(), test =new Image();
    
mask.src = "./masks/mask3.png";
background.src = "./images/kanye4.jpg";

//var test = new Image();
test.src = './images/hires.jpg';

// const mask = "./masks/mask2.png";
// const image.src = "./images/kanye4.jpg";



const canvas = document.createElement("canvas"), ctx = canvas.getContext('2d');
const target = document.getElementById("target"), targetCtx = target.getContext('2d');

mask.width = target.width;
mask.height = target.height;
background.width = target.width;
background.height = target.height;
test.width = target.width;
test.height = target.height;


function call() {
    createImageMask(mask, background);
}
    
function createImageMask(mask, image) {
    //centers image to be masked
    const l = (image.width / 2) - (mask.width / 2), t = (image.height / 2) - (mask.height / 2);
    
    canvas.width = image.width;
    canvas.height = image.height;
    
    ctx.drawImage(mask, l, t);
    ctx.globalCompositeOperation = "source-in";
    ctx.drawImage(image, l, t);
            
    const imageData = ctx.getImageData(l, t, mask.width, mask.height);                                       
    targetCtx.putImageData(imageData, 50, 50); 
}
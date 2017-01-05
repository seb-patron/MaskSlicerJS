var mask = new Image(), background = new Image();
    
mask.src = "./masks/mask2.png";
background.src = "./images/kanye4.jpg";


const canvas = document.createElement("canvas"), ctx = canvas.getContext('2d');
const target = document.getElementById("target"), targetCtx = target.getContext('2d');
    
mask.addEventListener('load', function() {
    //gets center so mask is always centerred, even if smaller than image
    const l = (background.width / 2) - (mask.width / 2), t = (background.height / 2) - (mask.height / 2);
    
    canvas.width = background.width;
    canvas.height = background.height;
    
    ctx.drawImage(mask, l, t);
    ctx.globalCompositeOperation = "source-in";
    ctx.drawImage(background, 0, 0);
            
    const imageData = ctx.getImageData(l, t, mask.width, mask.height);                                       
    targetCtx.putImageData(imageData, 50, 50);  
});
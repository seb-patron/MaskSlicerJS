var mask = new Image(), bg = new Image();
    
mask.src = "./masks/mask2.png";
bg.src = "./images/kanye4.jpg";


var canvas = document.createElement("canvas"), ctx = canvas.getContext('2d');
var target = document.getElementById("target"), targetCtx = target.getContext('2d');
    
mask.addEventListener('load', function() {    
    var l = (bg.width / 2) - (mask.width / 2), t = (bg.height / 2) - (mask.height / 2);
    
    canvas.width = bg.width;
    canvas.height = bg.height;
    
    ctx.drawImage(mask, l, t);
    ctx.globalCompositeOperation = "source-in";
    ctx.drawImage(bg, 0, 0);
            
    var imageData = ctx.getImageData(l, t, mask.width, mask.height);                                       
    targetCtx.putImageData(imageData, 50, 50);  
});
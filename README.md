# MaskSlicerJS
Allows a user to 'slice' an image by using masks from existing images

## What is MaskSlicer ##
Mask slicer is a proof of concept of using an existing png image to create a mask on another image. The png image has several requirements to be used:
* The png mask must have a transparent background
* The png mask must be black for masking parts
* The png mask must be a similar size to the desired background image

If the png mask image does not meet these requirements, it may glitch or not display correctly. Also note that there seems to be a bug where occasionally neither image loads to form the mask. IDK what causes this rn.

## Install ##
To MaskeSlicerJS, clone the repository, then run npm install. Once installed, type in $node run.js and visit localhost8080

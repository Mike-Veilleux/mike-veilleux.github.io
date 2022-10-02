const frameWidth = 18;
const frameHeight = 6;
let scaleX = frameWidth / window.innerWidth;
let scaleY = frameHeight / window.innerHeight;


const eyeSize = 13;


const frameLeft = createFrame('frame_2',frameWidth,frameHeight);
const frameRight = createFrame('frame_1',frameWidth,frameHeight);
const eyeLeft = createEye(frameLeft,eyeSize);
const eyeRight = createEye(frameRight,eyeSize);
document.addEventListener('mousemove', onMouseMove);



//----------------------------------------
//           Helper Functions
//----------------------------------------

function onMouseMove(e){
    eyeRight.style.left = `${((e.pageX * scaleX))}px`;
    eyeRight.style.top = `${((e.pageY * scaleY))}px`;  
    
    eyeLeft.style.left = `${((e.pageX * scaleX))}px`;
    eyeLeft.style.top = `${((e.pageY * scaleY))}px`; 
}


function createFrame(_frameID,_width,_height){
    const frame = document.getElementById(_frameID);
    frame.style.width = `${_width}px`;
    frame.style.height = `${_height}px`;
    return frame;
}

function createEye(frameElem,_eyeSize){
    const eye_element = document.createElement('div');
    eye_element.id = 'eye';
    eye_element.style.width = `${_eyeSize}px`;
    eye_element.style.height = `${_eyeSize}px`;
    eye_element.style.background = 'black';
    eye_element.style.borderRadius = '50%';
    eye_element.style.position = 'relative';
    frameElem.appendChild(eye_element);
    return document.getElementById('eye');
}






let pic = "images/TruthandJustice.PNG";
let pic2 = "images/myface.jpg";
function changePicture()
{
    document.querySelector('img').setAttribute('src', pic);
}
function changeBack()
{
    document.querySelector('img').setAttribute('src',pic2);
}

document.getElementById("picture").addEventListener("click", changePicture);
document.getElementById("back").addEventListener("click", changeBack);
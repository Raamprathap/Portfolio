const images = ["images/C.webp", "images/Java.png", "images/Py.png", "images/css.png", "images/js.png", "images/html.png"];
document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.getElementById('span1');
    const span2 = document.getElementById('span2');
    const span3 = document.getElementById('span3');
    const span4 = document.getElementById('span4');
    const span5 = document.getElementById('span5');
    const span6 = document.getElementById('span6');
    const span7 = document.getElementById('span7');
    const span8 = document.getElementById('span8');
    const span9 = document.getElementById('span9');
    const span10 = document.getElementById('span10');
    let len = [];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        
        arr1.forEach(function(j){
            if (!arr2.includes(j)) {
                return false;
            }
        });

        return true;
    }

    function changeBackground(){
        console.log("Background change");
        let temp = [];
        let x = 0;
        let i = 0;
        while (i < 10) {
            x = getRandomInt(0, images.length-1);
            console.log(temp);
            if (!temp.includes(x)){
                console.log(images[x]);
                temp.push(x);
                switch(i){
                    case 0:
                        span1.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 1:
                        span5.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 2:
                        span3.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 3:
                        span2.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 4:
                        span10.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 5:
                        span4.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 6:
                        span7.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 7:
                        span9.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 8:
                        span6.style.backgroundImage = `url(${images[x]})`;
                        break;
                    case 9:
                        span8.style.backgroundImage = `url(${images[x]})`;
                        break;
                }
                i++;
            }
            if (arraysEqual(len, temp)){
                temp = []
            }
        }
    }

    for(let i = 0; i < images.length; i++) {
        len.push(i);
    }

    changeBackground();

    setInterval(changeBackground, 10000);
});
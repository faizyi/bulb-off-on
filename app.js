



var check = true;



function bulbonoff(){

    if(check){
        check = false;
        document.querySelector('button').innerHTML = 'ON'
        document.getElementById('img').src = './bulb off.png'
    }
    else{
        document.getElementById('img').src = './bulb on.png'
        document.querySelector('button').innerHTML = 'OFF   '

        check = true;
    }

}





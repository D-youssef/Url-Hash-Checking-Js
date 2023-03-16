/*
    Url Hash Checking
*/

// Method 1
if (window.location.hash) {
    
    // i did 1 bcs 0 is hash means it starts from 0
    if (window.location.hash.indexOf('youssef') === 1) { 
        
        console.log('Good Youssef Hash is Found');

    } else {

        console.log('Not Found Youssef Hash');

    }

} else {
    
    console.log('Bad There is No Hash in Link');

}

// Method 2
if (window.location.hash) {
    
    // i did 1 to remove # remain word after #
    var hash = window.location.hash.substring(1);

    if (hash === 'hassan') { 
        
        console.log('Good Hassan Hash is Found');
 
    } else {

        console.log('Not Found Hassan Hash');

    }

} else {
    
    console.log('Bad There is No Hash in Link');

}
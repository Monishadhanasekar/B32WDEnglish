let countdown = 10;
setTimeout(function (){
    document.getElementById("display").innerHTML = countdown--;
    setTimeout(function(){
        document.getElementById("display").innerHTML = countdown--;
        setTimeout(function(){
            document.getElementById("display").innerHTML = countdown--;
            setTimeout(function(){
                document.getElementById("display").innerHTML = countdown--;
                setTimeout(function(){
                    document.getElementById("display").innerHTML = countdown--;
                    setTimeout(function(){
                        document.getElementById("display").innerHTML = countdown--;
                        setTimeout(function(){
                            document.getElementById("display").innerHTML = countdown--;
                            setTimeout(function(){
                                document.getElementById("display").innerHTML = countdown--;
                                setTimeout(function(){
                                    document.getElementById("display").innerHTML = countdown--;
                                    setTimeout(function(){
                                        document.getElementById("display").innerHTML = countdown--;
                                        setTimeout(function(){
                                            document.getElementById("display").innerHTML = "Happy Independence Day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

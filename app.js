var getModal = document.getElementById("signupModal"),
    getbtnSignup = document.getElementById("btn-signup"),
    getbtnClose = document.querySelector(".btn-close"),
    getbtnFullScreen = document.getElementById("btn-fullScreen"),
    getbtnCloseScreen = document.getElementById("btn-closeScreen");



    getbtnSignup.addEventListener('click', function(){
        getModal.style.display = "block";
    })

    getbtnClose.addEventListener('click', function(){
        getModal.style.display = "none";

    });

    window.onclick = function(e) {
        // console.log(e);

        if(e.target === getModal){
                getModal.style.display = 'none';
        }
    }


    var getDe = document.documentElement;
    // console.log(getDe);

    getbtnFullScreen.addEventListener('click',function(){
        if(getDe.requestFullscreen){
            getDe.requestFullscreen();
        }else if(getDe.msRequestFullscreen){
            getDe.msRequestFullscreen();
        }else if(getDe.webkitRequestFullscreen){
            getDe.webkitRequestFullscreen();
        }
        getbtnCloseScreen.style.display = 'inline-block';
    })

    getbtnCloseScreen.addEventListener('click',function(){
        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }
        getbtnCloseScreen.style.display = 'none';
    })



    const myLocalStorage = () => {
        const temporaryKeeping = JSON.stringify(localStorage.setItem(getbtnFullScreen,"1"));
        if(temporaryKeeping === 1){
            getbtnCloseScreen
        }
    }

    myLocalStorage();

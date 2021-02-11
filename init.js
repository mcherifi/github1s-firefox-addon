if(document.querySelector('.file-navigation')){
    currentLocation = location.href.toString() ;
    navigation = document.querySelector('.file-navigation');
    goToFile = document.querySelector('a[data-hotkey="t"]');
    btn=document.createElement('a');
    btn.setAttribute('class','btn ml-2 d-none d-md-block btn-primary');
    btn.href = currentLocation.replace('github.com','github1s.com');
    btn.innerText = 'Github1s';
    navigation.insertBefore(btn, goToFile);
}
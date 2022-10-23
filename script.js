document.addEventListener('DOMContentLoaded',function(){
    let nav=document.querySelector('.nav');
    let items=document.querySelectorAll('.item');
    let trangthai='duoi100';
    window.addEventListener('scroll',function(){
        let vitri=window.pageYOffset;
        // console.log(vitri);
        if(vitri>=75){
            nav.classList.add('navtop');
        }
        if(vitri<75){
            nav.classList.remove('navtop')
        }
        items.forEach(item => {
            console.log((item.offsetTop-window.pageYOffset));
            if(item.offsetTop-window.pageYOffset<350)
            item.classList.add('active');
            // else
            // item.classList.remove('active');
        });
    })

})
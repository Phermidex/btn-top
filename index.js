//default vars
const nav = document.querySelector('.site-header');
const topOfNav = nav.offsetTop;


//add html with the botton top
function topHtmlbtnrender(){
     let btn = '<div class="btn-top-scroll">\
     <button class="btn-top"><i class="fa fa-angle-up" aria-hidden="true"></i></button>\
     </div>';
     document.body.append(btn);
}

//actions on scroll
function stickyMenu() {
    const btnTop = document.querySelector('.btn-top-scroll');
    const btnClick = document.querySelector('.btn-top');
    topHtmlbtnrender();
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
        btnTop.classList.remove('hide');
    } else {
        document.body.classList.remove('fixed-nav');
        btnTop.classList.add('hide');
    }

    btnClick.addEventListener('click', topBodyOnclick);

}


function topBodyOnclick() {
    scrollingElement = (document.scrollingElement || document.body);

    //var Hwindow = document.body.scrollHeight;
    var Hwindow = window.scrollY;
    var inEase = setInterval(() => {
        Hwindow = parseFloat(Hwindow) - 200;
        console.log(Hwindow);
        scrollingElement.scrollTop = Hwindow;
        if (Hwindow <= 0) {
            clearInterval(inEase);
            scrollingElement.scrollTop = 0;
        }
    }, 100);
}

//run events
window.addEventListener('scroll', stickyMenu);

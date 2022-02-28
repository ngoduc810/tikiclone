var container = {
    showInput: function () {
        var searchInput = document.querySelector('.header__up-search-input');

        var searchHistory = document.querySelector('.search-history');

        var showMore = document.querySelector('.search-history-show-more-btn');

        var showList = document.querySelector('.search-history-show-more-list');

        var showHide = document.querySelector('.search-history-show-hide');

        var searchClose = document.querySelectorAll('.search-history-close')[0];

        var searchItem = document.querySelectorAll('.search-history-item')[0];

        var searchCloseone = document.querySelectorAll('.search-history-close')[1];

        var searchItemone = document.querySelectorAll('.search-history-item')[1];

        var searchClosetwo = document.querySelectorAll('.search-history-close')[2];

        var searchItemtwo = document.querySelectorAll('.search-history-item')[2];

        var historyClose = document.querySelector('.history__close');

        searchInput.addEventListener('click', function (){
            searchHistory.style.display = 'block';
        });

        historyClose.addEventListener('click', function() {
            searchHistory.style.display='none';
        });

        showMore.addEventListener('click', function (){
            showList.style.display = 'block';
            showHide.style.display = 'flex';
            showMore.style.display = 'none';
        });

        showHide.addEventListener('click', function (){
            showList.style.display = 'none';
            showHide.style.display = 'none';
            showMore.style.display = 'flex';
        });
        
        searchClose.addEventListener('click', function () {
            searchItem.style.display = 'none';
        });

        searchCloseone.addEventListener('click', function () {
             searchItemone.style.display = 'none';
        });

        searchClosetwo.addEventListener('click', function () {
             searchItemtwo.style.display = 'none';
        });
     },
    
    showCategory : function()  {
        var categoryList = document.querySelector('.header__category-tablet-list');

        var modal = document.querySelector('.modal');

        var modalClose = document.querySelector('.category__reponsive-close');

        var loginTablet = document.querySelector('.category__reponsive-login');

        var loginFormTablet = document.querySelector('.login__tablet-mobile');

        var loginTabletClose = document.querySelector('.login__tablet-mobile-close');

        categoryList.addEventListener('click', function (){
            modal.style.display = 'block';
        });

        modalClose.addEventListener('click', function(){
            modal.style.display = 'none';
        });
        // dang nhap tablet
        loginTablet.addEventListener('click', function (){
            loginFormTablet.style.display = 'block';
        });
        
        loginTabletClose.addEventListener('click', function(){
            loginFormTablet.style.display = 'none';
        })
    },

    login : function() {
        var modalLogin = document.querySelector('.modal__login');
         
        var loginPhone = document.querySelector('.form__login-user');

        var loginEmail = document.querySelector('.form__login-user-email');
        
        var loginClose = document.querySelector('.form__login-close');

        var loginMain = document.querySelector('.header__up-login');

        var loginEmaillink = document.querySelector('.form__login-email');

        var loginEmailBack = document.querySelector('.form__login-header-icon');

        loginMain.addEventListener('click', function (){
            modalLogin.style.display = 'block';
            loginPhone.style.display = 'flex';
        });

        loginEmaillink.addEventListener('click', function(){
            loginEmail.style.display = 'flex';
            loginPhone.style.display = 'none';
        });

        loginEmailBack.addEventListener('click', function(){
            loginEmail.style.display = 'none';
            loginPhone.style.display = 'flex';
        });
        
        loginClose.addEventListener('click', function(){
            modalLogin.style.display = 'none';
        });

    },

    // container header slider
    containerSlider : function (){
        var prevHeader = document.querySelector('.container__header-icon-prev');

        var nextHeader = document.querySelector('.container__header-icon-next');

        var containerBox = document.querySelector('.container__header-list');

        nextHeader.addEventListener('click', function(){
            nextHeader.style.display = 'none';
            prevHeader.style.display = 'block';
            containerBox.style.transform = 'translateX(-100%)';
        });

        prevHeader.addEventListener('click', function(){
            nextHeader.style.display = 'block';
            prevHeader.style.display = 'none';
            containerBox.style.transform = 'translateX(0%)';
        })
    },
    sliderContainer : function(){
        var slider = document.querySelector('.container__slider-full');

        let sliderPrev = document.querySelector('.container__slider-left .slider-prev');

        let sliderNext = document.querySelector('.container__slider-left .slider-next');

        var sliderDefaul = 0;

        function nextSlider(){
            if(sliderDefaul < 400) {
                sliderDefaul += 100;
            }
            else {
                sliderDefaul = 0;
            }
            slider.style = `transform: translateX(-${sliderDefaul}%)`;
        }
        
        function prevSlider(){
            if(sliderDefaul == 0) {
                sliderDefaul = 400;
            }
            else {
                sliderDefaul -= 100 ;
            }
            slider.style = `transform: translateX(-${sliderDefaul}%)`;
        }

        setInterval(nextSlider,10000);

        sliderNext.addEventListener('click', function (){
            nextSlider();
        });

        sliderPrev.addEventListener('click', function (){
            prevSlider();
        })

    },

    sliderDeal : function (){

        var sliderDeal = document.querySelector('.deal-item-slider');
        
        var dealItem = document.querySelector('.deal-item');

        let sliderPrev = document.querySelector('.deal__item .slider-prev');

        let sliderNext = document.querySelector('.deal__item .slider-next');

        sliderNext.addEventListener('click', function (){
            sliderNext.style.display = 'none';
            sliderPrev.style.display = 'flex';
            sliderDeal.style.transform = 'translateX(-100%)';
        });

        sliderPrev.addEventListener('click', function (){
            sliderPrev.style.display = 'none';
            sliderNext.style.display = 'flex';
            sliderDeal.style.transform = 'translateX(0%)';
        });

    },

    sliderTrend : function (){

        let style = document.querySelector('.style');

        let styleSlider = document.querySelector('.style__slider');

        let sliderNext = document.querySelector('.style .slider-next');

        let sliderPrev = document.querySelector('.style .slider-prev');

        let inputStyle = document.querySelectorAll('.style-radio');

        let result = 0;

        let index = 0;



        function nextStyle(){
            if (result < 300 & index < 3) {
                result = result + 100;
                index += 1;
            }
            else {
                index = 0;
                result = 0;
                inputStyle[3].style = 'background-color: #e0e0e0';
            }
            styleSlider.style = `transform: translateX(-${result}%)`;
            inputStyle[index].style = 'background-color: var(--primary-color)';
            inputStyle[index-1].style = 'background-color: #e0e0e0';
        };
        
        
        function prevStyle(){
            if (result == 0 & index == 0) {
                result = 300;
                index = 3;
                inputStyle[0].style = 'background-color: #e0e0e0';
            }
            else {
                index = index - 1;
                result = result - 100;
            }
            styleSlider.style = `transform: translateX(-${result}%)`;
            inputStyle[index].style = 'background-color: var(--primary-color)';
            inputStyle[index+1].style = 'background-color: #e0e0e0';
        };

        sliderNext.addEventListener('click', nextStyle);
        sliderPrev.addEventListener('click', prevStyle);
    },

    seeMore : function () {
        var seeMore = document.querySelector('.container-seemore');

        var hideMore = document.querySelector('.container-hidemore');

        var productMore = document.querySelector('.javascript__hide');


        seeMore.addEventListener('click', function (){
            productMore.style.display = 'block';
            seeMore.style.display = 'none';
            hideMore.style.display= 'flex';
        })

        hideMore.addEventListener('click', function(){
            productMore.style.display = 'none';
            seeMore.style.display = 'flex';
            hideMore.style.display= 'none';
        })
    },

    productionActive : function () {
        var suggestItem = document.querySelectorAll('.suggest-item');

        var pageActive = document.querySelectorAll('.product-page');

        var seeMore = document.querySelectorAll('.container-seemore');

        var hideMore = document.querySelectorAll('.container-hidemore');

        var productMore = document.querySelectorAll('.javascript__hide');

        console.log(productMore)

        var result = suggestItem.forEach(function (item, index){
            var page = pageActive[index];

            item.addEventListener('click', function () {
                document.querySelector('.product-page.page__active').classList.remove('page__active');
                document.querySelector('.suggest-item.suggest-item-click').classList.remove('suggest-item-click');

                page.classList.add('page__active');
                this.classList.add('suggest-item-click');

                seeMore[index].addEventListener('click', function (){
                    productMore[index].style.display = 'block';
                    seeMore[index].style.display = 'none';
                    hideMore[index].style.display= 'flex';
                })

                hideMore[index].addEventListener('click', function(){
                    productMore[index].style.display = 'none';
                    seeMore[index].style.display = 'flex';
                    hideMore[index].style.display= 'none';
                })

            })
        }

        );
    },

    start: function() {
        this.showInput();
        this.showCategory();
        this.login();
        this.containerSlider();
        this.sliderContainer();
        this.sliderDeal();
        this.sliderTrend();
        this.seeMore();
        this.productionActive();
    }

}
container.start();

(function(){
    var templates = {
        elementor: {
            product_name: 'Elementor',
            product_url: 'https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/',
        },
        divi: {
            product_name: 'Divi',
            product_url: 'https://alvarotrigo.com/fullPage/wordpress-plugin-divi/',
        },
        gutenberg: {
            product_name: 'Gutenberg',
            product_url: 'https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/',
        }
    };

    function init(){
        const sourcePage = getPageParam();
        var template = templates[sourcePage];
        if(sourcePage && template){
            const buttonWrapper = document.createElement('div');
            buttonWrapper.className = 'cta-button'; 

            const dummyLink = document.createElement('a');
            dummyLink.href = '';

            const buttonText = document.createElement('a');
            buttonText.className = 'glowing-button';
            buttonText.innerHTML = '<div class="glow"></div>👉 Get fullPage for ' + template.product_name;
            buttonText.href = template.product_url;

            buttonWrapper.appendChild(dummyLink);
            buttonWrapper.appendChild(buttonText);
            document.body.appendChild(buttonWrapper);

            var originalButtons = document.querySelector('.preview-extensions-menu');
            if(originalButtons){
                originalButtons.remove();
            }

            var button2 = document.querySelector('.button-purchase');
            if(button2){
                button2.setAttribute('href', template.product_url);
            }

            var moreExamples = document.querySelector('.more-examples');
            if(moreExamples){
                moreExamples.setAttribute('href', template.product_url);
            }

            var firstSlide = document.querySelector('.fp-slide');   
            if(firstSlide){
                var p = firstSlide.querySelector('p');
                var description = getDescription();
                if(p && description){
                    p.innerHTML = description + ' in ' + template.product_name + ' for WordPress';
                }
            }

            var documentation = document.querySelector('.documentation');
            if(documentation){
                documentation.querySelector('a')?.setAttribute('href', template.product_url + 'parallax-effect');
            }
        }
    }

    function getDescription(){
        var descriptions = {
            'parallax': 'Use a beautiful <span class="highlight">Parallax Effect</span>',
            'scroll-horizontally': 'Create a beatiful <span class="highlight">Horizontal Scrolling</span> website',
        };

        const url = new URL(window.location.href);
        const pathParts = url.pathname.split('/');
        const lastPart = pathParts.length ? pathParts.pop()?.split('.')[0] : '';
        const content = descriptions[lastPart];

        return content ? content : null;
    }

    function getPageParam() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('page');
    }

    init();
})();
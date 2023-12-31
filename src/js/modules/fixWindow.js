export function fixWindow(type) {
    if (type) {
        setTimeout(function () {
            if (!document.body.hasAttribute('data-body-scroll-fix')) {
                let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                document.body.setAttribute('data-body-scroll-fix', scrollPosition);
                document.body.style.overflow = 'hidden';
                document.body.style.top = '-' + scrollPosition + 'px';
                document.body.style.left = '0';
                document.body.style.width = '100%';
            }
        }, 15);
    } else {
        if (document.body.hasAttribute('data-body-scroll-fix')) {
            let scrollPosition = Number(document.body.getAttribute('data-body-scroll-fix'));
            document.body.removeAttribute('data-body-scroll-fix');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.width = '';
            window.scroll(0, scrollPosition);
        }
    }
}
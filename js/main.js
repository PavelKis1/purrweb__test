(() => {
    document.addEventListener("DOMContentLoaded", () => {
        // Footer adaptive list
        const footerItems = document.querySelectorAll('.footer__bot-item');
        const footerTopList = document.querySelector('.footer__left .footer__list');
        const footerBotList = document.querySelector('.footer__bot .footer__list');
        const mediaQuery = window.matchMedia('(max-width: 575px)');
        mediaQuery.addEventListener('change', (e) => {
            if (e.matches) {
                for (const item of footerItems) {
                    if (!item.classList.contains('done')) {
                        footerTopList.append(item);
                        item.classList.add('done');
                    }
                }
            } else {
                for (const item of footerItems) {
                    if (item.classList.contains('done')) {
                        item.classList.remove('done');
                        footerBotList.append(item);
                    }
                }
            }
        });
        //

    })
})();
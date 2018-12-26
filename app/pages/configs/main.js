const config = {
    file: 'index.html',
    placeholders: {
        menu: {
            copies: 1,
            file: 'menu\\menu.html',
            placeholders: {}
        },
        menuMob: {
            copies: 1,
            file: 'menu\\menuMob.html',
            placeholders: {}
        },
        header: {
            copies: 1,
            file: 'header\\header.html',
            placeholders: {}
        },
        pagesContent: {
            file: 'main\\main.html',
            placeholders: {
                sidebar: {
                    file: 'sidebar\\sidebar.html',
                    placeholders: {}
                }
            }
        },
        footer: {
            file: 'footer\\footer.html',
            placeholders: {
            }
        },
        headerMob: {
            copies: 1,
            file: 'header\\headerMob.html',
            placeholders: {}
        },
        pagesContentMob: {
            file: 'main\\mainMob.html',
            placeholders: {}
        },
        footerMob: {
            file: 'footer\\footerMob.html',
            placeholders: {}
        },
        popUp: {
            file: 'popUp\\popUp.html',
            placeholders: {}
        },
    }
};
module.exports = config;

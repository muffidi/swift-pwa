/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */

let WebFont = '';

if (typeof window !== 'undefined') {
    WebFont = require('webfontloader');
}

const Fonts = () => {
    if (typeof window !== 'undefined') {
        WebFont.load({
            custom: {
                families: [
                    // 'Montserrat:n4,n5,n6,n8',
                    'Barlow:n4,n5,n6,n7,n9',
                ],
                urls: [
                    // 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,800&display=swap',
                    'https://fonts.googleapis.com/css?family=Barlow:400,500,600,800&display=swap', 
                ],
            },
        });
    }
};

export default Fonts;

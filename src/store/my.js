import {atom} from 'recoil';

export const info = atom({
    key: 'info',
    default: {
        'name': 'Duc',
        'contactSocialNetwork': '',
        'socialNetwork': {
            'LinkedIn': 'https://www.linkedin.com/in/duc-pham-51804721b/',
            'Github': 'https://github.com/MagicDinosaur',
            'Email': 'mailto: phamvietduc@gmail.com'
        } 
    },
});

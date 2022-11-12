import {atom} from 'recoil';

export const info = atom({
    key: 'info',
    default: {
        'name': 'Duc',
        'contactSocialNetwork': '',
        'socialNetwork': {
            'LinkedIn': ['https://www.linkedin.com/in/duc-pham-51804721b/','devicon-linkedin-plain-wordmark'],
            'Github': ['https://github.com/MagicDinosaur','devicon-github-original-wordmark'],
            'Email': ['mailto: phamvietduc@gmail.com','devicon-google-plain'],
        },
        'skills':{
            'Python': "devicon-python-plain colored",
            'Java': 'devicon-java-plain colored',
            'Go': 'devicon-go-plain colored',
            'React': 'devicon-react-original colored',
            'HTML': 'devicon-html5-plain colored',
            'CSS': 'devicon-css3-plain colored',
            'JavaScript': 'devicon-javascript-plain colored',
            'MySQL': 'devicon-mysql-plain colored',
            'MongoDB': 'devicon-mongodb-plain colored',
            'Redis': 'devicon-redis-plain colored',
            'Git': 'devicon-git-plain colored',
            'Docker': 'devicon-docker-plain colored',
        }
    },
});

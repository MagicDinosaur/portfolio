import {atom} from 'recoil';
import Gooly from './projects/gooly';
import MyMuse from './projects/mymuse';
import Dyhac from './projects/dyhac';
export const project = atom({
    key: 'project',
    default: {
        'Gooly': {
            'name': 'Gooly',
            'position': '',
            'description': 'A google-based searching tool with automated data crawling from dynamic websites',
            'logo': 'https://cdn-icons-png.flaticon.com/512/122/122932.png',
            'link': {
                'text': 'View source',
                'url': 'https://gooly.phamvietduc.com/',
                'git' : 'https://github.com/MagicDinosaur/Goooly',
            },
            'date': 'October 2021',
            'service': 'https://github.com/MagicDinosaur/Goooly',
            'type': 'Software','overview': {
                'description': Gooly,
                'image': [
                    '',

                ]
            },
            'result': {
                'description': 'Python Flask, SQLlite, HTML5, CSS, JavaScript, React',
                'list': [

                ]
            }
        },
        'MyMuse': {
            'name': 'MyMuse',
            'position': '',
            'description': 'A memory web game allowing users to follow the pattern to gain, save score, login, register and update personal information. Won 1st prize against 43 other product competitors.',
            'logo': 'https://img.freepik.com/premium-vector/cute-white-cat-cartoon-vector-illustration_42750-808.jpg',
            'link': {
                'text': 'View source',
                'url': 'https://my-muse01.herokuapp.com/index.php',
                'git' : 'https://github.com/MagicDinosaur/Mymuse',
            },
            'date': 'October 2021',
            'service': 'https://my-muse01.herokuapp.com/index.php',
            'type': 'Software','overview': {
                'description': MyMuse,
                'image': [
                    '',

                ]
            },
            'result': {
                'description': 'PHP, HTML5, CSS, JavaScript, React, MySQL',
                'list': [

                ]
            }
        },
        'Dyhac': {
            'name': 'Dyhac',
            'position': '',
            'description': 'Conference-supporting platform, helping to enhance the connection between the speakers and their audience.',
            'logo': 'https://www.nicepng.com/png/full/126-1269636_conference-presentation-comments-presentation-icon-png.png',
            'link': {
                'text': 'View source',
                'url': 'https://dyhac.phamvietduc.com',
                'git' : 'https://github.com/MagicDinosaur/Dyhac',

            },
            'date': 'December 2021',
            'service': 'https://github.com/MagicDinosaur/Dyhac',
            'type': 'Software',
            'overview': {
                'description': Dyhac,
                'image': [
                    '',
                ]
            },
            'result': {
                'description': 'Python Flask, SQLlite, HTML5, CSS, JavaScript, React',
                'list': [

                ]
            }
        },
        'Chatt': {
            'name': 'Chatt',
            'position': '',
            'description': 'A real time chat web application using Django serving a REST API with React as the front-end, encapsulated with Docker',
            'logo': 'https://i.pinimg.com/originals/a0/ea/19/a0ea19b67ec501ea4904a236b34e25c7.png',
            'link': {
                'text': 'View source',
                'url': 'https://github.com/MagicDinosaur/chitchat',
                'git' : 'https://github.com/MagicDinosaur/chitchat',
            },
            'date': 'October 2021',
            'service': 'https://github.com/MagicDinosaur/Goooly',
            'type': 'Software','overview': {
                'description': "Null",
                'image': [
                    '',
                ]
            },
            'result': {
                'description': 'Python, Django, ReactJs, React Redux, MySQL, Docker, Git',
                'list': [

                ]
            }
        },

    },
});

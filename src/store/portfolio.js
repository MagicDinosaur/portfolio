import {atom} from 'recoil';

export const project = atom({
    key: 'project',
    default: {
        'Dyhac': {
            'name': 'Dyhac',
            'position': '',
            'description': 'Conferences supporting platform, enhance the connection between the speakers and the audience.',
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
                'description': 'A platform that helps increase the productivity and connection between the speakers and the audience of the seminars. Readers can submit their questions instantly (publicly or anonymously) right at the speaker conference.',
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
        'Gooly': {
            'name': 'Gooly',
            'position': '',
            'description': 'A google-base searching tool with automated data crawling from dynamic websites',
            'logo': 'https://cdn-icons-png.flaticon.com/512/122/122932.png',
            'link': {
                'text': 'View source',
                'url': 'https://gooly.phamvietduc.com/',
                'git' : 'https://github.com/MagicDinosaur/Goooly',
            },
            'date': 'October 2021',
            'service': 'https://github.com/MagicDinosaur/Goooly',
            'type': 'Software','overview': {
                'description': 'A platform that helps increase the productivity and connection between the speakers and the audience of the seminars. Readers can submit their questions instantly (publicly or anonymously) right at the speaker conference.',
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
                'description': 'A real time chat web application using Django serving a REST API with React as the front-end, encapsulated with Docker',
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

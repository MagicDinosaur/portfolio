import {atom} from 'recoil';
import Gooly from './projects/gooly';
import MyMuse from './projects/mymuse';
import Dyhac from './projects/dyhac';
import Attend from './projects/attend';
import Chatt from './projects/chatt';
import Delunch from './projects/delunch';
import Portfolio from './projects/portfolio';
export const project = atom({
    key: 'project',
    default: {        
        'Attendance System': {
        'name': 'Attendance System',
        'position': 'Team Leader',
        'description': 'A realtime seat selection web application for students across the school. ',
        'logo': 'https://i.imgur.com/fehPFcg.gif',
        'link': {
            'text': '',
            'url': '',  
            'git' : '',
        },
        'date': '2022',
        'service': 'https://github.com/MagicDinosaur/Goooly',
        'type': 'Software','overview': {
            'description': Attend,
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
            'Delunch': {
            'name': 'Delunch',
            'position': 'Creator',
                'description': "A child charity project that aims to provide daily meals to mountainous area childrens for 9 months, costing only $0.5per meal." 
                           ,

            'logo': 'https://media.tenor.com/GffrCVkd4JkAAAAi/peach-and.gif',
            'link': {
                'text': 'I will update the source code soon!!',
                'url': '',
                'git': '',
            },
            'date': '2023',
            'service': 'https://github.com/MagicDinosaur/Goooly',
            'type': 'Software', 'overview': {
                'description': Delunch,
                'image': [
                    '',
                ]
            },
            'result': {
                'description': 'Python Flask, ReactJs, MySQL, Kafka, Flink, Google Cloud, Docker, Git',
                'list': [
                ]
            }
        },
        'Gooly': {
            'name': 'Gooly',
            'position': 'Creator',
            'description': 'A google-based searching tool with automated data crawling from dynamic websites',
            'logo': 'https://i.imgur.com/14fQQIX.gif',
            'link': {
                'text': 'View source',
                'url': 'https://gooly.phamvietduc.com/',
                'git' : 'https://github.com/MagicDinosaur/Goooly',
            },
            'date': '2022',
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
            'position': 'Creator',
            'description': 'A memory web game allowing users to follow the pattern to gain, save score, login, register and update personal information. Won 1st prize against 43 other product competitors.',
            'logo': 'https://i.imgur.com/Ym7aquc.gif',
            'link': {
                'text': 'View source',
                'url': 'https://my-muse01.herokuapp.com/index.php',
                'git' : 'https://github.com/MagicDinosaur/Mymuse',
            },
            'date': '2022',
            'service':'https://my-muse01.herokuapp.com/index.php',
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
        'Portfolio': {
            'name': 'If you are this far, you are already here',
            'position': 'Creator',
            'description': 'This portfolio website could be consisdered as a project of mine. Built with React, TailwindCSS, Framer Motion, and deployed on Netlify',
            'logo': 'https://i.imgur.com/fBRXI1N.png',
            'link': {
                'text': 'View source',
                'url': 'https://phamvietduc.com',
                'git': 'https://github.com/MagicDinosaur/portfolio',
            },
            'date': '2023',
            'service': '',
            'type': 'Software', 'overview': {
                'description': Portfolio,
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
            'position': 'Creator',
            'description': 'Conference-supporting platform, helping to enhance the connection between the speakers and their audience.',
            'logo': 'https://www.nicepng.com/png/full/126-1269636_conference-presentation-comments-presentation-icon-png.png',
            'link': {
                'text': 'View source',
                'url': 'https://dyhac.phamvietduc.com',
                'git' : 'https://github.com/MagicDinosaur/Dyhac',

            },
            'date': '2021',
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
                'description': Chatt,
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

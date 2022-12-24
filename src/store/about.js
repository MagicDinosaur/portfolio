import { atom } from 'recoil';

export const about = atom({
    key: 'about',
    default: {
        'work': {
            '1': {
            'name': 'Undergraduate Software Engineering Assistant',
            'company': 'GSU Department of CompSci',
            'time': 'Aug 2021 – Current',
            'location': 'Atlanta, GA',
            'logo': 'https://i.imgur.com/NCL5bHt.png',
            'description': 'I am currently working (happily) as an undergraduate software engineering \
                            assistant at Georgia State University in multiple projects',
            },
            '2': {
                'name': 'Software Teaching Assistant',
                'company': 'Open-Commerce Group',
                'time': 'May 2021 – Aug 2021',
                'location': 'Hanoi, Vietnam',
                'logo': 'https://i.imgur.com/EZatUR8.png',
                'description': 'I gained a big leap in SWE, soft skills, and connection with 3 hustle yet motivating months working in here.\
                                Worked fulltime in daytime, studied GSU\'s classes remotely at night, still killed them both with a smile on my face.',
            },
            '3':{
                'name': 'Software Engineering Intern',
                'company': 'Samo Tech',
                'time': 'Jan 2020 – Aug 2020',
                'location': 'Hanoi, Vietnam',
                'logo': 'https://i.imgur.com/UJRsT5p.jpg',
                'description': 'Joined a selected course for elite high school new grad students. I wrote my first line of code as well as started my journey in here  ',
            }
        },
        'education': {



        }
            
        },

    
});

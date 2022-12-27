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
            '1': {
                'name': 'Georgia State University',
                'time': 'Aug 2020 – Current',
                'location': 'Atlanta, GA',
                'degree': 'Bachelor of Science in Computer Science',
                'logo': 'https://i.imgur.com/4Z7ZQ9M.png',
                'description': 'I am currently pursuing a Bachelor of Science in Computer Science at Georgia State University, Honors College student. \
                                Six time award winner of Student President\'s List. GPA: 4.17',
            },
            '2': {
                'name': 'CodePath SWE 02 - 03',
                'time': 'May 2022 – Aug 2022',
                'location': 'Remote',
                'degree': 'Software Engineering Advanced Track',
                'logo': 'https://i.imgur.com/4Z7ZQ9M.png',
                'description': 'I was selected to enroll in CodePath\'s Software Engineering Advanced Track, a 16-week program about data structure and algorithms concept, soft skills'
            },
            '3' : {
                'name': 'TRENDS center',
                'time': 'May 2022 – Aug 2022',
                'location': 'Atlanta, GA',
                'degree': 'NeuralImaging and Machine Learning Research',
                'logo': 'https://i.imgur.com/4Z7ZQ9M.png',
                'description': "I was a member of TRENDS (The Georgia State University/Georgia Institute of Technology/Emory University)'s Center \
                 for Translational Research in Neuroimaging and Data Science)'s research. Research Team: Independent Vector Analysis \
                    Submitted paper at SCD 2022: NeuroImaging at Scale: Distributed Computing for Detection of Independent Subspaces in IVA"
            },
            '4': {
                'name': 'Hanoi Univeristy of Science and Technology',
                'time': 'Aug 2018 – Jan 2019',
                'location': 'Hanoi, Vietnam',
                'degree': 'Bachelor of Science in Computer Science',
                'logo': 'https://i.imgur.com/4Z7ZQ9M.png',
                'description': 'With an outstanding National High School Graduation Exam score \
                (top 0.00035% over the whole country), I was admitted to HUST - Ranked 1st in the country school list, Computer Science major'
            }


        }
            
        },

    
});

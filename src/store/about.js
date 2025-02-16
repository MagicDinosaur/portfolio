import { atom } from 'recoil';

export const about = atom({
    key: 'about',
    default: {
        'work': {
            5: {
                'name': 'System Software Engineering 1',
                'company': 'Knapp Inc North America',
                'time': 'March 2024 – Present',
                'location': 'Kennesaw, GA',
                'logo': 'https://imgur.com/7Myx0C2.png',
                'description': " The experience feels refreshingly different here. \
                It’s like returning to my roots—diving deep into core programming languages like Python, Java, and C++, alongside Oracle’s ecosystem.\
                And amidst all the problem-solving and innovation, I find joy in the little things—debugging mysteries, automating the mundane, and yes, sharing a good laugh along the way.\  "
                ,
            },
            4: {
                'name': 'Software Engineering Coop - NetDevOps',
                'company': 'Cox Communications',
                'time': 'Aug 2023 – Dec 2023',
                'location': 'Atlanta, GA',
                'logo': 'https://imgur.com/W2MmE9x.png',
                'description': "I got 4 months full of experience in a real-world software engineering environment, working with a team of engineers in building automation infrastructure with daily task, following Agile methodology. \  "
                ,
            },
            3: {
                'name': 'Devops/Software Engineering Intern',
                'company': 'American Eagle Outfitters',
                'time': 'June 2023 - Aug 2023',
                'location': 'Pittsburgh, PA',
                'logo': 'https://imgur.com/7i1l3UB.png',
                'description': "Embarking on a perpetual journey of knowledge, I have ceaselessly embraced the challenge of trying new things. \
                 And this time, I tried to be a DevOps Engineer with a whole new skill set. This job has significantly enriched my experience, \
                 marking a new chapter in my career of professional growth in a dynamic environment.",
            },
            2: {
                'name': 'Undergraduate Software Engineering Assistant',
                'company': 'GSU Department of CompSci',
                'time': 'Aug 2021 – Mar 2023',
                'location': 'Atlanta, GA',
                'logo': 'https://i.imgur.com/NCL5bHt.png',
                'description': "I was working <b>(happily)</b> as an undergraduate software engineering \
                            assistant at Georgia State University, contributing to diverse projects that spanned a spectrum of fields, ranging from the realms of Machine Learning to the dynamic landscape of Web Development.",
            },
            1: {
                'name': 'Software Teaching Assistant',
                'company': 'Open-Commerce Group',
                'time': 'May 2021 – Aug 2021',
                'location': 'Hanoi, Vietnam',
                'logo': 'https://i.imgur.com/EZatUR8.png',
                'description': 'I gained a big leap in SWE, soft skills, and connection with 3 hustle yet motivating months working in here.\
                                Worked fulltime in daytime, studied GSU\'s classes remotely at night, still killed them both with a smile on my face.',
            },
            0: {
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
                'time': 'Aug 2020 – Dec 2023',
                'location': 'Atlanta, GA',
                'degree': 'Bachelor of Science in Computer Science',
                'logo': 'https://i.imgur.com/4Z7ZQ9M.png',
                'description': 'I got a Bachelor of Science in Computer Science at Georgia State University, Honors College. Certificate in Data Science And Machine Learning \
                                <b>8 time</b> award winner of Student President\'s List. <b>GPA: 3.9</b>',
            },
            '2': {
                'name': 'CodePath SWE 02 - 03',
                'time': 'May 2022 – Aug 2022',
                'location': 'Remote',
                'degree': 'Software Engineering Advanced Track',
                'logo': 'https://i.imgur.com/4Z7ZQ9M.png',
                'description': 'I was selected to enroll in CodePath\'s Software Engineering Advanced Track, a 16-week program about data structure and algorithms concept, soft skills'
            },
            '3': {
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
                <b>(top 0.00035% over the whole country)</b>, I was admitted to HUST - Ranked <b>1st in the country school list</b>, Computer Science major'
            }


        }

    },


});



function Attend(){
 
    const techs = {
        'Python': "devicon-python-plain colored",
        'FastAPI': 'devicon-fastapi-plain colored',
        'React': 'devicon-react-original colored',
        'HTML': 'devicon-html5-plain colored',
        'CSS': 'devicon-css3-plain colored',
        'JavaScript': 'devicon-javascript-plain colored',
        'MySQL': 'devicon-mysql-plain colored',
        'Redis': 'devicon-redis-plain colored',
        'Git': 'devicon-git-plain colored',
        'Websocket': 'devicon-socketio-plain colored',
        'Docker': 'devicon-docker-plain colored',
    }
    
  
    return (
        <p>
            <br/>
            <div id = "top "align="center">
                <h2 align="center">Attendance System</h2>
                <p align="center">
                    An attendance system for students and teachers, supporting real-time interaction 
                    between users. Constructed with Python, Redis, MySQL, React, FastAPI, and Websocket.
                </p>
            </div>
            <h5>Overview</h5>
            This project is used to assist students in class attendance, with the improvement of real-time seat selection instead of merely form-based submission. 
            Here is the firstlook of how it works in the capture of realtime seat selection page and front-end workflow:<br/><br/>

            <img src="https://i.imgur.com/RF6fYV5.gif"
                style={{ "margin": "auto", "display": "block" }}></img><br />
            <img src="https://i.imgur.com/yYZFM1w.png"
                style={{ "margin": "auto", "display": "block" }}></img><br />
            To have a deeper understanding of the project, you can watch 2 story boards of the project below, one is for the front pages and 
            the other is for handling logic tasks under the hood:  <br/><br/>

            <img src="https://i.imgur.com/kNTPJxA.png"
                style={{ "margin": "auto", "display": "block","width":"100%"}}></img><br />
            <i><p style={{ "textAlign": "center" }}>Story cards for front pages from when the student log in</p><br /></i>
            <img src="https://i.imgur.com/sTpz1eU.png"
                style={{ "margin": "auto", "display": "block","width":"100%"}}></img><br />
            <i><p style={{ "textAlign": "center" }}>Story cards for handling logic tasks while student selecting seats</p><br /></i>

            <h5>Database Design</h5>

            For this project, MySQL is used as primary storage to store data and Redis for caching. With the primary storage, the data is mainly centered around 
            room_session, which is the main table that stores the information of the class time frame. Room_session_seats table will be synced with 
            Redis to capture the real-time seat selection:<br/><br/>
            <img src="https://i.imgur.com/NYSmnmW.png"
                style={{ "margin": "auto", "display": "block","width":"100%"}}></img><br />
            <i><p style={{ "textAlign": "center" }}>Primary Database Design</p><br /></i>
       
            <img src="https://i.imgur.com/5FtIQl1.png"
                style={{ "margin": "auto", "display": "block" }}></img><br />
            <i><p style={{ "textAlign": "center" }}>Redis Workflow Design</p><br /></i>
            <h5>
                Tech stack
            </h5>
         

            <div class="w-layout-grid skills-grid">
                        {
                            Object.keys(techs).map(name => (
                                <div class="skill-wrapper">
                                    <i style={{ "font-size": "400%" }} class={techs[name]}></i>
                                    <p style={{ "text-align": "center" }} class="title skill">
                                        {name}
                                    </p>
                                </div>
                            ))
                        }

                    </div>


            <p align="right">(<a href="#top">back to top</a>)</p>




        </p>
    )
}

export default Attend
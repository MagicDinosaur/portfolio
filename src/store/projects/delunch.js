function Delunch() {

    const techs = {
        'Python': "devicon-python-plain colored",
        'Flask': 'devicon-fastapi-plain colored',
        'React': 'devicon-react-original colored',
        'JavaScript': 'devicon-javascript-plain colored',
        'MySQL': 'devicon-mysql-plain colored',
        'Redis': 'devicon-redis-plain colored',
        'Git': 'devicon-git-plain colored',
        'Kafka': 'devicon-apachekafka-original-wordmark colored',
        'GCP': 'devicon-googlecloud-plain-wordmark colored',
        'Redis': 'devicon-redis-plain colored',
        'Git': 'devicon-git-plain colored',
        'Docker': 'devicon-docker-plain colored',
        
    }
    return (
        <>
    
        <i><h4>Note: This is an ongoing project, more detail will be updated daily</h4></i>
        <h5>Overview</h5>
            Delunch is a child charity project that aims to provide daily meals for underprivileged mountainous area children, especially those who cannot afford to have a healthy meal every day, at the affordable cost of only 0.5 dollars per meal for 9 months.
            Here is the firstlook of the project:<br /><br />
            <img src="https://i.imgur.com/VzhyfY3.gif"
                style={{ "margin": "auto", "display": "block" }}></img><br />
            
        <p></p>

        <h5>Detail</h5>
        <p>
                The project's backend is built with Flask, a micro web framework in Python, and uses Kafka, an open-source event streaming platform, to allow 
                communication between various microservices. The Flask backend exposes RESTful APIs through the routes, which accept donations from sponsors, 
                and sends the data to Kafka topics for further processing. <br /><br />

                Flink is used for stream processing, which consumes data from Kafka topics and generates real-time analytics. 
                The generated analytics include real-time counts of received donations, the total amount donated, 
                the number of active sponsorships, and much more. Flink is also used to validate the received data, 
                ensuring that the data received from the Kafka topic is not corrupted or duplicated.<br /><br />

                The project uses MySQL as its primary database for storing data such as sponsor information, sponsorship plans, 
                and donations received. The Python connector package "mysql-connector-python" is used to connect to the database 
                and execute queries. The database is set up in a containerized environment through Docker.<br /><br />

                The project also utilizes Google Cloud's infrastructure for scalability, reliability, and security.
                Google Kubernetes Engine (GKE) is used for container orchestration, which allows for dynamic scaling of resources and high 
                availability. Google Cloud Load Balancing is used to distribute traffic to the backend instances, while 
                Google Cloud Security Scanner provides vulnerability scanning of the deployed application.<br /><br />

                Finally, the project uses Google Cloud Pub/Sub to provide messaging services for asynchronous communication between 
                different microservices. Pub/Sub also allows for scalability and reliable delivery of messages.<br /><br />

        </p>
        <h5>System Design</h5>
            <img src="https://i.imgur.com/vAzD2JR.png"
                style={{ "margin": "auto", "display": "block", "width": "100%" }}></img><br />
            <i><p style={{ "textAlign": "center" }}>Primary Event Streaming Design</p><br /></i>
        <h5>Tech Stack</h5>
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
        </>
    )
}
export default Delunch;
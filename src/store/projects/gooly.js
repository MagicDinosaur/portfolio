

function Gooly() {
    const techs = {
        'Python': "devicon-python-plain colored",
        'React': 'devicon-react-original colored',
        'HTML': 'devicon-html5-plain colored',
        'CSS': 'devicon-css3-plain colored',
        'JavaScript': 'devicon-javascript-plain colored',
        'MySQL': 'devicon-mysql-plain colored',
        'Git': 'devicon-git-plain colored',
        'Django': 'devicon-django-plain colored',
        'Docker': 'devicon-docker-plain colored',
    }
    return (
        <p>
            <br/>
            <div id = "top "align="center">
                <h2 align="center">Gooly</h2>
                <p align="center">
                    A Google-based search engines 
                    You can try it on here : http://gooly.phamvietduc.com
                </p>
            </div>
            <h5>Overview</h5>
            Gooly is a google-clone search bar which supports crawling tool from back-end.  Here is the firstlook:<br />

            <img src="https://user-images.githubusercontent.com/94766118/176983549-dde0d2e9-3f8a-4ba7-9e13-703558f1bcf2.gif"
                style={{ "margin": "auto", "display": "block" }}></img><br />




            Behind the project is a tool that collects data from public websites and inserts into the MySQL database. Here is how it looks:

            <img src="https://user-images.githubusercontent.com/94766118/176984743-281e9382-dd94-48c3-8a0c-af7fcf12f67f.gif"
                style={{ "margin": "auto", "display": "block" }}></img><br />

            <p>Database</p>

            <img src="https://user-images.githubusercontent.com/94766118/176984831-69761b9a-e69f-47e9-aeff-4b32df683fce.png"
                style={{ "margin": "auto", "display": "block" }}></img><br />



            <h5>The idea of making this project
            </h5>

            <p>
                During my exposure to web programming, I noticed that most websites, especially electronic information sites, adhere to a common standard, in order to increase the number of vistors.
                When inspecting information from these pages, we see the presence of html <b>"meta"</b> tags. These tags will cover the general content of the website such as title, subject image, topic, etc.
                For example, when I inspect the homepage of Cnet and The Verge, we could see that there are some similarities in naming html tags such as
                "og:site_name", "og:description",,...
            </p><br />

            <img src="https://user-images.githubusercontent.com/94766118/176985569-f4a83361-2027-4f8e-a1b4-5631a7fee139.png"
                style={{ "margin": "auto", "display": "block" }}></img><br />
            <p style={{ "textAlign": "center" }}>Inspecting data from Cnet HTML meta tag
            </p>
            <img src="https://user-images.githubusercontent.com/94766118/176985604-7125a04a-5594-49f4-a403-c70b87fbba0b.png"
                style={{ "margin": "auto", "display": "block" }}></img><br />
            <p style={{ "textAlign": "center" }}>Inspecting data from the Verge HTML meta tag
            </p>

            With that idea in mind, I started developing a tool that could recursively call in the meta tags and anchor tags of public websites, and collect the data into the database. The collected data is served to search engines.
            <br /><br />
            <h5> Tech Stack</h5>

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
export default Gooly;

function MyMuse() {
    return (
        <p>
            <div id="top"></div>

            <br />
            <div align="center">
                <h2 align="center">MyMuse</h2>
                <p align="center">
                    A memory game, you just need to remember and repeat the partern <br/>
                    You can try it on <b><a href="https://my-muse01.herokuapp.com/index.php">here</a></b> <br/>
                    <i>Note: You can login with the admin account to see full pages <br/>
                        Username: test1@gmail.com |
                        Password: 1234 </i>
                </p>
            </div>
<h5>Overview</h5>
MyMuse is a memory web game, school project, allowing users to follow the pattern to gain, save score, login, register and 
update personal information. This project was done within 24 hours and won 1st prize against 43 others product competitors.  
Here is the first look:<br/><br/>
<img src ="https://i.imgur.com/oT8QFRZ.gif"
style={{ "margin": "auto", "display":"block"}}></img><br/>
The game is a simple game that you need to follow the pattern to gain a score. The pattern is a series of notes, each note is a different images and sounds. The game will start with a random pattern, and you need to repeat it to gain a score. The score will be saved and displayed in the "Account tab." To do so, you first need to create an account. If you already have an account, you can login in "Log In." tab.
I want to make a website that can showcase programming and logic skills, and have the opportunity to expand in the future . 
Therefore, a webgame is a suitable choice. hehe. I aslo want to show a bit about my personality. Shy, chill, and calm. <br/><br/>




<img src ="https://user-images.githubusercontent.com/94766118/176984743-281e9382-dd94-48c3-8a0c-af7fcf12f67f.gif"
style={{ "margin": "auto", "display":"block"}}></img><br/>

<p>Database</p>

<img src ="https://user-images.githubusercontent.com/94766118/176984831-69761b9a-e69f-47e9-aeff-4b32df683fce.png"
style={{ "margin": "auto", "display":"block"}}></img><br/>

<h5>
    Tech stack
</h5>


<a href="https://getbootstrap.com" rel="nofollow">Bootstrap</a> <br/>
<a href="https://reactjs.org/" rel="nofollow">React</a><br/>
<a href="https://jquery.com" rel="nofollow">Node.js</a><br/>

<a href="https://django.com" rel="nofollow">Django</a><br/>
<a href="https://www.mysql.com" rel="nofollow">MySQL</a><br/><br/>

<h5>The idea of making this project
</h5>
  
<p>
During my exposure to web programming, I noticed that most websites, especially electronic information sites, adhere to a common standard, in order to increase the number of vistors.  
When inspecting information from these pages, we see the presence of html <b>"meta"</b> tags. These tags will cover the general content of the website such as title, subject image, topic, etc. 
For example, when I inspect the homepage of Cnet and The Verge, we could se that there are some similiar in naming html tags such as 
"og:site_name", "og:description",,...
</p><br/>

<img src ="https://user-images.githubusercontent.com/94766118/176985569-f4a83361-2027-4f8e-a1b4-5631a7fee139.png"
style={{ "margin": "auto", "display":"block"}}></img><br/>
<p style={{"textAlign":"center"}}>Inspecting data from Cnet HTML meta tag
</p>
<img src ="https://user-images.githubusercontent.com/94766118/176985604-7125a04a-5594-49f4-a403-c70b87fbba0b.png"
style={{ "margin": "auto", "display":"block"}}></img><br/>
<p style={{"textAlign":"center"}}>Inspecting data from the Verge HTML meta tag
</p><br/>

With that ideas in mind, I started developing a tool that could recursively call in the meta tags and anchor tags of public websites, and collect the data into the database. The collected data is served to search engines.



<p align="right">(<a href="#top">back to top</a>)</p>




</p>
    )
}
export default MyMuse;
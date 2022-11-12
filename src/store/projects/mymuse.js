
function MyMuse() {
    return (
        <p id="top">
            <div align="center">
                <h2 align="center">MyMuse</h2>
                <p align="center">
                    A memory game, you just need to remember and repeat the partern <br />
                    You can try it on <b><a href="https://my-muse01.herokuapp.com/index.php">here</a></b> <br />
                    <i>Note: You can login with the admin account to see full pages <br />
                        Username: test1@gmail.com |
                        Password: 1234 </i>
                </p>
            </div>
            <h5>Overview</h5>
            MyMuse is a memory web game, school project, allowing users to follow the pattern to gain, save score, login, register and
            update personal information. This project was done within 24 hours and won 1st prize against 43 others product competitors.
            Here is the first look:<br /><br />
            <img src="https://i.imgur.com/oT8QFRZ.gif"
                style={{ "margin": "auto", "display": "block" }}></img><br />
            The game is a simple game that you need to follow the pattern to gain a score. The pattern is a series of notes, each note is a different images and sounds. The game will start with a random pattern, and you need to repeat it to gain a score. The score will be saved and displayed in the "Account tab." To do so, you first need to create an account. If you already have an account, you can login in "Log In." tab.
            I want to make a website that can showcase programming and logic skills, and have the opportunity to expand in the future .
            Therefore, a webgame is a suitable choice. hehe. I aslo want to show a bit about my personality. Shy, chill, and calm. <br />
            Basically, I used Javascript, MySQL,HTML, CSS, Git, Heroku to develop this game. The challenges I faced are came from tricky tasks such as:
            handling the game timer logic, displaying the information, ranking,
            and ensuring the security of the website. You might need to check the suitable version of languagues if you want to try to run the code (which i would love you if you don't) to see how it works.
            In the future, I might add some features to this game, such as:<br />
            - Add "Forgot password" function<br />
            - Allow user to modify their information<br />
            - Enhance user experience tab<br />
            - Allow user to modify the difficulty<br /><br />



            <img src="https://i.imgur.com/H8g2xwd.png"
                style={{ "margin": "auto", "display": "block" }}></img><br />

            <p style={{ "textAlign": "center" }}>Dashboard Page</p>

            <img src="https://i.imgur.com/LcqePoG.png"
                style={{ "margin": "auto", "display": "block" }}></img><br />

            <p style={{ "textAlign": "center" }}>User Profile Page</p>
            <h5>
                Tech stack
            </h5>
            🐾 Database Usage: MySQL for manage user's accounts and scores. You can login, save score, view score, or register new account<br />
            🐾 Ajax usage: For handling sending score task (your score will be sent to database if you lose and the game over).
            Login and check "Account" tab to try it<br />
            🐾 Responsive: Yes! the website is responsive. You can try it on your phone or tablet.<br />
            🐾 JavaScript<br /><br />




            <p align="right">(<a href="#top">back to top</a>)</p>




        </p>
    )
}
export default MyMuse;
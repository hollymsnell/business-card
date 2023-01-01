import React from "react"

export default function App() {
    return (
        <div className="container">
        <img src="https://media.licdn.com/dms/image/D5603AQGkDKdDEel14g/profile-displayphoto-shrink_800_800/0/1665708946852?e=1677715200&v=beta&t=DIxSiRl6NN8vexTInA3NCycPk-ahH4OOau6S6ZplNig" className="profile-photo" width="250" height="250"/>
            <h1>Holly Snell</h1>
                <h4>Full-Stack Developer</h4>
            <h3>About</h3>
                <small>Background in healthcare and human wellness. 2022 Bootcamp grad looking to become a software engineer.</small>
            <h3>Interests</h3>
                <small>Loves spending time being active outside when the weather is good. Including running, biking, hiking, kayaking, paddle boarding, rock climbing, and more!</small>
            <footer>
                <a href="https://github.com/hollymsnell" className="fa fa-github"></a>
                <a href="https://www.linkedin.com/hollymsnell" className="fa fa-linkedin"></a>
                <a href="mailto:hollymsnell@gmail.com" className="fa fa-envelope"></a>
                <a href="https://hollymsnell.github.io" className="fa fa-heart"></a>
            </footer>
        </div>
        
    )
}

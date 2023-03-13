import './App.css'

function App() {

  return (
    <div className="App">
    <div className="container">
      <img src="/pic02.jpg" className="profile-photo" width="250" height="250" />
      <h1>Holly Snell</h1>
      <h4>Full-Stack Developer</h4>
      <h3>About</h3>
      <small>
        Background in healthcare and human wellness. 2022 Bootcamp grad looking to become a software engineer.
      </small>
      <h3>Interests</h3>
      <small>
        Loves spending time being active outside when the weather is good. Including running, biking, hiking, kayaking,
        paddle boarding, rock climbing, and more!
      </small>
      <footer>
        <a href="https://github.com/hollymsnell" className="fa fa-github"></a>
        <a href="https://www.linkedin.com/hollymsnell" className="fa fa-linkedin"></a>
        <a href="mailto:hollymsnell@gmail.com" className="fa fa-envelope"></a>
        <a href="https://hollymsnell.github.io" className="fa fa-heart"></a>
      </footer>
    </div>
    </div>
  )
}

export default App

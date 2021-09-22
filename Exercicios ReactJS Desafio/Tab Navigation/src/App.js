import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBox, faBookOpen, faUsers } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react'




function App() {
  const [source, setSource] = useState("https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80")

  function handleClick(e) {
    const id = e.currentTarget.id
    if (id === "home") {
      setSource("https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80")
    }
    else if (id === "work") {
      setSource("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")
    }
    else if (id === "blog") {
      setSource("https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80")
    }
    else if (id === "aboutUs") {
      setSource("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")
    }
  }

  return (
    <div className="App">
      <section>
        <div class="cellphone">
          <img class="contents" src={source} alt="first_image" />
          <div>
            <lu class="container">
              <li onClick={handleClick} id="home" >
                <FontAwesomeIcon icon={faHome} />
                <p class="bottom" >Home</p>
              </li>
              <li onClick={handleClick} id="work">
                <FontAwesomeIcon icon={faBox} />
                <p class="bottom">Work</p>
              </li>
              <li onClick={handleClick} id="blog">
                <FontAwesomeIcon icon={faBookOpen} />
                <p class="bottom" >Blog</p>
              </li>
              <li onClick={handleClick} id="aboutUs">
                <FontAwesomeIcon icon={faUsers} />
                <p class="bottom" >About Us</p>
              </li>
            </lu>
          </div>
        </div>

      </section>

    </div >

  );
}

export default App;

import React, { useContext } from 'react';
import ResumeLink from '../components/ResumeLink';
import '../styles/scss-style/TextAnimation.scss'
import '../styles/Home.css'
const Home = () => {
  const switchToTab = (id: number) => {
    const target = document.querySelector(`.tabs-controls__link[data-id="${id}"]`) as HTMLElement;
    if (target) {
      target.click();
    }
  };
  return (
    <>

      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="title ontSize-large">Hi! I'm <span className="name-highlight">Mukilan</span></h1>
            <h2 className="subtitle fontSize-medium">Java Spring Boot + React.Js Developer</h2>
            <p className="description fontSize-Small">
              Passionate about building scalable web apps and crafting clean, efficient code. Let's build something awesome together!
            </p>
            <div className="hero-buttons">
              <ResumeLink />
              <a onClick={() => switchToTab(5)} className="btn-secondary">View Projects</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

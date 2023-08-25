import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faCircleInfo, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Nav, Navbar, Row } from 'react-bootstrap';

const Home = () => {
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, []);

  return (
    <div className={styles.appContainer}>
      <LoadingScreen loaded={hasLoaded} />
      <NavbarWrapper />
      <HeroSection />
      <AboutMeSection />
    </div>
  )
}

const NavbarWrapper = () => {
  return (
    <Navbar className={styles.mainNavbar} sticky="top">
      <Navbar.Brand href="#home" className={styles.navIcon}>CK</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link href="#home">
            <FontAwesomeIcon icon={faHome} size="2xl" className={styles.navIcon} />
          </Nav.Link>
          <Nav.Link href="#about">
            <FontAwesomeIcon icon={faCircleInfo} size="2xl" className={styles.navIcon} />
          </Nav.Link>
          <Nav.Link href="#github">
            <FontAwesomeIcon icon={faGithub} size="2xl" className={styles.navIcon}/>
          </Nav.Link>
          <Nav.Link href="#google">
            <FontAwesomeIcon icon={faGoogle} size="2xl" className={styles.navIcon} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const roleStyle = {
  "color": "pink",
  "font-style": "italic",
  "font-size": "48px",
  "text-decoration": "underline"
}

const moreAboutMe = {
  "padding": "128px 0px 0px 0px"
}

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <Row>
          <Col md={12} lg={6} className={styles.centeredContent}>
            <div>
              <p>Hello and welcome to my website. My name is</p>
              <h1>Carltone Kapfunde</h1>
              <h2>
                I am <br />
                <span style={roleStyle}>full-stack developer</span><br />
                and <br />
                <span style={roleStyle}>UI/UX designer</span>
              </h2>
            </div>
          </Col>
          <Col md={12} lg={6} className={styles.centeredContent}>
            <img src='/img/java.svg' />
          </Col>
        </Row>
        <Row className={styles.centeredContent} style={moreAboutMe}>
          <p>Check out more about me!</p>
          <a href="#aboutme"><FontAwesomeIcon icon={faChevronDown} size="xl"/></a>
        </Row>
      </div>
    </section>
  )
}

const AboutMeSection = () => {
  return (
    <section className={styles.aboutMe} id="aboutme">
      <div className={styles.aboutMeContainer}>
        Hello
      </div>
    </section>
  )
}

export default Home;
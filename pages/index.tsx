import { Button, Carousel, Col, Row } from "react-bootstrap";
import { MenuBar } from "../components/MenuBar";
import styles from '../styles/Home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {    
    return (
      <div className='homePage'>
        <MenuBar />
        <HeroSection />
        {/* <AboutSection /> */}
        <MediaHubSection />
      </div>
    );
}

const HeroSection = () => {
  return (
    <section 
      id="home"
      className={`${styles.homeSection} ${styles.homeHero}`}>
        <h3>Hello and welcome to my website. I am</h3>
        <hr />
        <h1>Carltone Kapfunde</h1>
        <hr />
        <h2>I specialise in Software Engineering and Web Development</h2>
    </section>
  );
}

const AboutSection = () => {
  return (
    <section
      id="about"
      className={`${styles.homeSection} ${styles.aboutMe}`}>
        <h2>ABOUT ME</h2>
        <hr />
      <Row>
        <Col
          sm={12} lg={6}>
            <h3>A little bit about me</h3>
            <p>
              I am a software developer who enjoys creating programs, tools and games, both as a hobby and commercially. I am in the process of making some of my creations open-source on GitHub so that I can share my journey with other developers.
            </p>
            <p>
              My main strengths are software development as I love engineering systems from ground up and understanding the practices and tools used in the industry.
            </p>
            <p>
              I believe there are many libraries out there providing extensive tools to make the user experience phenomenal, which is why I've gained a lot of interest in frontend development.
            </p>
        </Col>
        <Col
          sm={12} lg={6}>
            <h3>My skills</h3>
        </Col>
      </Row>
    </section>
  )
}

const MediaHubSection = () => {
  return (
    <section
      id="mediahub"
      className={`${styles.homeSection} ${styles.mediaHubSection}`}>
        <Row>
          <Col
            className={styles.projectSummary}
            sm={12} lg={6}>
              <div className={styles.projectHeader}>
                <h3>MediaHub</h3>
                <hr />
                <p>
                  MediaHub is an application lets you browse popular video/music platforms and compile your own playlists.
                </p>
              </div>
              <Carousel>
                <Carousel.Item>
                  <img src='/img/mediahub/login.png'></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/img/mediahub/search.png'></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img src='/img/mediahub/play-video.png'></img>
                </Carousel.Item>
              </Carousel>
              <div className={styles.projectFooter}>
                <Button>
                  <FontAwesomeIcon
                    style={{ marginRight: "8px" }}
                    icon={faGithub} 
                    size="xl"/>
                    View on GitHub
                </Button>
              </div>
          </Col>
          <Col 
            className={styles.techSummary}
            sm={12} lg={6}>
              <h3>Languages used:</h3>
              <hr />
              <Row className={`${styles.iconGrid} g-5`}>
                <IconCaption
                  iconPath="/img/icons/css.svg"
                  iconCaption="CSS" />
                <IconCaption
                  iconPath="/img/icons/html.svg"
                  iconCaption="HTML" />
                <IconCaption
                  iconPath="/img/icons/javascript.svg"
                  iconCaption="JavaScript" />
                <IconCaption
                  iconPath="/img/icons/sass.svg"
                  iconCaption="Sass" />
                <IconCaption
                  iconPath="/img/icons/typescript.svg"
                  iconCaption="TypeScript" />
              </Row>
              <h3>Framework/Libraries:</h3>
              <hr />
              <Row className={`${styles.iconGrid} g-5`}>
                <IconCaption
                  iconPath="/img/icons/bootstrap.svg"
                  iconCaption="Bootstrap" />
                <IconCaption
                  iconPath="/img/icons/electron.svg"
                  iconCaption="Electron" />
                <IconCaption
                  iconPath="/img/icons/react.svg"
                  iconCaption="React" />
                <IconCaption
                  iconPath="/img/icons/redux.svg"
                  iconCaption="Redux" />
              </Row>
          </Col>
        </Row>
    </section>
  )
}

const IconCaption = (props: {
  iconPath: string,
  iconCaption: string
}) => {
  return (
    <Col sm={3}>
      <div className={styles.iconCaption}>
        <img src={props.iconPath} />
      </div>
    </Col>
  );
}

export default HomePage;
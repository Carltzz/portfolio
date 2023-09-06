import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faHome, faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Nav, Navbar } from "react-bootstrap"
import styles from './MenuBar.module.scss'

export const MenuBar = () => {
  return (
    <Navbar className={styles.mainNavbar}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link href="#home">
            <FontAwesomeIcon icon={faHome} size="2xl" className={styles.navIcon} />
          </Nav.Link>
          <Nav.Link href="#about">
            <FontAwesomeIcon icon={faCircleInfo} size="2xl" className={styles.navIcon} />
          </Nav.Link>
          <Nav.Link href="https://github.com/Carltzz">
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
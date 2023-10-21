import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Image} from "react-bootstrap";
import soundcloudLogo from "../assets/img/soundcloud_img.png";
import githubLogo from "../assets/img/github-mark.png";
import tistoryLogo from "../assets/img/tistory_logo_black.png"
import React from "react";


function Header() {
    return (
        <>
            <Navbar className="HomeTitle">
                <Container className="justify-content-end">
                </Container>
                <Container className="justify-content-center">
                    <Navbar.Brand href="#home"><h2><b>OTHEBELL</b></h2></Navbar.Brand>
                </Container>
                <Container id="header_right_fixed" className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="https://github.com/dhdnjswnd"><Image src={githubLogo} rounded
                                                                             className="link_logo_image"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://soundcloud.com/9jmu75ppbekf"><Image src={soundcloudLogo} rounded
                                                                                    className="link_logo_image"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="pe-5">
                        <Nav.Link href="https://developerpearl.tistory.com/"><Image src={tistoryLogo} rounded
                                                                                    className="link_logo_image"/></Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

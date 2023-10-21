
import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";

function Footer() {

    return (
        <footer className="footer px-0 px-lg-3 bg-body-secondary">
            <Container fluid>
                <Nav
                    activeKey="/home"
                >
                    <Nav.Item>
                        <Nav.Link href="https://soundcloud.com/9jmu75ppbekf">SoundCloud</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/dhdnjswnd">Github</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link href="https://developerpearl.tistory.com/" >블로그</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            {/* Disabled */}
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <p className="copyright text-center">
                    © {new Date().getFullYear()}{" "}
                    Oh Wonjong
                </p>

            </Container>
        </footer>
    );
}


export default Footer;
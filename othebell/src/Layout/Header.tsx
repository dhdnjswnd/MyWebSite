import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Image, Nav} from "react-bootstrap";
import soundcloudLogo from "../assets/img/soundcloud_img.png";
import githubLogo from "../assets/img/github-mark.png";
import tistoryLogo from "../assets/img/tistory_logo_black.png"
import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {Link} from 'react-router-dom';


function Header() {

    interface NavItemProps {
        link: string;
        src: string;
        tooltipString: string;
        className?: string;
    }

    const NavItem: React.FC<NavItemProps> =
        ({
             link,
             src,
             tooltipString,
             className = ""
         }) => (
            <Nav.Item className={className}>
                <Nav.Link href={link}>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{show: 250, hide: 400}}
                        overlay={<Tooltip>{tooltipString}</Tooltip>}
                        defaultShow={true}>
                        <Image src={src} rounded
                               className="link_logo_image"/></OverlayTrigger>
                </Nav.Link>
            </Nav.Item>
        );
    return (
        <>
            <Navbar className="HomeTitle">
                <Container className="justify-content-end">
                </Container>
                <Container className="justify-content-center">
                    <Navbar.Brand><Link to="/home" style={{textDecoration: 'none', color:"black"}}><h2><b>OTHEBELL</b></h2>
                    </Link></Navbar.Brand>
                </Container>
                <Container id="header_right_fixed" className="justify-content-end">
                    <NavItem link="https://github.com/dhdnjswnd" src={githubLogo} tooltipString="깃헙으로 바로가기"></NavItem>
                    <NavItem link="https://soundcloud.com/9jmu75ppbekf" src={soundcloudLogo}
                             tooltipString="사운드클라우드"></NavItem>
                    <NavItem link="https://developerpearl.tistory.com/" src={tistoryLogo} tooltipString="티스토리 바로가기"
                             className="pe-5"></NavItem>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

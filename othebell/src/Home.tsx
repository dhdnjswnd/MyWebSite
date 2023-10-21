import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import logo from 'assets/img/BellIcon.png' // relative path to image
import 'css/homeCSS.css';


function HomeContainer() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col className="logo_container">
                    <Image src={logo} rounded className="logo_image"/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <div className="homeContainter"><h1>세상을 향해 울리는 하나의 종</h1></div>
            </Row>
            <Row className="justify-content-md-center">
                <h2><b>오원종</b>입니다</h2>
            </Row>{
            <Row className="justify-content-md-center">
                <Col xs>
                    <br></br>
                    <div className='content_center'>
                        <div className='division-line'></div>
                    </div>
                    <br></br>
                </Col>
            </Row>
        }
            <Row className="justify-content-md-center">
                <h5>
                    <p>끊임없는 호기심으로</p>
                    <p>세상을 조금씩 알아가고 있습니다.</p>
                </h5>
            </Row>
            <Row className="justify-content-center">
                <div id="home_category_container">
                    <Col>
                        <div className="home_category_item_box">
                            <div>
                            <a className="home_category_item" href="#Developer">Developer </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="home_category_item_box">
                            <a className="home_category_item" href="#Musician">Musician </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="home_category_item_box">
                            <a className="home_category_item" href="#Other">Other </a>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    );
}

export default HomeContainer;

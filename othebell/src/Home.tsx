import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import logo from 'assets/img/BellIcon.png' // relative path to image
import 'css/homeCSS.css';
import {Link} from 'react-router-dom';


function HomeContainer() {
    // @ts-ignore
    // @ts-ignore
    return (
        <Container>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>

            <div className='wave -one_second'></div>
            <div className='wave -two_second'></div>
            <div className='wave -three_second'></div>

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
                <br></br>
                <div className='content_center'>
                    <div className='division-line'></div>
                </div>
                <br></br>
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
                        <Link className="home_category_item_box" to={"/developer"} style={{textDecoration:'none'}}>
                            <div className='home_category_item'>
                                Developer
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="home_category_item_box" to={"/musician"} style={{textDecoration:'none'}}>
                            <div className='home_category_item'>
                                Musician
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="home_category_item_box" to={"/other"} style={{textDecoration:'none'}}>
                            <div className='home_category_item'>
                                Other
                            </div>
                        </Link>
                    </Col>
                </div>
            </Row>
        </Container>
    );
}

export default HomeContainer;

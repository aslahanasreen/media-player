import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            <div className='container-fluid d-flex align-items-center' style={{height:'90vh'}}>
                <Row>
                    <Col sm={12} md={6} className='p-5'>
                        <h2>MEDIA PLAYER 2024</h2>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam facilis dolorem vel commodi id iure hic, recusandae eligendi asperiores et impedit corrupti, voluptatibus veniam libero perferendis earum ipsa placeat. Maxime.</p>
                        <div className='d-grid'>
                            <Link to={'/log'} className='btn btn-success'>Let's Go</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <img src="https://i.pinimg.com/564x/d2/d5/f8/d2d5f87782bcd176b4e0ad5e70bbb0cc.jpg" alt="" className='img-fluid rounded' style={{ height: '200px' }} />
                    </Col>
                </Row>
            </div>

            <div className='container-fluid mt-5 ' >
                <h3 className='text-center mb-3'> FEATURES</h3>
                <div className='p-4 d-flex justify-content-around'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'300px'} src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif" />
                        <Card.Body>
                            <Card.Title>Upload Vidios</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'300px'} src="https://cdn.dribbble.com/users/469998/screenshots/2325648/output_bsrh32.gif" />
                        <Card.Body>
                            <Card.Title>Add Categories</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'300px'} src="https://i.pinimg.com/474x/78/0e/82/780e82a59775c95c72df27c9d8e1bb74.jpg" />
                        <Card.Body>
                            <Card.Title>Watch History</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className='p-5 container-fluid'>
                <Row>
                    <Col sm={12} md={7}>
                    <h3>Simple and Faster</h3>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae ea modi dolores sed magnam illo voluptate similique quae quis veniam quo repellendus incidunt exercitationem, omnis, alias nisi magni aliquid!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus impedit quae! Consequuntur laborum, fugit, unde aut maiores voluptatibus mollitia asperiores molestias non odio doloribus totam, consectetur labore voluptatem placeat.
                    </p>
                    </Col>
                    <Col sm={12} md={5}>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/Tn6-PIqc4UM?si=NO7L89zq5Ukyzonu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Landing
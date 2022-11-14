import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container style={{ 'position': 'fixed', 'bottom': '0px', marginLeft:'5em' }} className="bg-light text-black text-center mt-2">
            <Row>
                <Col md={12}>
                    <pre>Created by Anita Meliyanti 2110018 1.3D</pre>
                    
                </Col>
            </Row>
        </Container>
    )
}
import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, Container} from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="fixed-bottom">
                <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
                </Navbar>
            </div>
            </footer>
        )
    }
}

export default Footer

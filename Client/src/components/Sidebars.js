import React from 'react'
import { Nav } from 'react-bootstrap'

function Sidebars({ items }) {
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar "
        // activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/data">App Data</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/user">User Data</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Sidebars
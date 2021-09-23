import React from 'react';
import { Nav, NavItem, NavLink,Button, ButtonGroup,ButtonToolbar } from 'reactstrap';

//falta el estilo de las letras style={{fontSize: '28px',padding:'0px,20px,20px,0px,'}}
const NavBarAbecedario = () => {
  return (
    <div>
      <Nav className={'navbar navbar-dark bg-primary'}style={{justifyContent: 'center'}}>
          <ButtonGroup>
            <Button color="primary">A</Button>  
            <Button color="primary">B</Button>
            <Button color="primary">C</Button>
            <Button color="primary">D</Button>
            <Button color="primary">E</Button>
            <Button color="primary">F</Button>
            <Button color="primary">G</Button>
            <Button color="primary">H</Button>
            <Button color="primary">I</Button>
            <Button color="primary">J</Button>
            <Button color="primary">K</Button>
            <Button color="primary">L</Button>
            <Button color="primary">M</Button>
            <Button color="primary">N</Button>
            <Button color="primary">O</Button>
            <Button color="primary">P</Button>
            <Button color="primary">Q</Button>
            <Button color="primary">R</Button>
            <Button color="primary">S</Button>
            <Button color="primary">T</Button>
            <Button color="primary">U</Button>
            <Button color="primary">V</Button>
            <Button color="primary">W</Button>
            <Button color="primary">X</Button>
            <Button color="primary">Y</Button>
            <Button color="primary">Z</Button>
          </ButtonGroup>
          <ButtonGroup>
          <Button color="primary">LOGOUT</Button>
          </ButtonGroup>
      </Nav>

    </div>
  );
}

export default NavBarAbecedario;
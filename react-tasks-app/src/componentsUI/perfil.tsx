import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container,Row,Col} from 'reactstrap';


const PerfilUsuario = () => {
  	return (
	    <div>
	    <h3>Bienvenido: </h3>
	    <Col xs="3">
	     <Card>
	        <CardBody>
	        <Container>
	        <Row>
	        	<Col ><img width={"100px"} height={"100px"} src={'https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png'}  /></Col>
	        <Col ><CardTitle tag="h5">Nombre Persona</CardTitle><CardSubtitle tag="h6" className="mb-2 text-muted">Correo Persona</CardSubtitle></Col>
	        </Row></Container>
	        </CardBody>
	      </Card>
	    </Col>


		</div>
  	);
}

export default PerfilUsuario;
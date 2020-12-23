import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './tarjetas.css'
import { Card, Button} from 'react-bootstrap';
function Tarjetas(){
return (
<div>
    <div className="container4">
        <div className="padding">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://k-magazinemx.com/wp-content/uploads/2020/10/Loona-comeback-Why-Not-Midnight.jpg" />
            <Card.Body>
                <Card.Title>Miembros</Card.Title>
                <Card.Text>
                Click abajo para más información sobre todas las miembros de LOONA.
                </Card.Text>
                <Button variant="primary">Más información.</Button>
            </Card.Body>
            </Card>
        </div>
        <div className="padding1">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://pbs.twimg.com/media/DwksWywX4AALwl0.jpg" />
            <Card.Body>
                <Card.Title>Subunidades</Card.Title>
                <Card.Text>
                Click abajo para más información sobre las subunidades de LOONA.
                </Card.Text>
                <Button variant="primary">Más información.</Button>
            </Card.Body>
            </Card>
        </div>
        <div className="padding2">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ebayimg.com/images/g/fE8AAOSwajRcb5HV/s-l300.jpg" />
            <Card.Body>
                <Card.Title>Albums</Card.Title>
                <Card.Text>
                Click abajo para más información sobre los albums de LOONA.
                </Card.Text>
                <Button variant="primary">Más información.v</Button>
            </Card.Body>
            </Card>
        </div>
    </div>
</div>
);
}
export default Tarjetas;
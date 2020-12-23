import React from 'react';
import './Miembros.css';
import { Card, Button} from 'react-bootstrap';
export default class Miembros extends React.Component{
    render() {
        return (
        <div>
           <div className="container5">
            <div className="padding3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1315320709766361090/xsVm5jWI.jpg" />
                <Card.Body>
                    <Card.Title>Heejin</Card.Title>
                    <Card.Text>
                    Heejin es la primera miembro de LOONA y su primer single se llama Vivid.
                    </Card.Text>
                    <Button variant="primary">Más información.</Button>
                </Card.Body>
                </Card>
            </div>
            <div className="padding4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://pbs.twimg.com/media/El6XbMPWoAAjXBR?format=jpg&name=small" />
                <Card.Body>
                    <Card.Title>Hyunjin</Card.Title>
                    <Card.Text>
                    Hyunjin es la segunda miembro de LOONA y su single se llama Around You.
                    </Card.Text>
                    <Button variant="primary">Más información.</Button>
                </Card.Body>
                </Card>
            </div>
            <div className="padding5">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.wikia.nocookie.net/loona/images/f/f0/Butterfly_HaSeul.png/revision/latest?cb=20200409015316&path-prefix=es" />
                <Card.Body>
                    <Card.Title>Haseul</Card.Title>
                    <Card.Text>
                    Haseul es la tercera miembro de LOONA y su single se llama Let Me In.
                    </Card.Text>
                    <Button variant="primary">Más información.v</Button>
                </Card.Body>
                </Card> 
            </div>
        </div>
            </div>
    );
}
}
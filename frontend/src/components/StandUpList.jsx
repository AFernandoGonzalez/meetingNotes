import { Card, Col, Row } from 'react-bootstrap';

export const StandUpList = ({ currentItems }) => {

    return (
        <div className="mt-4">
            {currentItems.length === 0 ? (
                <div className='d-flex justify-content-around align-items-center' >
                    <p>No stand-up data available.</p>
                </div>
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {currentItems.map((note) => (
                        <Col key={note._id} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="bg-black text-white font-weight-bold text-lg mb-2 card-header">
                                        {note.teamMember}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 font-weight-bold">Project</Card.Subtitle>
                                    <Card.Text className="mb-2">{note.project}</Card.Text>
                                    <Card.Subtitle className="mb-2 font-weight-bold">Work Yesterday</Card.Subtitle>
                                    <Card.Text className="mb-2">{note.workYesterday}</Card.Text>
                                    <Card.Subtitle className="mb-2 font-weight-bold">Work Today</Card.Subtitle>
                                    <Card.Text className="mb-2">{note.workToday}</Card.Text>
                                    <Card.Subtitle className="mb-2 font-weight-bold">Impediment</Card.Subtitle>
                                    <Card.Text className="mb-0">{note.impediment}</Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">Date: {note.createdOn}</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    )
}
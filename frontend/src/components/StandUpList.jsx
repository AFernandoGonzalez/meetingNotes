import { Card, Col, Row } from 'react-bootstrap';

export const StandUpList = ({ standUpData }) => {
    if (!standUpData || standUpData.length === 0) {
        return <p>No stand-up data available.</p>;
    }
    return (
        <div className="mt-4">
            <Row xs={1} md={2} lg={3} className="g-4">
                {standUpData.map((note) => (
                    <Col key={note._id} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title className="bg-primary text-white font-weight-bold text-lg mb-2 card-header">
                                    {note.teamMember}
                                </Card.Title>
                                <Card.Text className="mb-2">Project {note.project}</Card.Text>
                                <Card.Text className="mb-2">{note.workYesterday}</Card.Text>
                                <Card.Text className="mb-2">{note.workToday}</Card.Text>
                                <Card.Text className="mb-0">{note.impediment}</Card.Text>
                                <Card.Footer>
                                    <small className="text-muted">Date: {note.createdOn}</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
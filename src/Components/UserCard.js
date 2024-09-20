import Card from 'react-bootstrap/Card';

function UserCard({el}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
        <Card.Text>
          {el.email}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default UserCard;
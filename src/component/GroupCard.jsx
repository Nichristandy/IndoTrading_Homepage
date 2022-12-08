import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/Assets/Truck.jpg" style={{height : '18rem'}} />
        <Card.Body>
          <Card.Title>Jasa Angkut Barang</Card.Title>
          <Card.Text style={{height : '10rem'}}>
          Jasa Angkut Barang Jabodetabek / Jasa Expedisi Darat Jabodetabek.
        Kami menyediakan jasa expedisi atau jasa angkut barang dengan jalur darat.
        Jumlah tonase dapat disesuaikan dengan ukuran mobil. Dengan maximal kapasitas pengiriman 8 ton.
          </Card.Text>
          <Button variant="outline-dark pull-bottom">Hire</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top height-100 width-100" src="/Assets/cat.jpg" style={{height : '18rem'}} />
        <Card.Body>
          <Card.Title>Jasa Cat Dinding</Card.Title>
          <Card.Text style={{height : '10rem'}}>
            Kami menyediakan jasa untuk memperbarui cat dinding anda yang sudah rusak, ataupun melakukan
            pengecatan kepada gedung baru agar terlihat lebih indah. Harga disesuaikan dengan berapa banyak cat yang digunakan.
          </Card.Text>
          <Button variant="outline-dark">Hire</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/Assets/programmer.jpg" style={{height : '18rem'}} />
        <Card.Body>
          <Card.Title>Developer</Card.Title>
          <Card.Text style={{height : '10rem'}}>
            Pengerjaan dalam mendevelop aplikasi yang tepat waktu, dengan tim ahli dan berpengalaman dan melayani dalam membuat
            aplikasi maupun aplikasi-web.
          </Card.Text>
          <Button variant="outline-dark" color='red'>Hire</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
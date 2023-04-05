import {Col,Container,Row,Card } from "react-bootstrap"
const Video =({videoDetail, mainVideo}) =>{
    console.log(mainVideo)
return <Container onClick={()=>mainVideo(videoDetail)}>
    <Row>
<Col sm={4}>

<Card.Img variant="top"  src={videoDetail.snippet.thumbnails.high.url}/>
</Col>
<Col sm={8}>
    <p>{videoDetail.snippet.title}</p>
</Col>

    </Row>
</Container>

}
export default Video
import { Card } from "react-bootstrap"
const MainVideo=({videoRef})=>{

    if (videoRef===undefined) return <h1>Loading...</h1>

    else{
  
    const videoSrc = `https://www.youtube.com/embed/${videoRef.id.videoId}`
    return <>
    <iframe className="mt-5" height="80%" width="100%" title="VideoTitle" src={videoSrc}/>
        <Card >
{/*         
        <Card.Img src="https://images.unsplash.com/photo-1678842048560-1d8bbc486e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></Card.Img> */}
        
      <Card.Body>
        <Card.Title>{videoRef.snippet.channelTitle}</Card.Title>
        <Card.Text>
        {videoRef.snippet.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </>
    }
}
export default MainVideo
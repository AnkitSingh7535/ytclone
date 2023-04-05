import { useEffect, useState } from "react"
import { Container,Row,Col} from "react-bootstrap"
import youtube from "./api/youtube"
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"
import MainVideo from "./components/MainVideo"


const App = () =>{
const [mainVideo,setMainVideo] = useState(undefined)
const[videos,setvideos] = useState([])
    const   handleSubmit = async (searchTerm)=>{
       
        const response = await youtube.get('search',{
           params:{
               part:'snippet',
               maxResults:5,
               key:'AIzaSyDibB1jE7phth_ARujoqQpiznht-futbug',
               q:searchTerm
           }
    
          
        });
        // console.log(response.data)
        setMainVideo(response.data.items[0])

        setvideos(response.data.items)
      }
    
useEffect(()=>{
handleSubmit('srk')
},[])

   return <Container>
   <SearchBar  onSubmit={handleSubmit}/>
   <Row>
    <Col sm={8}>
        <MainVideo videoRef={mainVideo}/>
    </Col>
    <Col sm={4}>
        <VideoList videoList={videos}  setMainVideo={setMainVideo} />
    </Col>
   </Row>
</Container>
}
export default App
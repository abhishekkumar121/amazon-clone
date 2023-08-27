import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='home'>
        <div className='home_container'>
            <img className="home_image" src="https://media2.fdncms.com/memphisflyer/imager/u/original/8981167/amazon-1200x537.png"
             alt="" />
        
         
         
          <div className='home_row'>
        <Product  id="1"
                      title="The Lean Startup:How Constant innovation"
                      price={29.99}
                      image="https://nutsaboutleadership.files.wordpress.com/2020/08/the-lean-startup.jpg"
                      rating={4} />
            <Product id="2"
                      title="Nivea Deodrant for Men"
                      price={10}
                      image="https://th.bing.com/th/id/OIP.hGT08nJ2M7l4jmMav9Qw9QHaIp?pid=ImgDet&rs=1"
                      rating={3} />
                    
              </div>

        <div className='home_row'>
            <Product id="3"
                      title="Samsung Digital Watch"
                      price={129.99}
                      image="https://i5.walmartimages.com/asr/51bcf0cc-5d01-4e75-bee4-0062e2fa46ae.5500200724701a2bfdb0f722b23f09a6.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
                      rating={4}/>
            <Product id="4"
                      title="Amazon ECHO | Smart Speaker with Alexa"
                      price={99.99}
                      image="https://th.bing.com/th/id/OIP.-FrQKUJhzv39uLfOYeKC2gHaHa?pid=ImgDet&rs=1"
                      rating={4}/>
            <Product id="5"
                      title="Apple Iphone 14 pro"
                      price={629.99}
                      image="https://th.bing.com/th/id/OIP.PyYoIZQs1YVXOO1Oh0b3iwHaHa?pid=ImgDet&rs=1"
                      rating={5}/>

        </div>
        <div className='home_row'>
            <Product id="7"
                      title="Samsung Smart Television"
                      price={929.99}
                      image="https://stg-images.samsung.com/is/image/samsung/my-uhdtv-tu8500-ua50tu8500kxxm-ua--tu----kxxm-221755061?scl=1&fmt=png-alpha"
                      rating={5}/>

        </div>
      
        </div>
      


        
      
    </div>
  )
}

export default Home

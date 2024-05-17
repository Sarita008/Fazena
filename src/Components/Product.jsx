import React from 'react'
import "../Assets/css/Product.css"

const Product = () => {
  return (
    <>
<div className="content">
  <h1  style={{paddingLeft: "50px", textAlign: "center"}}>Top Product</h1>
  <div className='Feature'>
  <ul>
    <li>
        <button>Feature</button>
    </li>

    <li>
        <button>Latest</button>
    </li>

    <li>
        <button>BestSeller</button>
    </li>
  </ul>
  </div>

  <div className="scroll-container" id="scroll-container">
    <div className="card">
    <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64c39efULSS19DR09-32-796_1.jpg?rnd=20200526195200&tr=w-512" alt="logo"/>
      <h2>Jumpsuit</h2>
    </div>

    <div className="card">
    <img src="https://cdn.shopify.com/s/files/1/0681/3296/2546/files/Sharara-with-Short-Tops.jpg" alt="logo"/>
      <h2>Jumpsuit</h2>
    </div>

    <div className="card">
    <img src="https://assets.ajio.com/medias/sys_master/root/20230620/BVTA/6491ea0fd55b7d0c637ce77b/-473Wx593H-463086147-blue-MODEL.jpg" alt="logo"/>
      <h2>One-piece dress</h2>
    </div>
    
    <div className="card">
    <img src="https://images.pexels.com/photos/13652345/pexels-photo-13652345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="logo"/>
      <h2>One Piece</h2>
    </div>

    <div className="card">
    <img src="https://www.prettygarden.com/cdn/shop/products/1000-2_0003_0f6da645-ba36-4bd7-a0cd-c2e4192db766.jpg?v=1667459614" alt="logo"/>
      <h2>One piece</h2> 
    </div>

    <div className="card">
    <img src="https://cdn.shopify.com/s/files/1/0681/3296/2546/files/Sharara-with-Short-Tops.jpg" alt="logo"/>
      <h2>One piece</h2> 
    </div>

    <div className="card">
    <img src="https://assets.ajio.com/medias/sys_master/root/20230628/RqwM/649be796eebac147fc23960c/-473Wx593H-465862417-green-MODEL.jpg" alt="logo"/>
      <h2>One piece</h2> 
    </div>

    <div className="card">
    <img src="https://cdn.shopify.com/s/files/1/0681/3296/2546/files/Sharara-with-Short-Tops.jpg" alt="logo"/>
      <h2>One piece</h2> 
    </div>

  </div>
</div>

    </>
  )
}

export default Product
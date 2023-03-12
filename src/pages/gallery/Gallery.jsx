import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './Gallery.css'

// import images from '../../images/gallery'

const Gallery = () => {

  const galleryLength= 15;
  const images = []

  for(let i = 1; i<=galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  // console.log(images);
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nulla, veniam id possimus earum totam aut eos asperiores maxime architecto.
    </Header>
    <section className="gallery">
      <div className="container gallery-container">
        {
          images.map((image,index)=>{
            return <article key={index}>
              <img src={image} alt={`GalleryImage${index+1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery

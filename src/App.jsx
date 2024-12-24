import React, { useEffect, useState } from 'react'
import Pdfdocument from './Pdfdocument';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import "./App.css";

const App = () => {
  const [slides,setslides] = useState([]);

   useEffect(() => {
     const savedSlides = JSON.parse(localStorage.getItem("slides")) || [];
     setslides(savedSlides);
   }, [])
   
   useEffect(()=>{
    localStorage.setItem("slides", JSON.stringify(slides) );
   },[slides])

   const addslide = () =>{
    setslides([...slides, { text: "", image: "" }])
   }

   const updateslide = (index,updateslide) =>{
    const newSlides = slides.map((slide, i) => (i === index ? updateslide : slide));
    setslides(newSlides);
   }

   const deleteslide = (index) =>{
    const newslides =  slides.filter((_,i) => i !==index);
    setslides(newslides);
   }

  return (
   <div>
      <h1>Carousel Generator with React-PDF</h1>
      <button className="add-slide-button" onClick={addslide}>Add Slide</button>
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <textarea
              placeholder="Enter text"
              value={slide.text}
              onChange={(e) =>
                updateslide(index, { ...slide, text: e.target.value })
              }
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  updateslide(index, { ...slide, image: reader.result });
                };
                reader.readAsDataURL(file);
              }}
            />
            <button className="delete-slide-button" onClick={() => deleteslide(index)}>Delete Slide</button>
          </div>
        ))}
      </div>

      <PDFViewer className="pdf-viewer">
        <Pdfdocument slides={slides} />
      </PDFViewer>

      <PDFDownloadLink
        document={<Pdfdocument slides={slides} />}
        fileName="carousel.pdf"
        className="pdf-download"
      >
        {({ loading }) => (loading ? "Preparing document..." : "Download PDF")}
      </PDFDownloadLink>

   </div>
  )
}

export default App
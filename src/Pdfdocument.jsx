import React from 'react'
import { Document, Page } from "@react-pdf/renderer";
import PdfSlide from './PdfSlide';

const Pdfdocument = ({slides}) => (
    <Document>
      {slides.map((slide, index) => (
        <Page key={index} size="A4">
          <PdfSlide slide={slide} />
        </Page>
      ))}
    </Document>
  );

export default Pdfdocument
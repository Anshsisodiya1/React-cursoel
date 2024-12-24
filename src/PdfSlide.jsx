import React from 'react'
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    slide: {
      width: "90%",
      height: "90%",
      border: "1px solid #000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontSize: 20,
    },
    text: {
      margin: 10,
      fontSize: 18,
      textAlign: "center",
    },
  });

const PdfSlide = ({slide}) => (
    <View style={styles.slide}>
      {slide.image && (
        <View>
          <Text style={{ marginBottom: 10 }}>Image: {slide.image}</Text>
        </View>
      )}
      <Text style={styles.text}>{slide.text}</Text>
    </View>
  );

export default PdfSlide
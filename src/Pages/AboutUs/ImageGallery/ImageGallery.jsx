import React, { useState } from "react";
import "./ImageGallery.css";
import Image1 from "../../../assets/gallery1.jpg";
import Image2 from "../../../assets/gallery2.jpg";
import Image3 from "../../../assets/gallery3.jpg";
import Image4 from "../../../assets/gallery4.jpg";
import Image5 from "../../../assets/gallery5.jpg";
import Image6 from "../../../assets/gallery6.jpg";
import Image7 from "../../../assets/gallery7.jpg";
import Image8 from "../../../assets/gallery8.jpg";

const initialImages = [
  { src: Image1, title: "Image 1", description: "Image One Description" },
  { src: Image2, title: "Image 2", description: "Image Two Description" },
  { src: Image3, title: "Image 3", description: "Image Three Description" },
  { src: Image4, title: "Image 4", description: "Image Four Description" },
];

const allImages = [
  { src: Image1, title: "Image 1", description: "Image One Description" },
  { src: Image2, title: "Image 2", description: "Image Two Description" },
  { src: Image3, title: "Image 3", description: "Image Three Description" },
  { src: Image4, title: "Image 4", description: "Image Four Description" },
  { src: Image5, title: "Image 5", description: "Image Five Description" },
  { src: Image6, title: "Image 6", description: "Image Six Description" },
  { src: Image7, title: "Image 7", description: "Image Seven Description" },
  { src: Image8, title: "Image 8", description: "Image Eight Description" },
];

const ImageGallery = () => {
  const [images, setImages] = useState(initialImages);
  const [areAllImagesVisible, setAreAllImagesVisible] = useState(false);

  const toggleImages = () => {
    if (areAllImagesVisible) {
      setImages(initialImages);
    } else {
      setImages(allImages);
    }
    setAreAllImagesVisible(!areAllImagesVisible);
  };

  return (
    <div className="gallery">
      <h1 className="gallery-title">Image Gallery</h1>
      <div className="gallery-header">
        <h2 className="gallery-subtitle">Explore Our Images</h2>
        <p className="gallery-description">
          A collection of stunning visuals showcasing our projects and
          achievements.
        </p>
      </div>
      <div className="gallery-members">
        {images.map((image, index) => (
          <div className="gallery_img_container" key={index}>
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="overlay_gallery">
              <div className="text_gallery">
                <h3 className="image-title">{image.title}</h3>
                <h4 className="image-description">{image.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="add-more-button" onClick={toggleImages}>
        {areAllImagesVisible ? "Minimize" : "Add More"}
      </button>
    </div>
  );
};

export default ImageGallery;

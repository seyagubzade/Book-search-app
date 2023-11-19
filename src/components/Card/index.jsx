import React from "react";
import "./index.css";

const Card = ({ item, setIsModalOpen, isModalOpen, setModalItem }) => {
  const {
    volumeInfo: {
      title,
      authors,
      publishedDate,
      readingModes,
      maturityRating,
      allowAnonLogging,
      contentVersion,
      imageLinks,
      previewLink,
      infoLink,
      canonicalVolumeLink,
    },
  } = item;

  const thumbnailSrc =
    imageLinks?.thumbnail ||
    imageLinks?.smallThumbnail ||
    "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  return (
    <div className="card">
      <img
        style={{ width: "128px", height: "192px", objectFit: "cover" }}
        src={thumbnailSrc}
        alt={title}
      />
      <h5 className="card-title">{title}</h5>
      <h6 className="card-author">
        {authors && authors.length > 0 ? authors.join(", ") : "Unknown Author"}
      </h6>
      <p>Published Date: {publishedDate}</p>
      <br />
      <a
        href={previewLink}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link text-left"
      >
        Preview
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className=" open-modal text-right"
        onClick={()=>{
            setModalItem(item)
            setIsModalOpen(!isModalOpen)
        }}
      >
        Details
      </a>
    </div>
  );
};

export default Card;

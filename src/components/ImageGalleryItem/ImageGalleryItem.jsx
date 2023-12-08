import React from 'react'

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags, handleShowModal }) => {
  return (
    <div>
      <img src={webformatURL} alt={tags} loading="lazy" onClick={() => handleShowModal(largeImageURL)} />
    </div>
  )
}

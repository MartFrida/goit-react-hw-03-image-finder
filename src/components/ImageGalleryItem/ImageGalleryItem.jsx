import React from 'react'

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <div>
      <img src={webformatURL} alt={tags} loading="lazy" />
    </div>
  )
}

import clsx from 'clsx'
import s from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'

export const ImageGallery = () => {
  return (
    <div className={clsx(s.ImageGallery)}>
      <ImageGalleryItem />
    </div>

  )
}

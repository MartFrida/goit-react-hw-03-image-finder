import clsx from 'clsx'
import s from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'

export const ImageGallery = ({ hits }) => {
  return (
    <div className={clsx(s.ImageGallery)}>
      {hits.map(item =>
        <ImageGalleryItem key={item.id} {...item} />
      )}
    </div>
  )
}

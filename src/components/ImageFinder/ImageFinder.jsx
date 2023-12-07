import React from 'react'
import { Button } from 'components/Button/Button'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Modal } from 'components/Modal/Modal'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { fetchPosts } from 'services/api'

export class ImageFinder extends React.Component {
  state = {
    hits: [],
    loading: false,
    error: null,
  }

  async componentDidMount() {
    try {
      const { hits } = await fetchPosts()
      this.setState({ hits })
    } catch (error) {
      console.log(error.message)
    }

  }

  render() {
    const { hits } = this.state
    return (<>
      <Searchbar />
      <ImageGallery hits={hits} />
      <Button />
      <Modal />
    </>)
  }
}

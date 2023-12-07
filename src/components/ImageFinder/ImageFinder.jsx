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
    page: 1,
    searchQuery: '',
  }

  async componentDidMount() {
    try {
      const { hits } = await fetchPosts()
      this.setState({ hits })
    } catch (error) {
      console.log(error.message)
    }
  }

  handleSetSearchQuery = (text) => {
    this.setState({ searchQuery: text, hits: [], page: 1 })
  }

  async componentDidUpdate(_, prevState) {
    if (!this.state.searchQuery && prevState.page !== this.state.page) {
      try {
        const { hits } = await fetchPosts({ page: this.state.page })
        this.setState(prevState => ({ hits: [...prevState.hits, ...hits] }))
      } catch (error) {
        console.log(error.message)
      }
    }

    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      try {
        const { hits } = await fetchPosts({ q: this.state.searchQuery, page: this.state.page })
        this.setState(prevState => ({ hits: [...prevState.hits, ...hits] }))
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }

  render() {
    const { hits } = this.state
    return (<>
      <Searchbar handleSetSearchQuery={this.handleSetSearchQuery} />
      <ImageGallery hits={hits} />
      {/* <Button onClick={this.handleLoadMore} /> */}
      <button onClick={this.handleLoadMore}> button load temp </button>
      <Modal />
    </>)
  }
}


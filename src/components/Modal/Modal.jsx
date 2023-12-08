import clsx from 'clsx'
import s from './Modal.module.css'
import React from 'react'

export class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.handleCloseModal()
    }
  }

  clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      this.props.handleCloseModal()
    }
  }

  render() {
    const { children, handleCloseModal } = this.props
    return (
      <div className={clsx(s.overlay)} onClick={this.clickOutside}>
        <div className={clsx(s.modal)}>
          {children}
          <button onClick={handleCloseModal}>X</button>
        </div>
      </div>
    )
  }
}

import React from 'react'
import { MessagesMenu } from '../../../../styles/dropdown-menu'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const MessageDropDown = () => {
  return (
    <MessagesMenu hideArrow>
     <div className="slot">
        <i className="far fa-comments"></i>
        <span className="badge badge-danger navbar-badge">3</span>
     </div>
     <div slot="body">
        <Link to="/" className="dropdown-item">
          <div className="media">
            <Image
              src="../../../../assets/icons/facebook.png"
              alt="User Avatar"
              width={50}
              height={50}
              rounded
              className="mr-2"
            />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                Brad Diesel
                <span className="float-right text-sm text-danger">
                  <i className="fas fa-star" />
                </span>
              </h3>
              <p className="text-sm">Call me whenever you can...</p>
              <p className="text-sm text-muted">
                <i className="far fa-clock mr-1" />
                <span>
                  Quantity: 30
                </span>
              </p>
            </div>
          </div>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <div className="media">
            <Image
              src="../../../../assets/icons/facebook.png"
              alt="User Avatar"
              width={50}
              height={50}
              rounded
              className="mr-2"
            />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                John Pierce
                <span className="float-right text-sm text-muted">
                  <i className="fas fa-star" />
                </span>
              </h3>
              <p className="text-sm">I got your message bro</p>
              <p className="text-sm text-muted">
                <i className="far fa-clock mr-1" />
                <span>
                  Quantity 3
                </span>
              </p>
            </div>
          </div>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <div className="media">
            <Image
              src="/img/default-profile.png"
              alt="User Avatar"
              width={50}
              height={50}
              rounded
              className="mr-2"
            />
            <div className="media-body">
              <h3 className="dropdown-item-title">
                Nora Silvester
                <span className="float-right text-sm text-warning">
                  <i className="fas fa-star" />
                </span>
              </h3>
              <p className="text-sm">The subject goes here</p>
              <p className="text-sm text-muted">
                <i className="far fa-clock mr-1" />
                <span>
                 Quantity: 5
                </span>
              </p>
            </div>
          </div>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item dropdown-footer">
          See All
        </Link>
      </div>
    </MessagesMenu>
  )
}

export default MessageDropDown

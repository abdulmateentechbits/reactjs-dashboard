import React from 'react'
import { Link } from 'react-router-dom';
import { NotificationMenu } from '../../../../styles/dropdown-menu';

const NotificationDropdown = () => {
  return (
    <NotificationMenu hideArrow>
      <div slot="head">
        <i className="far fa-bell" />
        <span className="badge badge-warning navbar-badge">15</span>
      </div>
      <div slot="body">
        <span className="dropdown-item dropdown-header">
           15
         </span>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-envelope mr-2" />
          <span>
            5
          </span>
          <span className="float-right text-muted text-sm">
           5
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-users mr-2" />
          <span>
            12
          </span>
          <span className="float-right text-muted text-sm">
            14
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-file mr-2" />
          <span>
            6
          </span>
          <span className="float-right text-muted text-sm">
            23
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item dropdown-footer">
          See All
        </Link>
      </div>
    </NotificationMenu>
  );
}

export default NotificationDropdown

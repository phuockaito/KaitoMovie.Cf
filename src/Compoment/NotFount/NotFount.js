import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css';
export class NotFount extends Component {
  render() {
    return (
      <div className="grounp-not-fount">
        <h1>Trang này không tồn tại</h1>
        <Link to="/">
          Về trang chủ
        </Link>
      </div>
    )
  }
}

export default NotFount

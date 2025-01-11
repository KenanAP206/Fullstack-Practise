import React from 'react'
import './Blog.css'
function index() {
  return (
    <div>
    <section id='blog'>
    <div className="sec-head">
        <h2>Latest News from our Blog</h2>
        <p>Who are in extremely love with eco friendly system.</p>
    </div>
    <div className="blog-cards">
      <div className="blog-card">
        <img srcSet="https://preview.colorlib.com/theme/immigration/img/b1.jpg.webp" alt="" />
        <div className="b-card-spans">
          <span>Travel</span>
          <span>Life style</span>
        </div>
        <h5>Portable latest Fashion for young women</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <h6>31st January, 2018</h6>
      </div>
      <div className="blog-card">
        <img srcSet="https://preview.colorlib.com/theme/immigration/img/b2.jpg.webp" alt="" />
        <div className="b-card-spans">
          <span>Travel</span>
          <span>Life style</span>
        </div>
        <h5>Portable latest Fashion for young women</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <h6>31st January, 2018</h6>
      </div>
    </div>
    </section>
    </div>
  )
}

export default index

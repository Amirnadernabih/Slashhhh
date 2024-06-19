import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
    
   <footer className="footer bg-dark text-light pt-3">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5>About Us</h5>
        <p>Welcome to Slash., where innovation meets accessibility in the realm of local commerce. As a pioneering force in the market, we present an unparalleled app designed to seamlessly integrate Egypt's diverse range of local brands, offering a refined shopping experience.</p>
      </div>
      <div className="col-md-3">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li><Link href="home">Home</Link></li>
          <li><Link href="create">Create a new Blog</Link></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Contact</h5>
        <ul className="list-unstyled">
          <li>Email: slash-eg.com</li>
          <li>Phone: +201023790292</li>
          <li>Address: DownTown, Cairo, Egypt</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-12 text-center">
        <p>© 2024 Slash Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>




    </>
  )
}

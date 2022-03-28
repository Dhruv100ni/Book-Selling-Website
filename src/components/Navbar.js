import React from 'react'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <>
        <section className="navbar">
            <a>Online Store</a>
            <a href="/about">About Us</a>
            <a href="/category">Category</a>
            <a href="/Faq">FAQs</a>
            <a href="/contact">Contact Us</a>
            <a href="/WishList">Wish List</a>
            <a href="/ShoppingCart">Shopping Cart</a>
            <a href="/MyAccount">My Account</a>
        </section> <br/>

        <section className="navbar">
            <a>Online Store</a>
            <span>B</span>ook
            <span>C</span>lub
        </section>
    </>
  )
}

export default Navbar


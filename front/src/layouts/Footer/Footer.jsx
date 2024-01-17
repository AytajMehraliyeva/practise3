import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
  <footer>
    <div className='footerDiv'>

<div className='Tasty'>
  <h3>Tasty</h3>
  <p>Far far away, behind the word <br />mountains, far from the countries <br /> Vokalia and Consonantia, there <br /> live the blind texts.</p>
</div>

<div className='Opening'>
  <h3>Opening Hours</h3>
  <ul>
    <li><p>Monday: </p> 08: -22</li>
    <li><p>Tuesday: </p> 08: -22</li>
    <li><p>Wednesday: </p> 08: -22</li>
    <li><p>Thursday: </p> 08: -22</li>
    <li><p>Friday: </p> 08: -22</li>
    <li><p>Saturday: </p> 08: -22</li>
    <li><p>Sunday: </p> 08: -22</li>
  </ul>
</div>

<div className='contact'>
  <h3>Contact Information</h3>
  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
  <p>+ 1235 2355 98</p>
  <p>info@yoursite.com</p>
  <p>email@email.com</p>
</div>

<div className='news'>
  <h3>Newsletter</h3>
  <p>Far far away, behind the word <br /> mountains, far from the countries.</p>
  <input type="text" placeholder='Subscribe' />
</div>
    </div>
    <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
  </footer>
  )
}

export default Footer
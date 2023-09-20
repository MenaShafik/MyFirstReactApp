import React, { Component } from 'react'
import './Circle.css'
export class Circle extends Component {
  render() {
    return (
      <>
      <div className="mt-4"></div>
        <div id="circle_shape"></div>
        <div className="mt-4"></div>
        <div className="pro_shape">
            Pro
        </div>
        <h1 className="text-center">Mina Shafik</h1>
        <p className="text-center col-3 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptas dolore! Consequatur, culpa aut voluptas reiciendis.</p>
        <div className="mt-4"></div>
       <div className="col-3 value">
       <div className="message_shape col-4">
            Message
        </div>
 <div className="contact_shape col-4">
            Contact
        </div></div>
      </>
    )
  }
}

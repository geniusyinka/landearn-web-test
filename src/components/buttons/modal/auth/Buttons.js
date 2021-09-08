import React from 'react'
import fb from '../../../../assets/images/fb.png'
import google from '../../../../assets/images/google.png'
import linkedin from '../../../../assets/images/linkedin.png'
import './index.css'

export function SocialLogins(props) {
  return (
    <div>
      <button className='social'>
        <img src={fb} alt="" /> Continue with Facebook
      </button>
      <button className='social'>
        <img src={google} alt="" /> Continue with Google
      </button>
      <button className='social'>
        <img src={linkedin} alt="" /> Continue with Linkedin
      </button>
    </div>
  )
}

export function Btn(props) {
  return (
    <div>
      <button className='continue'> {props.title} </button>
    </div>
  )
}

import React from 'react'
import '../index.css'
import { Btn, SocialLogins } from './Buttons'

function LoginForm(props) {
  const p = {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    margin: '10px 0 20px',
  }
  return (
    <div>
      <div className="auth-div">
        <h1>Login with this simple form</h1>
        <br />
        <input
          type="text"
          name="buyPrice"
          placeholder="Email"
          className="auth-input"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Password"
          className="auth-input"
        />
        <Btn title='Login'/>
        <p
          style={{
            marginTop: '10px',
            width: '100%',
            textAlign: 'center',
            borderBottom: '1px solid rgb(0 0 0 / 16%)',
            lineHeight: '0.1em',
            margin: '25px 0',
            fontSize: '12px',
          }}
        >
          <span
            style={{
              background: '#fff',
              padding: '0 10px',
            }}
          >
            or
          </span>
        </p>
        <SocialLogins />
      </div>
    </div>
  )
}

export default LoginForm

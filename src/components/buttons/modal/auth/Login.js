import React from 'react'
import '../index.css'
import SocialLogins from './SocialLogins'

function LoginForm(props) {

  const buttonStyle = {
    backgroundColor: '#3B7E62',
    padding: '12px',
    width: '100%',
    marginTop: '12px',
    marginBottom: '12px',
    borderRadius: '8px',
    color: 'white',
    border: 0,
  }

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
        <input
          type="text"
          name="quantity"
          placeholder="Referral Code (optional)"
          className="auth-input" 
        />
        <button style={buttonStyle}> Continue </button>
        <p
          style={{
            marginTop: '10px',
            width: '100%',
            textAlign: 'center',
            borderBottom: '1px solid rgb(0 0 0 / 16%)',
            lineHeight: '0.1em',
            margin: '10px 0 10px',
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
        <SocialLogins/>
      </div>
    </div>
  )
}

export default LoginForm

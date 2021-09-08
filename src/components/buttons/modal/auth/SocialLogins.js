import React from 'react'

function SocialLogins(props) {
    const socialButtons = {
        backgroundColor: 'white',
        padding: '12px',
        width: '100%',
        marginTop: '12px',
        border: '1px solid rgb(0 0 0 / 20%)',
        borderRadius: '8px',
        color: 'black',
        cursor: 'pointer',
        // display: 'flex',
        // justifyContent: 'space-between'
      }

  return (
    <div>
      <button style={socialButtons}> Continue with Facebook</button>
      <button style={socialButtons}> Continue with Google</button>
      <button style={socialButtons}> Continue with Linkedin</button>
    </div>
  )
}

export default SocialLogins

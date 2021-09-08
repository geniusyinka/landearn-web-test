import React, { useState, useEffect } from 'react'
import Login from './auth/Login'
import Signup from './auth/Signup'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import '../roundedge/secondary/index.css'
import './index.css'

function AuthModal() {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <Router>
      <div className="x31616">
        <Link to="/login">
          <div
            className=" button-i316164470-SbgD5E"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Login
          </div>
        </Link>
      </div>
      {showModal ? (
        <>
          <div className="modal">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" modal-box">
                {/*header*/}
                <div className="modal-header">
                  <div className="auth-btn">
                    <div className="modal-links">
                      <Link to="/login">Login</Link>
                    </div>
                    <div className="modal-links signup">
                      <Link to="/signup">Sign up</Link>
                    </div>
                  </div>
                  <button
                    className="modal-close"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="modal-close-x">×</span>
                  </button>
                </div>
                {/*body*/}
                <form>
                  <Switch>
                    {/* <LoginForm/> */}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                  </Switch>
                </form>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </Router>
  )
}
export default AuthModal;

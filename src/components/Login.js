import React from 'react'
import { signInWithGoogle } from "../services/firebase"

function Login() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><h2>Logo</h2></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-info text-light " onClick={signInWithGoogle}>
              Sign in with google
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Login

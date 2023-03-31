import React, { Component } from 'react'
import { auth } from '../services/firebase'

export default class NewHome extends Component {
  render() {
    return (
      <div>
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
                <button class="btn btn-danger text-light " style={{ width: "100px", height: "40px" }} onClick={() => auth.signOut()}>Sign out</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

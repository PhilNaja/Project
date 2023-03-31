import React from 'react';

import { auth } from '../services/firebase'

const Home = ({ user }) => {
  return (
    <div className='container-fluid' color='success'>
      <div className='row mt-2 mb-2' color='success'>
        <div className='col-1'>
        <a href='www.google.com'>Go</a>
        </div>
        <div className='col-8 mb-2'>
          <img src='https://cdn.discordapp.com/attachments/1068101899712208996/1078367572774375545/icon_13.png' style={{ width: "150px", height: "40px" }} />
        </div>
        <div className='col-3'>
          <button class="btn btn-danger text-light " style={{ width: "100px", height: "40px" }} onClick={() => auth.signOut()}>Sign out</button>

        </div>
        <hr />
      </div>
      <div className="row  mt-5">
        <div className='col-3'>
        </div>
        <div className='col-7 mb-2'>
          <div className="row">
          <div className='col-4'>
          <img src={user.photoURL} style={{ width: "200px", height: "200px" }}/>
        </div>
        <div className='col'>
        <h2>Name : <span></span>{user.displayName}</h2>
          <h2>Email : <span></span>{user.email}</h2>
          <h5>UID : <span></span>{user.uid}</h5>
        </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Home;
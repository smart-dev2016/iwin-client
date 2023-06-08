import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section id="error-section">
      <div class="overlay pb-120 pt-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="main-content pt-120 pb-120 text-center">
                <h3>Whoops..</h3>
                <h5>page not found</h5>
                <Link to="/home" className="cmn-btn">Go Back!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
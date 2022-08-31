import React from 'react';
import './Customize.css'
import Navbar from '../../components/navigation/Navbar';

const Customize = () => {
  return (
    <>
      <Navbar />
      <section className='main-section'>
        <div className='container'>
          <div className='row'>

            <div className='col-12 co-sm-12 col-md-6 col-lg-4 m-auto'>
              <label className='form-label mt-5'>Select Zone:</label>
              <select class="form-select form-select-sm">
                <option selected>View More</option>
                <option value="1">Zone 1</option>
                <option value="2">Zone 2</option>
                <option value="3">Zone 3</option>
              </select>
            </div>

            <div className='col-12 co-sm-12 col-md-6 col-lg-4 m-auto'>
              <label className='form-label mt-5'>Select Circle:</label>
              <select class="form-select form-select-sm">
                <option selected>View More</option>
                <option value="1">Circle 1</option>
                <option value="2">Circle 2</option>
                <option value="3">Circle 3</option>
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 co-sm-12 col-md-6 col-lg-4 m-auto'>
              <label className='form-label mt-5'>Select Division:</label>
              <select class="form-select form-select-sm">
                <option selected>View More</option>
                <option value="1">Division 1</option>
                <option value="2">Division 2</option>
                <option value="3">Division 3</option>
              </select>
            </div>

            <div className='col-12 co-sm-12 col-md-6 col-lg-4 m-auto'>
              <label className='form-label mt-5'>Select Sub Division:</label>
              <select class="form-select form-select-sm">
                <option selected>View More</option>
                <option value="1">Sub Division 1</option>
                <option value="2">Sub Division 2</option>
                <option value="3">Sub Division 3</option>
              </select>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Customize;

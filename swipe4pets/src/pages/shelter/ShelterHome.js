import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar.jsx";
import image_50398721 from "./tmp_shelter_photos/image_50398721.JPG"
import image_50450177 from "./tmp_shelter_photos/image_50450177.JPG"
import image_67185409 from "./tmp_shelter_photos/image_67185409.JPG"

export default function ShelterHome() {
  return (
    <div>
      <NavBar />
      <div class='container'>
        <div class='row'>
          <div class='col text-center custom-select mb-2'>
            <h1>Shelter Home</h1>
          </div>
        </div>
        <div class='row'>
          <div class='col text-center custom-select mb-2'>
            <h3>Shelter_Name's Pet Profiles</h3>
          </div>
        </div>
        <div class='row'>
          <div class='col text-center custom-select mb-2'>
            <img class='img-fluid' src={image_50398721} alt='lala' />
            <h5 class='mt-2'>Molly</h5>
            <div class='col text-center'>
              <Link to='/viewProfile'>
                <button class='btn btn-secondary btn-sm mx-2'>View</button>
              </Link>
              <Link to='/manageProfile'>
                <button class='btn btn-secondary btn-sm mx-2'>Edit</button>
              </Link>
              <Link to='/deleteAlert'>
                <button
                  className='btn btn-secondary btn-sm mx-2'
                  id='deleteBtn'
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
          <div class='col text-center custom-select mb-2'>
            <img class='img-fluid' src={image_50450177} alt='lala' />
            <h5 class='mt-2'>Prince</h5>
            <div class='col text-center custom-select mb-2'>
              <Link to='/viewProfile'>
                <button class='btn btn-secondary btn-sm mx-2'>View</button>
              </Link>
              <Link to='/manageProfile'>
                <button className='btn btn-secondary btn-sm mx-2'>Edit</button>
              </Link>
              <Link to='/deleteAlert'>
                <button
                  className='btn btn-secondary btn-sm mx-2'
                  id='deleteBtn'
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
          <div class='col text-center custom-select mb-2'>
            <img class='img-fluid' src={image_67185409} alt='lala' />
            <h5 class='mt-2'>Charlie</h5>
            <div class='col text-center'>
              <Link to='/viewProfile'>
                <button class='btn btn-secondary btn-sm mx-2'>View</button>
              </Link>
              <Link to='/manageProfile'>
                <button className='btn btn-secondary btn-sm mx-2'>Edit</button>
              </Link>
              <Link to='/deleteAlert'>
                <button
                  className='btn btn-secondary btn-sm mx-2'
                  id='deleteBtn'
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col text-center custom-select mb-2'>
            <a href='CreateProfile'>
              <button className='btn btn-primary mx-2 mt-4'>
                Create new pet profile
              </button>
            </a>
            <a href='ManageShelterAccount'>
              <button className='btn btn-primary mx-2 mt-4'>
                Manage account
              </button>
            </a>
            <a href='Login'>
              <button className='btn btn-primary mx-2 mt-4'>Log out</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

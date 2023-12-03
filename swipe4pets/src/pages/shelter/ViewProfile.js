import React from "react";
import NavBar from "../../Components/NavBar.jsx";
import image_67185409 from "./tmp_shelter_photos/image_67185409.JPG"

const ViewProfile = () => {
  return (
    <div>
      <NavBar />
      <div class='container'>
        <div class='row'>
          <div class='col text-center custom-select mb-2 mt-2'>
            <h1>Charlie</h1>
          </div>
        </div>
        <div class='row'>
          <div class='col-sm-7 text-center custom-select mb-2'>
            <img class='thumbnail img-fluid' src={image_67185409} alt='tmp_pic' />
          </div>
          <div class='col'>
            <h2>Availability: Available</h2>
            <h2>Species: Cat</h2>
            <h2>Breed: Tabby</h2>
            <h2>Age: 3 years</h2>
            <h2>
              Description: Charlie is a good cat who enjoys catnip and cuddles.
            </h2>
            <ul class='list-group'>
              <li class='list-group-item'>Good with other animals</li>
              <li class='list-group-item'>Good with children</li>
            </ul>
            <a href='ShelterHome'>
              <button className='btn btn-primary mx-2 mt-4'>Back</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;

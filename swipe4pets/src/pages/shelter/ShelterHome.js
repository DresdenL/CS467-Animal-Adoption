import React from "react";
import IMG_9432  from './IMG_9432.jpeg';


const ShelterHome = () => {

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <h1>Shelter Home</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <h3>Pet Profiles</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center mt-40">
                        <img class="img-fluid" src={IMG_9432} alt="lala"/>
                        <h5>[Pet Name 1]</h5>
                        <div class="col text-center mt-40">
                            <button className="btn btn-secondary">View/Edit</button>
                            <button className="btn btn-secondary">Delete</button>
                        </div>
                    </div>
                    <div class="col text-center">
                        <img class="img-fluid" src={IMG_9432} alt="lala"/>
                        <h5>[Pet Name 2]</h5>
                        <div class="col text-center">
                            <button className="btn btn-secondary">View/Edit</button>
                            <button className="btn btn-secondary">Delete</button>
                        </div>
                    </div>
                    <div class="col text-center">
                        <img class="img-fluid" src={IMG_9432} alt="lala"/>
                        <h5>[Pet Name 3]</h5>
                        <div class="col text-center">
                            <button className="btn btn-secondary">View/Edit</button>
                            <button className="btn btn-secondary">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <a href="CreateProfile">
                            <button className="btn btn-primary">Create new pet profile</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShelterHome;
import React from "react";


export default function DeleteAlert() {
  return (
    <div class="col-md-4 mb-3 mt-5 offset-md-4">
      <div class="alert alert-danger d-block text-center center-block" role="alert">
        You are about to delete this animal's profile. Are you sure you want to delete? Click <a href="/ShelterHome" class="alert-link">here</a> to confirm deletion or click <a href="/ShelterHome" class="alert-link">here</a> to go back.
      </div>
    </div>
  );
};

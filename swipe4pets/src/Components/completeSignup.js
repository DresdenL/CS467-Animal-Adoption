import React, {useState} from 'react';
import ProgressBar from './progressBar';
import { Link } from 'react-router-dom';

function CompleteSignup({accountType}) {

    const whichLink = () => {
        if (accountType === 0) {
            return <Link to='/ShelterHome'><button>Continue</button></Link>;
        }
        else {
            return <Link to='/AdopterHome'><button>Continue</button></Link>;
        }

    }

    return(
        <>
        <ProgressBar step={3}></ProgressBar>
          <h1>Complete!</h1>
          {whichLink()}
        </>
    );
}

export default CompleteSignup;
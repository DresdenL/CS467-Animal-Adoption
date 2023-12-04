import React, {useEffect} from 'react';

function ProgressBar({step}) {

    let showStep = (step) => {
        let steps = document.getElementsByClassName("step1");

        if (step == 0) {
            steps[0].style.opacity = 1;
            steps[0].style.borderWidth = "2px";
            steps[0].style.borderStyle = "solid";
            steps[0].style.borderColor = "#392F5A";
        } else if (step == 1) {
            steps[1].style.opacity = 1;
            steps[1].style.borderWidth = "2px";
            steps[1].style.borderStyle = "solid";
            steps[1].style.borderColor = "#392F5A";
            steps[0].style.opacity = 1;
            steps[0].style.backgroundColor = "#392F5A";
            steps[0].style.boxShadow = "none";
        } else if (step == 2) {
            steps[2].style.opacity = 1;
            steps[2].style.borderWidth = "2px";
            steps[2].style.borderStyle = "solid";
            steps[2].style.borderColor = "#392F5A";
            steps[1].style.opacity = 1;
            steps[1].style.backgroundColor = "#392F5A";
            steps[0].style.opacity = 1;
            steps[0].style.backgroundColor = "#392F5A";
        } else {
            steps[2].style.opacity = 1;
            steps[1].style.opacity = 1;
            steps[0].style.opacity = 1;
            steps[2].style.backgroundColor = "#392F5A";
            steps[1].style.backgroundColor = "#392F5A";
            steps[0].style.backgroundColor = "#392F5A";
        }
    }

    useEffect(() => {
        showStep(step);
      });
 
    
    return(
        <>
        <div class="center">
            <span class = "step1"></span>
            <span class = "step1"></span>
            <span class = "step1"></span>
        </div>
        </>
    )
}


export default ProgressBar
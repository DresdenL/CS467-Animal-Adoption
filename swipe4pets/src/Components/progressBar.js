import React, {useEffect} from 'react';

function ProgressBar({step}) {

    let showStep = (step) => {
        let steps = document.getElementsByClassName("step");

        if (step == 0) {
            steps[0].style.opacity = 1;
        } else if (step == 1) {
            steps[1].style.opacity = 1;
            steps[0].style.backgroundColor = "#746AB0";
        } else if (step == 2) {
            steps[2].style.opacity = 1;
            steps[1].style.backgroundColor = "#746AB0";
            steps[0].style.backgroundColor = "#746AB0";
        } else {
            steps[2].style.backgroundColor = "#746AB0";
            steps[1].style.backgroundColor = "#746AB0";
            steps[0].style.backgroundColor = "#746AB0";
        }
    }

    useEffect(() => {
        showStep(step);
      });
 
    
    return(
        <>
        <div class="center">
            <span class = "step"></span>
            <span class = "step"></span>
            <span class = "step"></span>
        </div>
        </>
    )
}


export default ProgressBar
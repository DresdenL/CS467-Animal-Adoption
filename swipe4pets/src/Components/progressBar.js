import React, {useEffect} from 'react';

function ProgressBar({step}) {

    let showStep = (step) => {
        let steps = document.getElementsByClassName("step1");

        if (step == 0) {
            steps[0].style.opacity = 1;
            steps[0].style.border = "thick solid black";
        } else if (step == 1) {
            steps[1].style.opacity = 1;
            steps[1].style.border = "thick solid black";
            steps[0].style.opacity = 1;
            steps[0].style.backgroundColor = "#746AB0";
        } else if (step == 2) {
            steps[2].style.opacity = 1;
            steps[2].style.border = "thick solid black";
            steps[1].style.opacity = 1;
            steps[1].style.backgroundColor = "#746AB0";
            steps[0].style.opacity = 1;
            steps[0].style.backgroundColor = "#746AB0";
        } else {
            steps[2].style.opacity = 1;
            steps[1].style.opacity = 1;
            steps[0].style.opacity = 1;
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
            <span class = "step1"></span>
            <span class = "step1"></span>
            <span class = "step1"></span>
        </div>
        </>
    )
}


export default ProgressBar
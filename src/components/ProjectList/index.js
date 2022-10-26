import React from "react";

function ProjectList() {
  return (
    <section className="card">
      <h1 id="projects">Projects</h1>
      <div class="container">
        <a href="https://xunvyre.github.io/project-sleepSpace/"></a>
        <img
          src="https://github.com/Hickups789/project-sleepSpace/blob/main/assets/images/screenshot.jpg"
          alt="sleepSpace"
        ></img>
        <div class="text-block">
          <h4>sleepSpace</h4>
        </div>
      </div>
      <div class="container">
        <a href="https://hickups789.github.io/Work-Day-scheduler/"></a>
        <img src="https://user-images.githubusercontent.com/105450365/179094475-b050c60b-af47-4462-aef2-02cb83f643ec.png" alt="Work-Day-Scheduler"></img>
        <div class="text-block">
          <h4>Work Day Scheduler</h4>
        </div>
      </div>
      <div class="container">
        <a href="https://hickups789.github.io/Weather-Dashboard/"></a>
        <img src="https://user-images.githubusercontent.com/105450365/180352775-564f6aa7-cbfb-4054-a6a1-4546ca56c76c.png" alt="Weather-Dashboard"></img>
        <div class="text-block">
          <h4>Weather Dashboard</h4>
        </div>
      </div>
      <div class="container">
        <a href="https://work-it-out-project.herokuapp.com/"></a>
        <img src="https://user-images.githubusercontent.com/105450365/191881312-c0bf8ed7-26ed-4587-87f6-b4bfc2cad8df.png" alt="Work-it-out"></img>
        <div class="text-block">
          <h4>Work It Out</h4>
        </div>
      </div>
      <div class="container">
        <a href="https://hickups789.github.io/Web-APIs-challenge-Code-Quiz/"></a>
        <img src="https://user-images.githubusercontent.com/105450365/178163534-9d95d6ec-1f10-4d60-b933-ea3b7e1c9c4a.png" alt="Coding-Quiz"></img>
        <div class="text-block">
          <h4>Coding Quiz</h4>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;

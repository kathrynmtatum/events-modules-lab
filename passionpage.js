

fetch("data.json").then(response => {
  return response.json();
})
.then(data => {
  console.log(data, "Data");
  
  renderMainPage(data)
  })

function renderMainPage(data) {
  document.querySelector('.containerprojects').innerHTML = `
      <div class="col-8">
        <br /><br />
        <h1 class="animate__animated animate__infinite animate__rubberBand animate__delay-2s">Projects</h1>
        </div>
        ${renderProjects(data.projects)}
    `;
}

function renderProjects(projects){
    console.log(projects, "Projects")
    return projects.map(d => `
      <div>
        <div>
          <br /><br />
          <span class="highlight">${d.title}</strong></a>
          
    }
  
  /*
    <div class="row">
  <div class="col-8">
    <span class="highlight">${(projects.title)}</span>
    <br />
    <br />${(projects.description)}
  </div>
    <div class="col-4">
    <br /> 
    <br /> <img src = "https://cdn.glitch.com/ab621e97-0054-4a80-9f77-cec959e02051%2F2021-02-07.png?v=1612731822076" class="passionpic" width="100%" height="100%">
    <br />
    <br />
  </div>
  <div class="col-6">
    <br />${(projects.words)}<br />
    <br />${(projects.experiences)}<br />
    <br />
    <span class="linkedsite">Visit the Passion Brainstorm site <a href="https://passionbrainstorm.glitch.me/">here!</a></span>
  </div>
  <div class="col-4">
    <br />
    <br> <img src = "https://cdn.glitch.com/ab621e97-0054-4a80-9f77-cec959e02051%2F2021-02-07%20(1).png?v=1612732845824" class="wordmap" width="100%" height="100%">
  </div>
  </div>
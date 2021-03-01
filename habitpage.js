

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
    return `
    <div class="row">
  <div class="col-4">
      <br /><span class="highlight2">${(projects.title2)}</span><br />
      <br />${(projects.description2)}<br />
  </div>
  <div class="col-4">
    <br /><img src = "https://cdn.glitch.com/ab621e97-0054-4a80-9f77-cec959e02051%2FImage%204-17-20%20at%2011.05%20PM.jpg?v=1612411325418" class="swift" width="280" height="500"><br />
  </div>
  
</div>
    `
}
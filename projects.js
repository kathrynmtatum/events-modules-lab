export default function renderProjects(projects){
    console.log(projects, "Projects")
    return `
    <section id="projects">
    <div class="row">
      <div class="col-8">
        <span class="highlight">${(projects.title1)}</span>
        <br />
        <br />${(projects.description1)}
      </div>
      <div class="col-4">
        <br /> <img src = ${(projects.photo1)} class="passionpic" width="100%" height="100%"><br />
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
        <br /> <img src = ${(projects.wordmap)} class="wordmap" width="100%" height="100%"><br />
      </div>
      <div class="col-4">
        <br /><span class="highlight2">${(projects.title2)}</span><br />
        <br />${(projects.description2)}<br />
      </div>
      <div class="col-4">
        <br /><img src = "https://cdn.glitch.com/ab621e97-0054-4a80-9f77-cec959e02051%2FImage%204-17-20%20at%2011.05%20PM.jpg?v=1612411325418" class="swift" width="280" height="500"><br />
      </div>
    </div>
    </projects>
    `
}


Export function handleProjectFilter(data){
  let buttons = document.querySelectorAll('.filter_tags input[name="filter"]');
  buttons.forEach(cond =>
    cond.addEventListener("change", function(event) {
      if (this.value === "all") {
        return (document.querySelector(
          ".project-list"
        ).innerHTML = `<div class="row">
            ${renderProjectItems(data.projects)}
            </div>`);
      }
      const choice = this.value;
      const filtered = data.projects.filter(m => {
        let x = m.stringtags.toString();
        console.log(x.includes(this.value));
        return x.includes(this.value);
      });
      document.querySelector(".project-list").innerHTML = renderProjectItems(
        filtered
      );
    })
  );
}

projects.js

Export function handleProjectFilter(data){
  let buttons = document.querySelectorAll('.filter_tags input[name="filter"]');
  buttons.forEach(cond =>
    cond.addEventListener("change", function(event) {
      if (this.value === "all") {
        return (document.querySelector(
          ".project-list"
        ).innerHTML = `<div class="row">
            ${renderProjectItems(data.projects)}
            </div>`);
      }
      const choice = this.value;
      const filtered = data.projects.filter(m => {
        let x = m.stringtags.toString();
        console.log(x.includes(this.value));
        return x.includes(this.value);
      });
      document.querySelector(".project-list").innerHTML = renderProjectItems(
        filtered
      );
    })
  );
}


function renderProjectItems(projects) {
  return projects
    .map(
      d => `
      <div class="col-4">
        <div class="project-title">
          <a href="?project=${d.id}"><strong>${d.title}</strong></a>
        </div>
        </br> 
        <img src="${d.teaser}" width="500px">
        <br>
       ${renderMaterials(d.materials)}
        <p> "${d.description}" </p>  
        <section class = "tags">
        ${renderTags(d.tags)}
        <br>
        </section>
		</div>`
    )
    .join("\n");
}

function renderMaterials(materials) {
  if (materials != undefined) {
    return materials.map(
      m =>
        `<a href='${m.path}'><i class='${m.icon}'></i></a>
<a href='${m.path}'>${m.label}</a>`
    );
  }
  return "";
}

function renderTags(tags) {
  return tags
    .map(
      d => `
  <div class ="${d.category}">
  ${d.tag}
</div>
  `
    )
    .join("");
}




projectpage.js
import renderNavbar from './navBar.js'
import {renderMaterials,renderTags} from './Projects.js'

export default function renderProjectPage(project) {
  document.querySelector(".container").innerHTML = `
  ${renderNavbar("project", Object.keys(project))}
  <div id = ${project.id}>
  <h1>${project.title}</h1>
  </br> 
  <img src="${project.teaser}" width="500px">
  <br>
  ${renderMaterials(project.materials)}
  <p> "${project.explanation}" </p>  
  <section class = "tags">
  ${renderTags(project.tags)}
  <br>
  </section>
  </div>
  `;
}

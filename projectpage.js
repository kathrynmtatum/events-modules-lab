import renderNavbar from './navbar.js'
import {renderTags} from './projects.js'


//${renderMaterials(projects.materials)}
//${renderTags(project.tags)}

export default function renderProjectPage(project) {
  document.querySelector(".container").innerHTML = `
  ${renderNavbar("project", Object.keys(project))}
  <div id = ${project.id}>
  <h1>${project.title}</h1>
  </br> 
  <img src="${project.photo1}" width="500px">
  <br>
  <p> "${project.description}" </p>  
  <section class = "tags">
  <br>
  </section>
  </div>
  `;
}
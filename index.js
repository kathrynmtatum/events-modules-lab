import mainpage from './mainpage.js';
import { handleNews } from './news.js';
//import ProjectPage from './projectpage.js';
//import {handleProjectFilter} from './projects.js';

fetch('./data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
	// render HTML here
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('project')) {
        if (urlParams.get('project')=='qc-proj'){
            //ProjectPage(data.projects[0]);
        }
        else if (urlParams.get('project')=='sql-proj'){
            //ProjectPage(data.projects[1]);
        }
    }
    else {
        mainpage(data);
        handleNews(data);
        //handleProjectFilter(data);
    }

});

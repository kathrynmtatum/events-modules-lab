import about from './about.js';
import navbar from './navbar.js';
import news,{handleNews} from './news.js';
import projects,{handleProjectFilter} from './projects.js';


export default function mainpage(data) {

document.querySelector('.container').innerHTML = `
        ${navbar('main', Object.keys(data))}
        ${about(data.about)}
        ${news(data.news)}
        ${projects(data.projects)}
    `
    handleNews(data);
    handleProjectFilter(data);
}
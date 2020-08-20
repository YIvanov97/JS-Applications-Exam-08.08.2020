import {getHome} from './controllers/home.js'
import {getLogin, postLogin, getRegister, postRegister, getLogout} from './controllers/user.js'
import {getDetails, getCreate, postCreate, getEdit, postEdit, getDelete, getJoin} from './controllers/movies.js'

const app = Sammy("#container", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome);

    this.get('#/login', getLogin);
    this.post('#/login', postLogin);

    this.get('#/register', getRegister);
    this.post('#/register', postRegister);

    this.get('#/logout', getLogout);

    this.get('#/details/:id', getDetails);

    this.get('#/create', getCreate);
    this.post('#/create', postCreate);

    this.get('#/edit/:id', getEdit);
    this.post('#/edit/:id', postEdit);

    this.get('#/delete/:id', getDelete);

    this.get('#/like/:id', getJoin);
  
});
app.run('#/home');
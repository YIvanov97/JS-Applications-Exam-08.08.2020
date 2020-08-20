import commonPartial from './partials.js';
import {setHeader} from './auth.js';
import {create, get, update, deleteEl} from '../models/movies.js';

export function getDetails(ctx) {
    setHeader(ctx);
    const id = ctx.params.id;
    get(id)
    .then(res => {
        const movie = {...res.data(), id: res.id};
        ctx.isOrganizer = movie.organizer === sessionStorage.getItem('user');
        ctx.movie = movie;
        ctx.loadPartials(commonPartial).partial('./view/movies/details.hbs')
    }).catch(err => console.log(err))
}

export function getCreate(ctx) {
    setHeader(ctx)
    ctx.loadPartials(commonPartial).partial('./view/movies/create.hbs')
}

export function postCreate(ctx) {
    const {title, description, imageUrl} = ctx.params;
    const organizer = sessionStorage.getItem('user')
    create({title, description, imageUrl, organizer, like: 0})
    .then(res => {
        console.log(res);
        ctx.redirect('#/home');
    }).catch(err => console.log(err));
}

export function getEdit(ctx) {
    const id = ctx.params.id;
    get(id)
    .then(res => {
        const movie = {...res.data(), id: res.id};
        ctx.movie = movie;
        ctx.loadPartials(commonPartial).partial('./view/movies/edit.hbs')
    }).catch(err => console.log(err))
}

export function postEdit(ctx) {
    const {title, description, imageUrl} = ctx.params;
    const id = ctx.params.id;
    update(id, {title, description, imageUrl})
    .then(res => {
        ctx.redirect(`#/details/${id}`);
    }).catch(err => console.log(err))
}

export function getDelete(ctx) { 
    const id = ctx.params.id;
    deleteEl(id).then( res => {
        ctx.redirect('#/home')
    }).catch(err => console.log(err))
}

export function getJoin(ctx) {
    const id = ctx.params.id;
    get(id)
    .then(res => {
        const movie = res.data();
        const like = movie.like + 1;
        update(id, {like})
            .then( () => {
            ctx.redirect(`#/details/${id}`);
            }).catch(err => console.log(err));
    }).catch(err => console.log(err))
}
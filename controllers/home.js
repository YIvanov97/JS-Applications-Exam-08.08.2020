import commonPartial from './partials.js';
import {setHeader} from './auth.js';
import {getAll} from '../models/movies.js';

export function getHome(ctx){
    setHeader(ctx);
    getAll()
    .then (res => {
        const movies = res.docs.map(doc => doc = {...doc.data(), id: doc.id});
        ctx.movies = movies;
        ctx.loadPartials(commonPartial).partial('./view/home.hbs')
    })
    ctx.loadPartials(commonPartial).partial('./view/home.hbs')
};
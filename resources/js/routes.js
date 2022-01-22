import Home from './components/Home';
import About from './components/About';
import Colors from './components/Colors';
import NotFound from "./components/NotFound";

export default {
    mode: 'history',

    linkActiveClass: 'font-bold',

    routes: [
        {
            path: '*',
            component: NotFound
        },

        {
            path: '/',
            component: Home,
            name: 'home'
        },

        {
            path: '/about',
            component: About,
            name: 'about'
        },

        {
            path: '/colors',
            component: Colors,
            name: 'colors'
        },
    ]
};

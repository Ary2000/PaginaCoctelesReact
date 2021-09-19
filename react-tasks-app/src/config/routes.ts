import IRoute from '../interfaces/routes';
import HomePage from '../pages/HomePage';
import ResultadoCoctel from '../pages/resultadoCoctel';

const routes: IRoute[] = [
    {
       path: '/',
       name: 'Home Page',
       component: HomePage,
       exact: true 
    },
    {
        path: '/resultados/:nombre',
        name: 'Pagina resultados',
        component: ResultadoCoctel,
        exact: true
    }
]

export default routes;
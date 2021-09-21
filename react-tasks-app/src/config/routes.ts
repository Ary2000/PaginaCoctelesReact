import IRoute from '../interfaces/routes';
import HomePage from '../pages/HomePage';
import ResultadoCoctel from '../pages/resultadoCoctel';
import ResultadoIngredientes from '../pages/ResultadoIngredientes';

const routes: IRoute[] = [
    {
       path: '/',
       name: 'Home Page',
       component: HomePage,
       exact: true 
    },
    {
        path: '/resultados/:idCoctel',
        name: 'Pagina resultados',
        component: ResultadoCoctel,
        exact: true
    },
    {
        path: '/ingredientes/:ingrediente',
        name: 'Pagina ingredientes',
        component: ResultadoIngredientes,
        exact: true
    }
]

export default routes;
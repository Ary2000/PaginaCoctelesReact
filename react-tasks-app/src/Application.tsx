import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';
//-----------------------------------
import LoginButton from './componentsLogin/LoginButton';
import LogoutButton from './componentsLogin/LogoutButton';
import Profile from './componentsLogin/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import NavBarAbecedario from './componentsUI/navBar';
import PerfilUsuario from './componentsUI/perfil';

const Application: React.FunctionComponent<{}> = props => {
    
    useEffect(() => {
        logging.info('Loading application.');
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name} 
                                        {...props}
                                        {...route.props}
                                    />
                                )}
                            />
                        );
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Application;
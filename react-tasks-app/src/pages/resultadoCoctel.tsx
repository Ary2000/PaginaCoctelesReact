import React, {useEffect, useState} from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import logging from '../config/logging';
import IPage from '../interfaces/page';

const ResultadoCoctel: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>(props.name);
    
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    return (
        <div><body>{props.match.params.nombre}</body></div>
    );
}

export default withRouter(ResultadoCoctel);
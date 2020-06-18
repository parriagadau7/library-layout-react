import React from "react";
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Root = (props) => (
        <Switch>
            {props.routes.map((route) =>
                <Route exact={route.exact} key={route.name.toString()} path={route.path} component={route.name} />
            )}
        </Switch>
);

Root.propTypes = {
        routes: PropTypes.arrayOf(PropTypes.shape({
                exact: PropTypes.bool,
                name: PropTypes.elementType.isRequired,
                path: PropTypes.string.isRequired,
        })).isRequired,
}

export default Root;

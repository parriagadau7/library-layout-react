import React from 'react';
import {shallow} from "enzyme";
import Root from "./Root";

const routes = [{
    exact: true,
    name: props => <span>Test 2</span>,
    path: "/"
},
    {
        exact: false,
        name:props => <span>Test 2</span>,
        path: "/character"
    }
]

const props = {"routes" : routes}

describe('Layout', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Root {...props}/>);
    });

    it('se genera sin errores', () => {
        expect(wrapper).toBeDefined();
    });
});

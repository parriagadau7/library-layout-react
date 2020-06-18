import React from 'react';
import {shallow} from "enzyme";
import Layout from "./Layout";

const links = {"links" : [{
    name: "Character",
    path: "/character"
}]};

const routes = {"routes": [{
    exact: true,
    name: props => <span>Test 2</span>,
    path: "/"
},
    {
        exact: false,
        name:props => <span>Test 2</span>,
        path: "/character"
    }
]}

describe('Layout', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<Layout {...links} {...routes}/>);
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });
});

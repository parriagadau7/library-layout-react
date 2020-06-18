import React from 'react';
import {shallow} from "enzyme";
import Navigation from "./Navigation";

const links = {"links" : [{
        name: "Character",
        path: "/character"
    }]};

describe('Navigation', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<Navigation {...links}/>);
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });

    it('llamado a toggle', ()=> {
        const navbarToggler = wrapper.find('NavbarToggler');
        expect(wrapper.state()).toEqual({ isOpen: false });
        expect(wrapper.find('Collapse').props().isOpen).toBeFalsy();
        navbarToggler.simulate('click');
        //navbarToggler.props().onClick();
        expect(wrapper.state()).toEqual({ isOpen: true });
        expect(wrapper.find('Collapse').props().isOpen).toBeTruthy();
    });
});

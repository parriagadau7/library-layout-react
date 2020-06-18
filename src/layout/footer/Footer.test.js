import React from 'react';
import {shallow} from "enzyme";
import Footer from "./Footer";

describe('Footer', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<Footer/>);
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });
});

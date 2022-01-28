import React from 'react';
import {shallow} from 'enzyme';

import  {AddCategory} from '../../components/AddCategory';

describe('Testing for AddCategory component', () => {

    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    test('Must show component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Change in input box', () => {
        const input = wrapper.find('input');
        const value = 'Testing input';

        input.simulate('change',{ target: {value:value} });
    });

    test('Must not send POST data on submit', () => {
        const form = wrapper.find('form').simulate('submit', {});


    });
    
    
});

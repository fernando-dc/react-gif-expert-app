import React from 'react';
import {shallow} from 'enzyme';

import  {AddCategory} from '../../components/AddCategory';

describe('Testing for AddCategory component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        
    });

    test('Must show component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Change in input box', () => {
        const input = wrapper.find('input');
        const value = 'Testing input';
        
        input.simulate('change',{ target: {value:value} });
    });
    
    test('Must not send POST data on submit', () => {
        const form = wrapper.find('form').simulate('submit', {preventDefault(){}});
        
    });
    
    test('Must call setCategories and clear the input box', () => {
        const value = 'Testing input';
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
        
        
        
    });
    
    
});

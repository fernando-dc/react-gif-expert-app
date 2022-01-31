import React from 'react';

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Testing for GifExpertApp component', () => {

    test('Must match the snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Must show a list of categories', () => {
        const categories = ['Gintama', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    });
    
});

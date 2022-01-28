import React from 'react';
import '@testing-library/jest-dom';
import {shallow, } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Testing for GifGridItem', () => {
    const id = '';
    const title = 'A title';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />) 
    
    test('Display component correctly', () => {


        expect(wrapper).toMatchSnapshot();
    });
    
    test('Display component title', () => {
        const p = wrapper.find('p').text().trim();

        expect(p).toBe(title)
    });
    
    test('Display image properties', () => {
        const image = wrapper.find('img');

        expect(image.prop('src')).toBe(url);
        expect(image.prop('alt')).toBe(title);
    });
    
    test('Grid item must have "animate__fadeIn" class', () => {
        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
    
});

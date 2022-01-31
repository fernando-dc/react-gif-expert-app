import React from 'react';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //This will mock the response of the custom hook

describe('Testing for GifGrid component', () => {

    
    test('Must match the snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,    
        });
        
        const wrapper = shallow(<GifGrid category='Gintama'/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Must show items when images are loaded using the useFetchGifts custom hook', () => {
        const gifs = [{
            id: 'FAKE_ID',
            url: 'https://localhost/fake_url.jpg',
            title: 'Fake Title',
            },
        ];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,    
        });
        const wrapper = shallow(<GifGrid category='Gintama'/>);
        
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});

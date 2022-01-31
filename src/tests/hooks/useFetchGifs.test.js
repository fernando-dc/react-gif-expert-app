import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook, } from "@testing-library/react-hooks";

describe('Testing for custom hook useFetchGifs', () => {
    test('Must return initial state', async() => {
        const category = 'Gintama';
        const {result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });
    
    test('Must return images array', async() => {
        const category = 'Gintama';
        const {result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));
        console.log(result.current);
        await waitForNextUpdate();
        console.log(result.current);
        
        const { data, loading } = result.current;
        expect(data.length).toEqual( 10 );
        expect(loading).toBe( false );
        
    });
    
});

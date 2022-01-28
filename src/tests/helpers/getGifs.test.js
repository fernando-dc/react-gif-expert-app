import {getGifs} from "../../helpers/getGifs";

describe('Testing getGifs', () => {
    test('Must bring 10 elements', async () => {
        const gifs = await getGifs('Gintama');

        expect(gifs.length).toBe(10);
    });

    test('Must bring 10 elements', async () => {
        const gifs = await getGifs('Gintama');

        expect(gifs.length).toBe(10);
    });

    test('Must bring 0 elements', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
    
});

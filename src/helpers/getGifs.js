

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=K9z3WbjXS1EdN9X625KIED70xYXPrHZd`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //the question mark is to get the following part only if it exists
        }
    })

    return gifs;
}
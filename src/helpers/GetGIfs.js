export const getGIfs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1y9j8WKQgKNYfWg2G0U2kxNB6qPUGRwU&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })
    
    );
    return gifs;
  }
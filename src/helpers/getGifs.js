export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=OsUutjctDr83LDhD8aezI6Ov1sD2cWLX`
    const response = await fetch( url )
    const {data} = await response.json()

    const gifs = data.map(imgs => (
        {
            id: imgs.id,
            title: imgs.title,
            url: imgs.images?.downsized_medium.url
        }
    ))
    return gifs
}
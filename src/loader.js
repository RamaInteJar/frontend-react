const url = "https://listingbookmarked.onrender.com"
export const bookmarkLoader = async()=>{
    const res = await fetch(url + "/bookmark")
    const bookmark = await res.json()
    console.log(bookmark)
    return bookmark;
    }


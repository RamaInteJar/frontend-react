export const bookmarkLoader = async()=>{
    const res = await fetch("http://localhost:7050/bookmark")
    const bookmark = await res.json()
    console.log(bookmark)
    return bookmark;
    }


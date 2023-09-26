import { redirect } from "react-router-dom";



export const createAction = async({request})=>{
    const formData = await request.formData()

    const newBookmark = {
        title: formData.get("title"),
        url: formData.get("url")

    }
    console.log(newBookmark);
    await fetch("http://localhost:7050/bookmark",{
        method: "post",
        headers:{
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(newBookmark)
    })
    return redirect("/")
}
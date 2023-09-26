import React from "react";
import { Link, useLoaderData, Form } from "react-router-dom";

const Homepage = () => {
  const bookmark = useLoaderData();
  console.log(bookmark);
  return (
    <div>
        <h2>Create Urls</h2>
        <Form action="/create" method="post">
        <input type="text" name="title" placeholder="title"/>
        <input type="text" name="url" placeholder="url" />
        <input type="submit" value="create bookmark"  />
        </Form>

        <h2>Bookmarks</h2>
      {bookmark.map((url) => {
        return (
          <div key={url._id} className="">
            <Link to={`${url._id}`}>{url.title}</Link>
            <h3>{url.url}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;

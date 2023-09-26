import React from "react";
import { Link, useLoaderData, Form } from "react-router-dom";

const Homepage = () => {
  const bookmark = useLoaderData();
  console.log(bookmark);
  return (
    <div>
        <Form action="/create" method="post" className="display-flex">
        <input type="text" name="title" placeholder="title"/>
        <input type="text" name="url" placeholder="url" />
        <input type="submit" value="create bookmark"  />
        </Form>
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

import React, { useEffect, useState } from "react";
import styles from "@/styles/dashboard.module.scss";
import Post from "@/components/Post";

type PostResponseType = Array<{
  title: string;
  body: string;
  id: number;
  userId: number;
}>;

const Index = () => {
  const [posts, setPosts] = useState<PostResponseType>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <div className={styles.dashboardContainer}>
        {posts.map((post) => {
          return <Post title={post.title} body={post.body} key={post.id} />;
        })}
      </div>
    </>
  );
};

export default Index;

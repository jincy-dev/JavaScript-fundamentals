import React from "react";
import styles from "@/styles/dashboard.module.scss";
import { IoShareSocialSharp, IoHeart } from "react-icons/io5";

type Props = {
  title: string;
  body: string;
};

const Post = (props: Props) => {
  return (
    <div>
      <div>
        <h1 className={styles.postTitle}>{props.title}</h1>
      </div>
      <div>
        <p>{props.body}</p>
      </div>
      <div className={styles.actions}>
        <IoShareSocialSharp />
        <IoHeart />
      </div>
    </div>
  );
};

export default Post;

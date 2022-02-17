import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../hooks";
import { PostService } from "../API/post.service";
import { IPost } from "../interfaces/post.interface";

export function SinglePost(): JSX.Element {
  const { id } = useParams();
  const [post, setPost] = useState<IPost>();

  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const { data } = await PostService.getById(id as string);

    setPost(data);
  });

  useEffect(() => {
    fetchPostById(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>

      {
        isLoading
          ?
          <h2>Loading...</h2>
          :
          <>
            <h1>{id}: {post?.title}</h1>
            <div>{post?.body}</div>
          </>
      }
    </>
  );
}

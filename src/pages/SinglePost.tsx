import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../hooks";
import { PostService } from "../API/post.service";
import { IPost } from "../interfaces/post.interface";
import { IComment } from "../interfaces/comment.interface";
import { CommentList } from "../components";

export function SinglePost(): JSX.Element {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);

  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const { data } = await PostService.getById(id);

    setPost(data);
  });

  const [fetchComments, isCommentsLoading] = useFetching(async (id) => {
    const { data } = await PostService.getCommentsByPostId(id as string);

    setComments(data);
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
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
      {
        comments.length &&
          isCommentsLoading
          ?
          <h2>Comments are loading...</h2>
          :
          <>
            <h2>Comments:</h2>
            <CommentList comments={comments} />
          </>
      }
    </>
  );
}

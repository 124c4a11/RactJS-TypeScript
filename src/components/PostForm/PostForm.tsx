import { DetailedHTMLProps, FormHTMLAttributes, MouseEvent, useState } from "react";

import { IPost } from "../../interfaces/post.interface";
import { Input, Button } from "..";


export interface IPostFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  create: (newPost: IPost) => void;
}


interface IPostState {
  title: string;
  body: string;
}


export function PostForm({ create, ...props }: IPostFormProps): JSX.Element {
  const [post, setPost] = useState<IPostState>({
    title: '',
    body: '',
  });

  const addNewPost = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (!post.title && !post.body) return;

    const newPost = { ...post, id: Date.now() }

    create(newPost);

    setPost({ title: '', body: '' });
  };

  return (
    <form {...props}>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="title"
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="description"
      />
      <Button onClick={addNewPost}>Create Post</Button>
    </form>
  );
}

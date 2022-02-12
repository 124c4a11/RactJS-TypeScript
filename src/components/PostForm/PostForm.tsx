import { DetailedHTMLProps, FormHTMLAttributes, MouseEvent, useState } from "react";
import { IPost } from "../../interfaces/post.interface";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export interface IPostFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  create: (newPost: IPost) => void;
}

interface IPostState {
  title: string;
  description: string;
}

export function PostForm({ create, ...props }: IPostFormProps): JSX.Element {
  const [post, setPost] = useState<IPostState>({
    title: '',
    description: '',
  });


  const addNewPost = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (!post.title && !post.description) return;

    const newPost = { ...post, id: Date.now() }

    create(newPost);

    setPost({ title: '', description: '' });
  };


  return (
    <form {...props}>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="title"
      />
      <Input
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
        placeholder="description"
      />
      <Button onClick={addNewPost}>Create Post</Button>
    </form>
  );
}

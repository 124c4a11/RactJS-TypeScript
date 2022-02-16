import { useMemo } from "react";
import { SortOptionType } from "../components";

import { IPost } from "../interfaces/post.interface";


export function useSortedPosts(posts: IPost[], sortOption: SortOptionType | ''): IPost[] {
  return useMemo(() => {
    if (!sortOption) return posts;

    return [...posts].sort((a, b) => a[sortOption].localeCompare(b[sortOption]));
  }, [posts, sortOption]);
}


export function usePosts(posts: IPost[], sortOption: SortOptionType | '', searchQuery: string): IPost[] {
  const sortedPosts = useSortedPosts(posts, sortOption);

  return useMemo(() => {
    if (!searchQuery) return sortedPosts;

    return sortedPosts.filter((item) => item.title.toLowerCase().includes(searchQuery));
  }, [sortedPosts, searchQuery]);
}

import axios, { AxiosResponse } from "axios";


export class PostService {
  static async getAll(limit: number = 10, page: number = 1): Promise<AxiosResponse<any, any>> {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page
      }
    });
  }

  static async getById(id: string) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}

import axios from "axios";


export class PostService {
  static async getAll(): Promise<any> {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

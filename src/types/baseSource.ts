import type { Stream, Search, Details, Home } from "./index";

export abstract class BaseSource {
  abstract baseUrl: string;
  abstract headers: object;
  abstract getStreams(slug: string): Promise<Stream>;
  abstract getSearch(slug: string, page?: string): Promise<Search[]>;
  abstract getTrending(page?: string, limit?: string): Promise<Home[]>;
  abstract getDetails(id: string): Promise<Details>;
}

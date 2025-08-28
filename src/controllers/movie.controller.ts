import moviesData from "../json/api.json";
import type { Details, Home, Search, Stream } from "../types";

export class MockMovies {
  private data = moviesData; // store JSON inside class

  async getTrending(): Promise<Home[]> {
    return this.data.map((movie) => ({
      id: movie.id,
      poster: movie.poster,
      title: movie.title,
    }));
  }

  async getSearch(slug: string): Promise<Search[]> {
    const query = slug.toLowerCase();
    return this.data
      .filter((movie) => movie.title.toLowerCase().includes(query))
      .map((movie) => ({
        id: movie.id,
        poster: movie.poster,
        title: movie.title,
      }));
  }

  async getDetails(id: string): Promise<Details> {
    const movie = this.data.find((m) => m.id === id);
    if (!movie) throw new Error("Movie not found");
    return {
      id: movie.id,
      title: movie.title,
      poster: movie.poster,
      headers: {},
      seasons: movie.seasons,
      suggestedVideos: movie.suggestedVideos,
    };
  }

  async getStreams(id: string): Promise<Stream> {
    const movie = this.data.find((m) => m.id === id);
    if (!movie) throw new Error("Movie not found");
    const url = movie.seasons?.[0]?.episodes?.[0]?.url || "";
    return {
      url,
      title: movie.title,
      quality: "auto",
      qualities: [{ quality: "auto", url }],
      subtitles: [],
    };
  }
}

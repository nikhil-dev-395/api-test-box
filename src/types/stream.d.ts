import type { SuggestedVideo } from "./media";

export type Stream = {
  url: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quality: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  qualities: any;
  subtitles?: Subtitle[];
};

export interface Subtitle {
  lang: string;
  url: string;
}

export interface Search {
  id: string;
  poster: string;
  title: string;
}

export interface Home {
  id: string;
  poster: string;
  title: string;
}

export interface Episodes {
  id: string;
  title: string;
}

export interface Seasons {
  title: string;
  poster: string;
  episodes: Episodes[];
}
export interface Details {
  id: string;
  poster: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers: any;
  seasons: Seasons[];
  suggestedVideos?: SuggestedVideo[];
}

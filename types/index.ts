import {Comment} from "../../spotify-server/src/track/schemas/comment.schema";
import {Track} from "../../spotify-server/src/track/schemas/track.schema";

interface IComment {
  _id: string
  username: string;
  text: string;
}

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

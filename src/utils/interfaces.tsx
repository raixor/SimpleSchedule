import moment, { Moment } from "moment";

export interface ISpeaker {
  _id: string;
  name: string;
  avatar: string;
}
export interface IChat {
  tags: string[];
  id: string;
  title: string;
  description: string;
  format: string;
  speaker: ISpeaker;
  start: Moment;
  end: Moment;
  level: number;
  place: string;
  slug: string;
  image: string;
  isScheduleItem: boolean;
}

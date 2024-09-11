import { StaticImageData } from "next/image";

export interface IProject {
  id: number;
  title: string;
  isMain: boolean;
  images: StaticImageData[];
  createdAt: string;
}

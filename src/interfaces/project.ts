import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  isMain: boolean;
  images: StaticImageData[];
}

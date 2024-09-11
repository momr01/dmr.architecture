import {
  gargantini01,
  gargantini02,
} from "@/assets/img/projects/gargantini1/imgGargantini1";
import {
  showroom1,
  showroom2,
  showroom3,
  showroom4,
} from "@/assets/img/projects/showroom-djiAgriculture/imgShowroom";
import {
  ofCC1,
  ofCC2,
  ofCC3,
} from "@/assets/img/projects/oficinas-centroComercial/imgOfiCC";
import {
  ottero1,
  ottero2,
  ottero3,
  ottero4,
  ottero5,
} from "@/assets/img/projects/ottero/imgOttero";
import {
  vistalba1,
  vistalba2,
  vistalba3,
  vistalba4,
} from "@/assets/img/projects/vistalba1/imgVistalba";
import {
  vistalba2_1,
  vistalba2_2,
  vistalba2_3,
  vistalba2_4,
  vistalba2_5,
} from "@/assets/img/projects/vistalba2/imgVistalba2";
import { vivienda1 } from "@/assets/img/projects/vivienda1/imgVivienda1";
import {
  vivienda2_1,
  vivienda2_2,
  vivienda2_3,
  vivienda2_4,
} from "@/assets/img/projects/vivienda2/imgVivienda2";
import { eAndR1, eAndR2, eAndR3 } from "@/assets/img/projects/eandr/imgEandR";

const projects = [
  {
    id: 1,
    title: "Proyecto Ottero",
    isMain: true,
    images: [ottero1, ottero2, ottero3, ottero4, ottero5],
    createdAt: "2024-09-06T13:51:16.913+00:00"
  },
  {
    id: 2,
    title: "Proyecto Gargantini",
    isMain: true,
    images: [gargantini01, gargantini02],
     createdAt: "2024-09-05T13:51:16.913+00:00"
  },
  {
    id: 3,
    title: "Oficinas & Centro Comercial",
    isMain: true,
    images: [ofCC1, ofCC2, ofCC3],
     createdAt: "2024-09-04T13:51:16.913+00:00"
  },
  {
    id: 4,
    title: "Diseño Showroom - DJI Agriculture",
    isMain: true,
    images: [showroom1, showroom2, showroom3, showroom4],
     createdAt: "2024-09-03T13:51:16.913+00:00"
  },
  {
    id: 5,
    title: "Proyecto Vistalba",
    isMain: true,
    images: [vistalba1, vistalba2, vistalba3, vistalba4],
     createdAt: "2024-09-02T13:51:16.913+00:00"
  },
  // {
  //   id: 6,
  //   title: "Proyecto Vistalba II",
  //   isMain: true,
  //   images: [vistalba2_1, vistalba2_2, vistalba2_3, vistalba2_4, vistalba2_5],
  // },
  // {
  //   id: 7,
  //   title: "Visualización Vivienda I",
  //   isMain: true,
  //   images: [vivienda1],
  // },
  {
    id: 8,
    title: "Visualización Vivienda",
    isMain: true,
    images: [vivienda1, vivienda2_1, vivienda2_2, vivienda2_3, vivienda2_4],
     createdAt: "2024-09-01T13:51:16.913+00:00"
  },
  {
    id: 9,
    title: "Proyecto E&R",
    isMain: true,
    images: [eAndR1, eAndR2, eAndR3],
     createdAt: "2024-09-07T13:51:16.913+00:00"
  },
];

export { projects };

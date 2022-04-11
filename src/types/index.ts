import { TabId, WorkTab } from "./workTab.type";

interface Work {
  data: {
    id: string;
    category: TabId;
    title: string;
    subCategory: string;
    backgroundColor: string;
    pointOfInterest: number;
  };
  content: string;
  slug: string;
}

export type { TabId, Work };

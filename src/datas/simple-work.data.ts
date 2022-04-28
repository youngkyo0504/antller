import { TabId } from "../types";
import { WorkTab } from "../types/workTab.type";
interface workItem {
  id: string;
  category: TabId;
  title: string;
  subCategory: string;
  backgroundColor: string;
  pointOfInterest: number;
}
export const items: workItem[] = [
  // Photo by ivan Torres on Unsplash

  {
    id: "1",
    category: "dataAnalysis",
    subCategory: "우시장",
    title: "우시장 플러스",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "newso",
    category: "dataAnalysis",
    subCategory: "뉴스레터",
    title: "뉴소레터",
    pointOfInterest: 260,
    backgroundColor: "#fff",
  },
  {
    id: "kpn-ability",
    category: "solution",
    subCategory: "우시장",
    title: "씨수소 유전능력 포스터",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoo-insight",
    category: "socialContribution",
    subCategory: "우시장",
    title: "한우 품질이력 인사이트",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoo-insight",
    category: "socialContribution",
    subCategory: "우시장",
    title: "한우 품질이력 인사이트",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoo-insight",
    category: "socialContribution",
    subCategory: "우시장",
    title: "한우 품질이력 인사이트",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "newso",
    category: "dataAnalysis",
    subCategory: "뉴스레터",
    title: "뉴소레터",
    pointOfInterest: 260,
    backgroundColor: "#fff",
  },
  {
    id: "kpn-ability",
    category: "solution",
    subCategory: "우시장",
    title: "씨수소 유전능력 포스터",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoo-insight",
    category: "socialContribution",
    subCategory: "우시장",
    title: "한우 품질이력 인사이트",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "newso",
    category: "dataAnalysis",
    subCategory: "뉴스레터",
    title: "뉴소레터",
    pointOfInterest: 260,
    backgroundColor: "#fff",
  },
  {
    id: "kpn-ability",
    category: "solution",
    subCategory: "우시장",
    title: "씨수소 유전능력 포스터",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoo-insight",
    category: "socialContribution",
    subCategory: "우시장",
    title: "한우 품질이력 인사이트",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "newso",
    category: "dataAnalysis",
    subCategory: "뉴스레터",
    title: "뉴소레터",
    pointOfInterest: 260,
    backgroundColor: "#fff",
  },
  {
    id: "kpn-ability",
    category: "solution",
    subCategory: "우시장",
    title: "씨수소 유전능력 포스터",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoo-insight",
    category: "socialContribution",
    subCategory: "우시장",
    title: "한우 품질이력 인사이트",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "newso",
    category: "dataAnalysis",
    subCategory: "뉴스레터",
    title: "뉴소레터",
    pointOfInterest: 260,
    backgroundColor: "#fff",
  },
  {
    id: "kpn-ability",
    category: "solution",
    subCategory: "우시장",
    title: "씨수소 유전능력 포스터",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
];

export const workClassification: WorkTab[] = [
  { id: "solution", name: "솔루션" },
  { id: "dataAnalysis", name: "맞춤형 데이터 분석 서비스" },
  { id: "socialContribution", name: "사회공헌" },
];

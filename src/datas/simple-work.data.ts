import { TabId } from "../types";
import { WorkTab } from "../types/workTab.type";
export interface workItem {
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
    id: "sosojin-poster",
    category: "socialContribution",
    subCategory: "Aratwork",
    title: " Art Work by 수수진",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "playlist",
    category: "socialContribution",
    subCategory: "Music",
    title: "뉴소 플레이리스트",
    pointOfInterest: 260,
    backgroundColor: "#fff",
  },
  {
    id: "kpn-family-tree",
    category: "dataAnalysis",
    subCategory: "kpn",
    title: "족보 시각화",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoo-insight",
    category: "dataAnalysis",
    subCategory: "report",
    title: "축평원 인사이트 레포트",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoo-one-cycle",
    category: "dataAnalysis",
    subCategory: "우시장",
    title: "한우 농가 한 바퀴",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "kpn-poster",
    category: "dataAnalysis",
    subCategory: "kpn",
    title: "KPN 포스터",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "newsoletter",
    category: "socialContribution",
    subCategory: "뉴스레터",
    title: "뉴소레터",
    pointOfInterest: 260,
    backgroundColor: "#fff",
  },
  {
    id: "docu-soso-people",
    category: "socialContribution",
    subCategory: "docu",
    title: "다큐멘터리 소소한 사람들",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "animaldatalab",
    category: "solution",
    subCategory: "solution",
    title: "Animal Data Lab",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "dairylab",
    category: "solution",
    subCategory: "solution",
    title: "Dairy Lab",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "hanwoolab",
    category: "solution",
    subCategory: "solution",
    title: "Hanwoo Lab",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "woosijang",
    category: "solution",
    subCategory: "solution",
    title: "우시장 플러스",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "woosijang",
    category: "dataAnalysis",
    subCategory: "data",
    title: "축평원 온실가스 배출량 평가지표",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "woosijang",
    category: "dataAnalysis",
    subCategory: "data",
    title: "축평원 한우 품질 이력 분석",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
  {
    id: "woosijang",
    category: "dataAnalysis",
    subCategory: "data",
    title: "한우 출하 성적 예측모델 개발",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
  },
];

export const workClassification: WorkTab[] = [
  { id: "solution", name: "솔루션" },
  { id: "dataAnalysis", name: "맞춤형 데이터 분석 서비스" },
  { id: "socialContribution", name: "사회공헌" },
];

export const sliderMediaInfo: SliderMediaInfo = [
  {
    videoSrc: "/video/soso1.mp4",
    imageSrc: "/images/main-background-image/soso1.png",
    title: "소소한 사람들",
    desc: "다큐멘터리",
    isBgBlack: true,
  },
  {
    imageSrc: "/images/insight.jpeg",
    title: "한우 품질이력 레포트",
    desc: "데이터 분석",
    isBgBlack: false,
  },
  {
    imageSrc:
      "https://pentagram-production.imgix.net/4208dca0-4a24-469f-b470-ab0e995d9fe5/TPR_Cover_Cropped.jpg?rect=352%2C0%2C5627%2C3750&w=2000&fm=jpg&q=70&auto=format",
    title: "Third",
    desc: "Industrial design of IPU and Rack Mount Chassis for a machine learning start-up",
    isBgBlack: false,
  },
];

export default sliderMediaInfo;

export type SliderMediaInfo = {
  imageSrc: string;
  title: string;
  desc: string;
  isBgBlack: boolean;
  videoSrc?: string;
}[];

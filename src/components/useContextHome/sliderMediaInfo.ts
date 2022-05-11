export const sliderMediaInfo: SliderMediaInfo = [
  {
    videoSrc: "/video/soso1.mp4",
    imageSrc: "/images/main-background-image/soso1.png",
    title: "First",
    desc: "Industrial design of IPU and Rack Mount Chassis for a machine learning start-up",
    isBgBlack: true,
  },
  {
    imageSrc:
      "https://pentagram-production.imgix.net/cc2fd252-714c-40e4-b0b4-ac5200fe99b7/EO_Dally.png?rect=366%2C0%2C4221%2C2813&w=2000&fm=jpg&q=70&auto=format",
    title: "Second",
    desc: "Industrial design of IPU and  second",
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

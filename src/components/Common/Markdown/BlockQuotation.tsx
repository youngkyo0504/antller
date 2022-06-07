import { Children, FC, PropsWithChildren, ReactNode } from "react";
import tw from "twin.macro";

interface BlockQuotationProps {
  name: string;
  children: ReactNode;
}
const BlockQuotation = ({ children, name }: BlockQuotationProps) => {
  return (
    <div
      className="bg-slate-50 p-4 my-0 rounded-xl mb-5"
      css={[
        "p:last-of-type{margin-bottom : 0px;} p:first-of-type{margin-top: 0px;} ",
      ]}
    >
      {children}
      <span className=" not-prose block w-full sm:text-base  text-sm text-slate-400  text-right mt-2">
        {name}
      </span>
    </div>
  );
};

export default BlockQuotation;

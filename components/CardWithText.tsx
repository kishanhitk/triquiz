import Link from "next/link";
import React from "react";
interface ICardWithTextProps {
  title: string;
  href: string;
}
const CardWithText = ({ title, href }: ICardWithTextProps) => {
  return (
    <Link href={href} passHref>
      <div className="p-6  mt-6 text-left border w-96 rounded-xl bg-blue-500 hover:bg-blue-600  cursor-pointer">
        <p className="text-xl text-white">{title}</p>
      </div>
    </Link>
  );
};

export default CardWithText;

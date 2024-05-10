import Image from "next/image";
import { cn } from "../lib/utils";
import { HTMLAttributes } from "react";
interface PhoneProps extends HTMLAttributes<HTMLElement> {
  imgSrc: string;
  dark?: boolean;
}
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        className="pointer-events-none z-50 select-none"
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="Phone Image"
        width={800}
        height={500}
      />
      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover"
          src={imgSrc}
          alt="ovelaying phone image"
          width={800}
          height={500}
        />
      <div className='absolute -z-10 inset-0'>
        <img className='object-cover' src={imgSrc} alt='ovelaying phone image'  />
      </div>
    </div>
  );
};

export default Phone;

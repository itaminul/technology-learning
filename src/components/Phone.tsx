import { cn } from "@/lib/utils";
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
      <img className='pointer' src="" />
    </div>
  );
};



export default Phone;

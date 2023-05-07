import { SlideTemplate } from "../Foundations";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMail, HiPhone } from "react-icons/hi";

export const Contact = () => {
  return (
    <SlideTemplate className="">
      <div className="">
        <h1>Contact</h1>
        <div className="flex flex-col gap-16 mt-10 justify-between">
          <SiLinkedin size={50} />
          <SiGithub size={50} />
          <HiMail size={50} />
          <HiPhone size={50} />
        </div>
      </div>
    </SlideTemplate>
  );
};

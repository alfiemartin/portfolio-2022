import { SlideTemplate } from "../Foundations";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMail, HiPhone } from "react-icons/hi";
import { useState } from "react";

const iconProps = { size: 50 };
const buttonClasses =
  "text-xl transition-colors duration-150 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400 col-span-3 flex justify-start items-center";

// NOTE: Crude attempt to avoid bots
const numberBackwards = process.env.NUM_BACKWARDS;
const emailBackwards = process.env.EMAIL_BACKWARDS;
const reverseString = (num: string) => num.split("").reverse().join("");

export const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <SlideTemplate className="">
      <div className="">
        <h1>Contact {process.env.TEST}</h1>
        <div>
          <div className="inline-grid grid-cols-[repeat(4,max-content)] gap-16 mt-10 justify-between">
            <SiLinkedin {...iconProps} />
            <a
              className="col-span-3 flex justify-start items-center"
              href="https://www.linkedin.com/in/alfie-martin99/"
            >
              linkedin.com/in/alfie-martin99/
            </a>
            <SiGithub {...iconProps} />
            <a
              className="col-span-3 flex justify-start items-center"
              href="https://www.linkedin.com/in/alfie-martin99/"
            >
              github.com/alfiemartin
            </a>
            <HiMail {...iconProps} />
            <button
              className={buttonClasses}
              onClick={() => setShowEmail(true)}
            >
              {!showEmail ? (
                "Click to show email"
              ) : (
                <a
                  href={`mailto:${showEmail && reverseString(emailBackwards ?? '')}`}
                >
                  {showEmail && reverseString(emailBackwards ?? '')}
                </a>
              )}
            </button>
            <HiPhone {...iconProps} />
            <button
              className={buttonClasses}
              onClick={() => setShowPhone(true)}
            >
              {!showPhone ? (
                "Click to show phone number"
              ) : (
                <a href={`tel:${showPhone && reverseString(numberBackwards ?? '')}`}>
                  {showPhone && reverseString(numberBackwards ?? '')}
                </a>
              )}
            </button>
          </div>
        </div>
      </div>
    </SlideTemplate>
  );
};

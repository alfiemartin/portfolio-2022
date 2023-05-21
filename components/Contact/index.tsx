import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMail, HiPhone } from "react-icons/hi";
import { useState } from "react";

const iconProps = { size: 50 };

// NOTE: Crude attempt to avoid bots
const numberBackwards = process.env.NUM_BACKWARDS;
const emailBackwards = process.env.EMAIL_BACKWARDS;

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

const textClasses = "text-sm xs:text-base sm:text-lg md:text-xl";
const buttonClasses = `${textClasses} transition-colors duration-150 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400 col-span-3 flex justify-start items-center`;

export const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="inline-grid grid-cols-[repeat(4,max-content)] gap-x-4 gap-y-8 sm:gap-y-12 md:gap-y-16 justify-between">
      <SiLinkedin {...iconProps} />
      <a
        className={`col-span-3 flex justify-start items-center ${textClasses}`}
        href="https://www.linkedin.com/in/alfie-martin99/"
      >
        linkedin.com/in/alfie-martin99/
      </a>
      <SiGithub {...iconProps} />
      <a
        className={`col-span-3 flex justify-start items-center ${textClasses}`}
        href="https://github.com/alfiemartin"
      >
        github.com/alfiemartin
      </a>
      <HiMail {...iconProps} />
      <button className={buttonClasses} onClick={() => setShowEmail(true)}>
        {!showEmail ? (
          "Click to show email"
        ) : (
          <a className={textClasses} href={`mailto:${showEmail && emailBackwards?.reverse()}`}>
            {showEmail && emailBackwards?.reverse()}
          </a>
        )}
      </button>
      <HiPhone {...iconProps} />
      <button className={buttonClasses} onClick={() => setShowPhone(true)}>
        {!showPhone ? (
          "Click to show phone number"
        ) : (
          <a className={textClasses} href={`tel:${showPhone && numberBackwards?.reverse()}`}>
            {showPhone && numberBackwards?.reverse()}
          </a>
        )}
      </button>
    </div>
  );
};

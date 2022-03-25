import { useState } from "react";
import Modal from "react-modal";
import { GameModalSlideout } from "../GameModalSlideout";
import RippleButton from "../RippleButton";
import { swiperButtonClasses } from "../SlidesNav";

export type GameModalProps = {
  showGame: boolean;
  revealGame: boolean;
  handleAfterModalOpen: () => void;
  handleModalClose: () => void;
};

export const GameModal = ({
  showGame,
  handleAfterModalOpen,
  revealGame,
  handleModalClose,
}: GameModalProps) => {
  const [showProjectInfo, setShowProjectInfo] = useState(false);

  return (
    <Modal
      ariaHideApp={false}
      isOpen={showGame}
      onAfterOpen={handleAfterModalOpen}
      className={"bottom-0 absolute w-screen h-100-accom overflow-hidden z-20"}
      overlayClassName="z-20"
    >
      <div
        className={`w-full h-full transition-opacity duration-700 ${
          revealGame ? "opacity-100" : "opacity-0"
        }`}
      >
        <iframe
          height={"100%"}
          width={"100%"}
          src="https://tapflash-77edb.web.app/"
          className={`z-10`}
        />
        <div className="w-full h-100-accom absolute bottom-0 flex justify-between items-end p-12 pointer-events-none z-30">
          <RippleButton
            className={`${swiperButtonClasses} pointer-events-auto`}
            onClick={handleModalClose}
          >
            Quit Game
          </RippleButton>
          <RippleButton
            className={`${swiperButtonClasses} pointer-events-auto`}
            onClick={() => setShowProjectInfo((prev) => !prev)}
          >
            {showProjectInfo ? "Close Info" : "About This Project"}
          </RippleButton>
        </div>
        <GameModalSlideout
          setShowProjectInfo={setShowProjectInfo}
          showProjectInfo={showProjectInfo}
        />
      </div>
    </Modal>
  );
};

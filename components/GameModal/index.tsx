import { useState } from "react";
import Modal from "react-modal";
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
        />
        <div className="w-full h-100-accom absolute bottom-0 flex justify-between items-end p-12 pointer-events-none z-10">
          <button
            className={`${swiperButtonClasses} pointer-events-auto`}
            onClick={handleModalClose}
          >
            Quit Game
          </button>
          <button
            className={`${swiperButtonClasses} pointer-events-auto`}
            onClick={() => setShowProjectInfo((prev) => !prev)}
          >
            About This Projects
          </button>
        </div>
        <div
          className="h-100-accom w-screen absolute inset-0"
          onClick={() => setShowProjectInfo(false)}
        >
          <aside
            className={`absolute right-0 top-0 h-full w-1/3 transition-all duration-300 ease-out bg-red-200 z-20 pointer-events-auto ${
              showProjectInfo ? "translate-x-0" : "translate-x-full"
            }`}
          >
            hello world
          </aside>
        </div>
      </div>
    </Modal>
  );
};

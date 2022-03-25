import Modal from "react-modal";
import { swiperButtonClasses } from "../SlidesNav";

export type GameModalProps = {
  showGame: boolean;
  revealGame: boolean;
  handleAfterModalOpen: () => void;
  handleModalClose: () => void;
}

export const GameModal = ({showGame, handleAfterModalOpen, revealGame, handleModalClose}: GameModalProps) => {
  return(
    <Modal isOpen={showGame} onAfterOpen={handleAfterModalOpen} className={"bottom-0 absolute w-screen h-100-accom z-20"} overlayClassName="z-20">
        <div className={`w-full h-full transition-opacity duration-700 ${revealGame ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-100-accom absolute bottom-0 flex justify-between items-end p-12 pointer-events-none">
            <button className={`${swiperButtonClasses} pointer-events-auto`} onClick={handleModalClose} >Quit Game</button>
            <button className={`${swiperButtonClasses} pointer-events-auto`}>About This Projects</button>
          </div>
          <iframe height={'100%'} width={'100%'} src='https://tapflash-77edb.web.app/' />
        </div>
      </Modal>
  )
}
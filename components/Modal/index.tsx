import { RxCross1 } from "react-icons/rx";

export const Modal: React.FC<{ show: boolean; hideModal: () => void }> = ({
  show,
  hideModal,
  children,
}) => {
  return (
    <div
      className={`modal pointer-events-none opacity-0 transition-opacity duration-200 ${
        show && "pointer-events-auto opacity-100"
      } bg-red-200 fixed inset-0 z-40`}
    >
      <button onClick={hideModal} className="right-0 absolute p-4 z-50">
        <RxCross1 size={50} />
      </button>
      <div
        className={`border-black h-full border-x-[10px] border-y-[10px] group transition-all duration-200 shadow-none hover:shadow-default `}
      >
        <div className="bg-slate-200 dark:bg-slate-600 p-4 py-2 h-full rounded overflow-scroll scale-y-[1.01] scale-x-[1.005] cursor-pointer">
          {children}
        </div>
      </div>
    </div>
  );
};

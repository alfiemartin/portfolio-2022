type GameModalSlideoutProps = {
  showProjectInfo: boolean;
  setShowProjectInfo: (val: boolean) => void;
}

export const GameModalSlideout = ({showProjectInfo, setShowProjectInfo}: GameModalSlideoutProps) => {
  return (
    <div
      className={`h-100-accom w-screen absolute inset-0 ${
        showProjectInfo ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={() => setShowProjectInfo(false)}
    >
      <aside
        className={`absolute right-0 top-0 h-full p-4 w-1/3 transition-all duration-300 ease-out bg-gray-200 dark:bg-gray-800 z-20 shadow-inner pointer-events-auto ${
          showProjectInfo ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h1>TapFlash</h1>
      </aside>
    </div>
  );
};

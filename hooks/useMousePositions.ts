import { useState, MouseEvent } from "react";

export const useMousePositionInElement = (): [
    { x: number; y: number },
    { onMouseMove: (e: MouseEvent) => void }
  ] => {
    const [positions, setPositions] = useState({ x: 0, y: 0 });
  
    const getPositions = (e: MouseEvent) => {
      const positionX = e.nativeEvent.offsetX;
      const positionY = e.nativeEvent.offsetY;
      const width = (e.target as HTMLElement).clientWidth;
      const height = (e.target as HTMLElement).clientHeight;
  
      const percentX = (width - 2 * positionX) / width;
      const percentY = (height - 2 * positionY) / height;
  
      setPositions({ x: percentX, y: percentY });
    };
  
    return [positions, { onMouseMove: (e) => getPositions(e) }];
  };
  
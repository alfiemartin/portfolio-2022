export type RippleType = {
  animationDuration?: number;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => {};
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  centeredRipple?: boolean;
  forwardRef?: React.RefObject<HTMLDivElement>;
}
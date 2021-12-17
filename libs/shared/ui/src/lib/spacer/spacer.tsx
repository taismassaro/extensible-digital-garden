export interface SpacerProps {
  size: 'small' | 'medium' | 'large';
}

export function Spacer({ size }: SpacerProps) {
  const tailwindSizes = {
    small: 'h-2',
    medium: 'h-4',
    large: 'h-6',
  };

  return <div className={tailwindSizes[size]}></div>;
}

export default Spacer;

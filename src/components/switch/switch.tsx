import { MouseEvent, ReactNode, useCallback, useState } from 'react';

export type SwitchProps = {
  className?: string;
  initialState?: boolean;
  iconsSet?: [string | ReactNode, string | ReactNode];
  bgSet?: [string, string];
  thumbBgSet?: [string, string];
  shadow?: boolean;
  onToggle?: (state: boolean) => void;
};

export const Switch = ({
  initialState,
  className,
  iconsSet = [null, null],
  bgSet = ["bg-gray-50", "bg-gray-700"],
  thumbBgSet = ["bg-gray-200", "bg-gray-500"],
  shadow,
  onToggle,
}: SwitchProps) => {
  const [isActive, setIsActive] = useState(initialState);

  const [bgOff, bgOn] = bgSet;
  const [thumbBgOff, thumbBgOn] = thumbBgSet;
  const [iconOff, iconOn] = iconsSet;

  const handleToggle = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      setIsActive((s) => !s);

      if (onToggle) {
        onToggle(!isActive);
      }
    },
    [isActive, onToggle]
  );

  return (
    <div className={className}>
      <button
        className={`relative block h-8 w-16 rounded-full transition-colors ${
          shadow ? "drop-shadow-lg" : ""
        } ${isActive ? bgOn : bgOff}`}
        onClick={(e) => handleToggle(e)}
      >
        <span
          className={`border-1 absolute top-1 transition-[left] ${
            isActive ? "left-9" : "left-1"
          } block h-6 w-6 rounded-full ${isActive ? thumbBgOn : thumbBgOff} `}
        >
          {isActive ? iconOn : iconOff}
        </span>
      </button>
    </div>
  );
};

import { useCallback, useState } from 'react';

export const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const bind = {
    onMouseEnter: useCallback(() => setHovered(true), []),
    onMouseLeave: useCallback(() => setHovered(false), []),
  };

  return { hovered, bind };
};

import { useTheme } from 'next-themes';
import React from 'react';

import { Button } from '@/components/ds';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="1"
      color="nothing"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      aria-label="toggle light and dark color theme"
      css={{ fontWeight: 'bold', fontSize: 12.5, lineHeight: 'normal', height: 'auto' }}
    >
      CHANGE THEME
    </Button>
  );
};

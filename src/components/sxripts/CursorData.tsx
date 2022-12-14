import React from 'react';
import { Box, Text } from '@/components/ds';
import { useState } from 'react';

const Value = () => {
  const [display, setDisplay] = useState('');

  React.useEffect(() => {
    const format = (num: string | number, pad: number) => {
      return num.toString().padStart(pad, '0');
    };

    const setFromEvent = (event: { clientX: string | number; clientY: string | number }) => {
      const x = format(event.clientX, 4);
      const y = format(event.clientY, 5);
      setDisplay(`X: ${x} Y: ${y}`);
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return (
    /*
     * Be sure to use a monospace font -
     * needed because the text will be constantly changing.
     */
    <Text
      css={{
        color: '$chxn4',
        fontSize: 14,
        fontFamily: '$antarcticanMono',
        fontWeight: '500',
        lineHeight: '28px',
        letterSpacing: 'normal'
      }}
    >
      {display}
    </Text>
  );
};

export const CursorData = () => {
  return (
    <Box
      css={{
        padding: 0,
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <Value />
    </Box>
  );
};

export default CursorData;

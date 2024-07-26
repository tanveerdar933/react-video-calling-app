import React from 'react';


export const ToggleElement = () => {
  return (
    <Box>
      <ToggleButton
        value="raised"
        selected={handRaised}
        onChange={handleHandRaised}
        sx={{
          borderRadius: '50%',
          border: 0,
          bgcolor: '#AAAAAA',
          color: '#3D3D3D',
          "&:hover": {
            bgcolor: '#AAAAAA',
            color: '#3D3D3D',
            filter: 'brightness(0.8)',
          },
          "&.Mui-selected": {
            bgcolor: '#FFDF00',
            color: '#3D3D3D',
            "&:hover": {
              bgcolor: '#FFDF00',
              color: '#3D3D3D',
              filter: 'brightness(0.8)',
            },
          }
        }}
      >
        <BackHandRounded />
      </ToggleButton>
    </Box>
  )
}

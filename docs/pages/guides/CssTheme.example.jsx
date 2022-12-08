import React, { useState } from 'react';
import lime from '@material-ui/core/colors/lime';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { DateTimePicker } from '@kathgironpe/material-ui-pickers';

const defaultMaterialTheme = createTheme({
  palette: {
    primary: lime,
  },
});

function CssThemeExample() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <DateTimePicker
        label="Lime DateTimePicker"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling={false}
      />
    </ThemeProvider>
  );
}

export default CssThemeExample;

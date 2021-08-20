// material core
import { createMuiTheme } from '@material-ui/core';

import dark from './dark';
import light from './light';
import typography from './typography';

const typeTheme = [light, dark];

const themes = (type: number) =>
  createMuiTheme({
    ...typeTheme[type],
    typography: { ...typography },
  });

export default themes;

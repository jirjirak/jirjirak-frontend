import { Grow, IconButton } from '@material-ui/core';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';

interface Props {
  icon?: ReactNode;
}

function AuthProviderButton({ icon }: Props): ReactElement {
  return (
    <Grow in timeout={500}>
      <IconButton>{icon}</IconButton>
    </Grow>
  );
}

export default AuthProviderButton;

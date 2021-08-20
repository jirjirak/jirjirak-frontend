// configs
import { PATH_NAME } from 'configs';
import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// selectors
import { roleSelector } from 'redux/selectors/auth.selector';

type IProps = {
  requireRoles: string[] | [];
};

const RoleRoute: FC<IProps> = ({ children, requireRoles = [] }) => {
  const history = useHistory();
  const role = useSelector(roleSelector);

  useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      history.replace(PATH_NAME.ERROR_403);
    }
  }, [history, role, requireRoles]);

  return <>{children}</>;
};

export default RoleRoute;

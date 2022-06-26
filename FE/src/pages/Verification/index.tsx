import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useIsLoggedIn } from '@hooks/useIsLoggedIn';
import { useSilentRefresh } from '@hooks/useLogin';

function Verification() {
  const isLoggedIn = useIsLoggedIn();
  const silentRefresh = useSilentRefresh();

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }

    silentRefresh('/error');
  }, [isLoggedIn]);
  return <Outlet />;
}

export default Verification;

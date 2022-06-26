import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useSilentRefresh } from '@hooks/useLogin';
import { userState } from '@recoil/atoms/user';

function Verification() {
  const user = useRecoilValue(userState);
  const silentRefresh = useSilentRefresh();

  useEffect(() => {
    if (user !== null) {
      return;
    }

    silentRefresh('/error');
  }, [user]);
  return <Outlet />;
}

export default Verification;

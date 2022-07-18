import { css } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Loader } from '@components/Indicator/Loader';
import ButtonPage from '@pages/ButtonPage';
import Callback from '@pages/Callback';
import IconPage from '@pages/IconPage';
import NotFound from '@pages/NotFound';
import Verification from '@pages/Verification';
import { alignPosXY } from '@styles/mixin';

const LoginPage = lazy(() => import('@pages/Login'));
const Layout = lazy(() => import('@components/Layout'));
const IssuePage = lazy(() => import('@pages/IssuePage'));
const IssueDetailPage = lazy(() => import('@pages/IssuePage/Detail'));
const LabelPage = lazy(() => import('@pages/LabelPage'));
const MilestonePage = lazy(() => import('@pages/MilestonePage'));
const AccessDeniedPage = lazy(() => import('@pages/AccessDeniedPage'));

export default function Router() {
  return (
    <BrowserRouter>
      <div
        css={css`
          ${alignPosXY('fixed')}
        `}
      >
        <Suspense fallback={<Loader text="데이터 수신 중입니다." size={16} />}>
          <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route element={<Verification />}>
              <Route path="/issue" element={<Layout />}>
                <Route index element={<IssuePage />} />
                <Route path="new" element={<IssueDetailPage />} />
                <Route path=":id" element={<IssueDetailPage />} />
                {/**/}
                <Route path="label" element={<LabelPage />} />
                <Route path="milestone" element={<MilestonePage />} />
              </Route>
            </Route>

            <Route path="/icons" element={<IconPage />} />
            <Route path="/buttons" element={<ButtonPage />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/error" element={<AccessDeniedPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

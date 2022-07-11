import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@components/Layout';
import AccessDeniedPage from '@pages/AccessDeniedPage';
import ButtonPage from '@pages/ButtonPage';
import Callback from '@pages/Callback';
import IconPage from '@pages/IconPage';
import IssuePage from '@pages/IssuePage';
import IssueDetailPage from '@pages/IssuePage/Detail';
import LabelPage from '@pages/LabelPage';
import Login from '@pages/Login';
import Milestone from '@pages/MilestonePage';
import NotFound from '@pages/NotFound';
import Verification from '@pages/Verification';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Verification />}>
          <Route path="/issue" element={<Layout />}>
            <Route index element={<IssuePage />} />
            <Route path="new" element={<IssueDetailPage />} />
            <Route path=":id" element={<IssueDetailPage />} />
            {/**/}
            <Route path="label" element={<LabelPage />} />
            <Route path="milestone" element={<Milestone />} />
          </Route>
        </Route>

        <Route path="/icons" element={<IconPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/error" element={<AccessDeniedPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

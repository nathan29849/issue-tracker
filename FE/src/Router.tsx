import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@components/Layout';
import ButtonPage from '@pages/ButtonPage';
import Callback from '@pages/Callback';
import IconPage from '@pages/IconPage';
import IssuePage from '@pages/IssuePage';
import IssueDetailPage from '@pages/IssuePage/Deatil';
import LabelPage from '@pages/LabelPage';
import Login from '@pages/Login';
import Milestone from '@pages/Milestone';
import NotFound from '@pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/issue" element={<Layout />}>
          <Route index element={<IssuePage />} />
          <Route path="new" element={<IssueDetailPage newIssue />} />
          <Route path=":issueId" element={<IssueDetailPage />} />

          {/* 아래 두개는 구조를 바꿔야 할 수도. */}
          <Route path="label" element={<LabelPage />} />
          <Route path="milestone" element={<Milestone />} />
        </Route>
        <Route path="/icons" element={<IconPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

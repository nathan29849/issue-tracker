import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout, IssueLayout } from '@components/Layout';
import ButtonPage from '@pages/ButtonPage';
import Callback from '@pages/Callback';
import IconPage from '@pages/IconPage';
import IssuePage from '@pages/IssuePage';
import NewIssue from '@pages/IssuePage/NewIssue';
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
          <Route element={<IssueLayout />}>
            <Route path=":issueId" element={<IssuePage />} />
            <Route path=":issueId/edit" element={<IssuePage />} />
            <Route path="new" element={<NewIssue />} />
            <Route index element={<IssuePage />} />
          </Route>

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

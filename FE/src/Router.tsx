import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@components/Layout';
import Issue from '@pages/Issue';
import Label from '@pages/Label';
import Login from '@pages/Login';
import Milestone from '@pages/Milestone';
import NotFound from '@pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/issue" element={<Layout />}>
          <Route index element={<Issue />} />
          <Route path="label" element={<Label />} />
          <Route path="milestone" element={<Milestone />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

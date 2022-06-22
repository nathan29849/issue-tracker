import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@components/Layout';
import ButtonPage from '@pages/ButtonPage';
import IconPage from '@pages/IconPage';
import IssuePage from '@pages/IssuePage';
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
          <Route path="label" element={<LabelPage />} />
          <Route path="milestone" element={<Milestone />} />
        </Route>
        <Route path="/icons" element={<IconPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

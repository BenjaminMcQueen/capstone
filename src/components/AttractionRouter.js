import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Attractions from './attractions/Attractions';
import EditAttractionWrapper from './attractions/EditAttractionWrapper';
import CreateAttraction from './attractions/CreateAttraction';

const AttractionRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Attractions />} />
        <Route path="/NotFound" element={<Attractions message="We couldn't find your attraction." />} />
        <Route path="/edit/:id" element={<EditAttractionWrapper />} />
        <Route path="/createAttraction" element={<CreateAttraction />} />
      </Routes>
  );
};

export default AttractionRouter;
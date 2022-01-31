import React from 'react';
import { Chrono } from 'react-chrono';
import experienceData from './ExperienceData';

const ExperienceTimeLine = () => (
  <div className="m-auto">
    <h3>Experiences</h3>
    <div className="new-line" style={{ width: '550px', height: '70vh' }}>
      <Chrono
        items={experienceData}
        mode="VERTICAL"
        cardHeight={250}
        scrollable={{ scrollbar: false }}
      />
    </div>
  </div>
);

export default ExperienceTimeLine;
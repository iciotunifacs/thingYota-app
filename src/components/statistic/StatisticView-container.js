import React from 'react';
import WaterBox from '../boxes/WaterBox';

export default function HomeView(props) {
  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
      Statistica
      <WaterBox name="ABC" />
    </div>
  )
}



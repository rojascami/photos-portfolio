import React from 'react';
import { portraitsData } from '../../lib/portraits-data'
import ImageNav from '@/components/image-nav';
const WebDesignPage = () => {
  return (
    <>
      <span className="font-bold text-4xl p-6">Photo sessions</span>

          <ImageNav images={portraitsData}></ImageNav>

    </>
  );
};

export default WebDesignPage;
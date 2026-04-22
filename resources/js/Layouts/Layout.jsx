import React from 'react';
import MegaMenu from '../Components/MegaMenu';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <main>{children}</main>
    </div>
  );
}

import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useRecoilState } from 'recoil';
import { modeState } from '../state/appState';
import React, { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [darkMode, setDarkMode] = useRecoilState(modeState);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('projects_dark_mode') === 'true';
      setDarkMode(storedDarkMode);
    }
  }, []);
  useEffect(() => {
    const BooleanMode = darkMode.toString();
    localStorage.setItem('projects_dark_mode', BooleanMode);
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>makaDev Projects</title>
        <meta name="description" content="makaDev Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div data-theme={darkMode ? 'dark' : 'light'}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

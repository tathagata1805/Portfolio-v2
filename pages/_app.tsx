import '../styles/globals.scss';
import '../styles/tailwind.scss';
import { ThemeProvider } from 'next-themes';
import React, { useState } from 'react';
import BootScreen from '../components/BootScreen';
import GitBashSplash from '../components/GitBashSplash';

function MyApp({ Component, pageProps }) {
  const [bashDone, setBashDone] = useState(false);
  const [booted, setBooted] = useState(false);

  if (!bashDone) {
    return <GitBashSplash onFinish={() => setBashDone(true)} />;
  }
  if (!booted) {
    return <BootScreen onFinish={() => setBooted(true)} />;
  }

  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system" // default "light"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

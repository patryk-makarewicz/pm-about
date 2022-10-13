import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modeState } from 'state/appState';

export const useModeLocalStorage = () => {
  const storedDarkMode = localStorage.getItem('projects_dark_mode') === 'true';
  const [modeLocal, setModeLocal] = useState(storedDarkMode);
  const [mode, setMode] = useRecoilState(modeState);

  useEffect(() => {
    const BooleanMode = modeLocal.toString();
    localStorage.setItem('projects_dark_mode', BooleanMode);
  }, [modeLocal]);

  useEffect(() => {
    if (localStorage.getItem('projects_dark_mode') === 'true') {
      setMode(true);
    } else {
      setMode(false);
    }
  }, [setMode]);

  const onChangeMode = () => {
    setModeLocal((prevState) => !prevState);
    setMode((prevState) => !prevState);
  };

  return { mode, onChangeMode };
};

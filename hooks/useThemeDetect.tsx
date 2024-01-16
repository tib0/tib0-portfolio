import { useEffect, useState } from "react";

export const useThemeDetect = () => {

  const getCurrentTheme = () => (typeof window !== 'undefined') ? 
    window.matchMedia("(prefers-color-scheme: dark)").matches :
    false;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mediaQueryListener = ((e: any) => {
    setIsDarkTheme(e.matches);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMediaQuery.addListener(mediaQueryListener);
      return () => darkThemeMediaQuery.removeListener(mediaQueryListener);
    } else {
      return () => {}
    }
  }, []);

  return isDarkTheme;
}
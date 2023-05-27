import { IconMoon } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="dark:bg-dark-blue flex justify-between bg-white p-5 shadow-sm">
      <h3 className="font-bold">Where in the world?</h3>
      <div className="flex gap-x-2">
        <IconMoon
          onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
          className="cursor-pointer"
        />
        <h3>Dark Mode</h3>
      </div>
    </header>
  );
};

export default Header;

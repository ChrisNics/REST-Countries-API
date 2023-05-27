import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

const Search = ({ setQuery }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      className={`flex max-w-xl  items-center gap-x-2 rounded-lg bg-white pl-8 shadow-sm  ${
        isFocus ? 'ring-dark-blue ring-1 dark:ring-1 dark:ring-white ' : ''
      }   dark:bg-dark-blue`}>
      <IconSearch className="text-dark-gray dark:text-white" />
      <input
        onChange={(e) => setQuery(e.currentTarget.value)}
        type="text"
        placeholder="Search for a country"
        className="placeholder:text-dark-gray w-full bg-transparent p-3 outline-none dark:placeholder:text-white"
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
      />
    </div>
  );
};

export default Search;

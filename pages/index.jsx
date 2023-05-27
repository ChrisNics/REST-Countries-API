import Search from '@/components/Search';
import Filter from '@/components/Filter';
import Card from '@/components/Card';
import countries from '../data.json';
import { useState, useMemo } from 'react';
import Lottie from 'react-lottie';
import { useDebouncedValue } from '@mantine/hooks';
import Ghost from '../public/ghost.json';
import Link from 'next/link';
import slugify from 'slugify';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Ghost,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Home = () => {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      // Check if country name matches the debounced query
      const isNameMatch =
        debouncedQuery === '' ||
        `${country.name}`.toLowerCase().includes(debouncedQuery.trim().toLowerCase());

      // Check if country region matches the filter or filter is set to 'all'
      const isRegionMatch = filter === 'all' || country.region.toLowerCase() === filter;

      // Return true only if both name and region match the filter conditions
      return isNameMatch && isRegionMatch;
    });
  }, [countries, debouncedQuery, filter]);

  return (
    <section className="bg-very-light-gray dark:bg-very-dark-blue min-h-screen">
      <div className="container mx-auto flex flex-col gap-y-10 py-5">
        <div className="flex flex-col gap-y-10">
          <Search setQuery={setQuery} />
          <Filter setFilter={setFilter} />
        </div>

        {filteredCountries.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
            {filteredCountries.map((country) => (
              <Link
                href={`/countries/${slugify(country.name, { lower: true })}`}
                key={country.name}>
                <Card country={country} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Lottie options={defaultOptions} height={400} width={400} />
            <h1 className="text-[18px]">No Countries Found</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;

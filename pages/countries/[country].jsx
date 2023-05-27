import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import Detail from '@/components/Detail';
import countries from '../../data.json';
import slugify from 'slugify';
import Lottie from 'react-lottie';
import Ghost from '../../public/ghost.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Ghost,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Country = ({ currentCountry }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Lottie options={defaultOptions} height={400} width={400} />;
  }

  return (
    <section className="bg-very-light-gray dark:bg-very-dark-blue min-h-screen">
      <div className="container mx-auto flex flex-col gap-y-10 px-3 py-5 xl:gap-y-20">
        <Link href="/">
          <button className="dark:bg-dark-blue flex w-28 items-center justify-center  gap-x-2 p-2 shadow-md">
            <IconArrowLeft />
            <h3>Back</h3>
          </button>
        </Link>

        <div className="flex flex-col gap-y-7 md:flex-row md:items-center md:justify-center md:gap-x-20 md:gap-y-0">
          <Image
            src={currentCountry?.flags?.svg}
            width={500}
            height={500}
            alt={`Flag of ${currentCountry?.flags?.svg}`}
          />
          <div className="flex flex-col gap-y-7">
            <h3 className="text-[18px] font-bold">{currentCountry.name}</h3>

            <div className="flex flex-col gap-y-7 xl:flex-row xl:gap-x-20 xl:gap-y-0">
              <div>
                <Detail title="Native Name" value={currentCountry.nativeName} />
                <Detail title="Population" value={currentCountry.population} />
                <Detail title="Region" value={currentCountry.region} />
                <Detail title="Sub Region" value={currentCountry.subRegion} />
                <Detail title="Capital" value={currentCountry.capital} />
              </div>

              <div>
                <Detail title="Top Level Domain" value={currentCountry.topLevelDomain} />
                <Detail
                  title="Currencies"
                  value={currentCountry?.currencies?.map((c) => c.name).join(', ')}
                />
                <Detail
                  title="Languages"
                  value={currentCountry?.languages?.map((l) => l.nativeName).join(', ')}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <h3 className="font-semibold">Border Countries:</h3>
              <div className="grid grid-cols-3 gap-x-3 gap-y-2">
                {currentCountry?.borders?.map((border) => (
                  <div
                    className="dark:bg-dark-blue max-w-24 p-2 text-center shadow-md"
                    key={border}>
                    {border}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticPaths = async () => {
  const paths = countries.map((country) => ({
    params: { country: slugify(country.name, { lower: true }) }
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { country } = params;
  const slugifiedName = slugify(country, { lower: true });
  const currentCountry = countries.find((c) => slugify(c.name, { lower: true }) === slugifiedName);

  if (!currentCountry) {
    return {
      redirect: {
        destination: '/'
      }
    };
  }

  return { props: { currentCountry } };
};

export default Country;

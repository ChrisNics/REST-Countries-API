import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import Detail from './Detail';

const Card = ({ country }) => {
  const {
    name,
    population,
    region,
    capital,
    flags: { svg }
  } = country;

  return (
    <Tilt>
      <div className="flex w-full max-w-sm cursor-pointer  flex-col justify-self-center bg-white shadow-sm md:justify-self-start">
        <div className="relative">
          <Image src={svg} width={500} height={500} alt={`Flag of ${name}`} />
        </div>
        <div className="dark:bg-dark-blue flex flex-col gap-y-3 bg-white p-5">
          <h3 className="text-[16px] font-bold">{name}</h3>
          <div>
            <Detail title="Population" value={population.toLocaleString()} />
            <Detail title="Region" value={region} />
            <Detail title="Capital" value={capital} />
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;

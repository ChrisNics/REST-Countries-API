const filter = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Africa',
    value: 'africa'
  },
  {
    label: 'Americas',
    value: 'americas'
  },
  {
    label: 'Asia',
    value: 'asia'
  },
  {
    label: 'Europe',
    value: 'europe'
  },
  {
    label: 'Oceania',
    value: 'oceania'
  }
];

const Filter = ({ setFilter }) => {
  return (
    <div>
      <select
        onChange={(e) => setFilter(e.target.value)}
        name="countries"
        id="countries"
        className="dark:bg-dark-blue w-48 cursor-pointer bg-white px-5 py-3">
        <option value="" selected disabled hidden>
          Filter by Region
        </option>
        {filter.map((f) => (
          <option value={f.value} key={f.value} className="bg-red-400">
            {f.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

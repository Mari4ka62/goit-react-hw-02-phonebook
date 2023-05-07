export default function Filter({ filterData, onChange }) {
  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" onChange={onChange} name="filter" value={filterData} />
    </div>
  );
}

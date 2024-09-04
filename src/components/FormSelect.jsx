const FormSelect = ({ label, name, list, value, size, onChange }) => {
  return (
    <label className={`flex flex-row  items-center`} htmlFor={name}>
      {label && (
        <div className="label">
          <span className="label-text capitalize mr-2">{label}</span>
        </div>
      )}
      <select
        className={`select select-bordered w-full ${size}`}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      >
        {list.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default FormSelect;

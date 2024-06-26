import { Input, Checkbox } from "@nextui-org/react";

export const ProfileInput = ({ content, label, val, isBool, onChange }) => {
  const handleChange = (e) => {
    const value = isBool ? e.target.checked : e.target.value;
    onChange(content, value);
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      {isBool ? (
        <Checkbox defaultChecked checked={val} onChange={handleChange} color="success">
          {label}
        </Checkbox>
      ) : (
        <Input label={label} value={val} onChange={handleChange} fullWidth />
      )}
    </div>
  );
};

import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}
const Filter = ({ onSelectCategory }: Props) => {
  return (
    <select
      id="category"
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      <option value="groceries">Groceries</option>
      <option value="utilities">utilities</option>
      <option value="entertainment">Entertainment</option>
    </select>
  );
};

export default Filter;

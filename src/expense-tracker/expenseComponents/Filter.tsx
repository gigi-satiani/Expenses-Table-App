import { categories } from "../../expense-tracker/Category";

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
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;

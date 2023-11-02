//import { DropdownProps } from "./filter-search";
import FilterSearch from "./filter-search";
const dropdownProps1 = {
  value: "Dropdown",
  options: ["Option 1", "Option 2", "Option 3"],
};
const dropdownProps2 = {
  value: "Dropdown",
  options: ["Option 1", "Option 2", "Option 3"],
};
const dropdownProps3 = {
  value: "Dropdown",
  options: ["Option 1", "Option 2", "Option 3"],
};
const SongList: React.FC = () => (
  <div>
    <FilterSearch {...dropdownProps1} />
  </div>
);
export default SongList;

import { InputHTMLAttributes } from "react";
import { ReactComponent as SearchIcon } from "../../assets/magnifier.svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  width?: string;
}

const SearchInput: React.FC<Props> = ({ placeholder, width, ...rest }) => {
  return (
    <form className="relative">
      <input
        type="text"
        className="w-full px-8 py-4 border border-gray-300 rounded-lg outline-none focus:border-gray-400"
        placeholder={placeholder ? placeholder : "Search"}
        style={{ width: width ? width : "30rem" }}
        {...rest}
      />

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-none w-28"
        type="button"
      >
        <SearchIcon className="text-green-700" />
      </button>
    </form>
  );
};

export default SearchInput;

import $ from "jquery";
import SelectDropdown from "./components/SelectDropdown";

$(".select-dropdown").each((index, element) => new SelectDropdown(element));

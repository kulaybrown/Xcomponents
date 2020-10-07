import $ from "jquery";

class SelectDropdown {
  constructor(element) {
    this.$element = $(element);
    this.$select = this.$element.find(".select-dropdown-label");
    this.$optionlist = this.$element.find(".select-dropdown-option");
    this.$optionItem = this.$optionlist.find(".select-dropdown-option-item");
    this.addListeners();
  }

  addListeners() {
    this.$select.on("click", this.handleToggleClass.bind(this));
    this.$optionItem.on("click", this.handleSelect.bind(this));
    $(document).on("click", (event) => {
      const $target = $(event.target);
      if (!$target.closest(".select-dropdown").is(this.$element.get(0))) {
        this.$element.removeClass("select-dropdown--open");
      }
    });
  }

  handleToggleClass() {
    this.$element.toggleClass("select-dropdown--open");
  }

  handleSelect(e) {
    const selectValue = $(e.target).text();
    this.$select.text(selectValue);
    this.handleToggleClass();
  }
}

export default SelectDropdown;

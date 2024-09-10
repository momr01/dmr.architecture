import { CustomFlowbiteTheme } from "flowbite-react";

const customThemeInput: CustomFlowbiteTheme["textInput"] = {
  field: {
    input: {
      colors: {
        base: "border-gray-300 bg-gray-100 text-black placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-primary dark:bg-primary dark:focus:border-primary dark:focus:ring-primary ",
      },
    },
  },
};

const customThemeTextarea: CustomFlowbiteTheme["textarea"] = {
  colors: {
    base: "resize-none border-gray-300 bg-gray-100 text-black placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-primary dark:bg-primary dark:focus:border-primary dark:focus:ring-primary",
  },
};

const customThemeBtn: CustomFlowbiteTheme["button"] = {
  color: {
    base: "bg-black text-white hover:bg-gray-500 focus:bg-primary focus:text-black h-11 flex items-center",
  },
};

export { customThemeBtn, customThemeInput, customThemeTextarea };

import { Switch } from '../switch/switch';
import { Text } from '../text/text';

export type Theme = "dark" | "light";

/**
 * @description
 * Get current saved theme from local storage
 * and use it in <Switch/> component to show current state
 */
const currentTheme: Theme = (() => {
  const theme = localStorage.getItem("theme") as Theme;

  if (theme) {
    return theme;
  }

  return "light";
})();

export const Header = () => {
  const handleThemeToggle = (activeState: boolean) => {
    const htmlElRef = window.document.documentElement;

    if (activeState) {
      htmlElRef.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElRef.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="grid items-center border-b border-gray-200 bg-white py-2 px-6 dark:border-gray-500 dark:bg-gray-800">
      <Text className="col-start-1 row-start-1 justify-self-center bg-gradient-to-br from-blue-600 via-pink-800 to-red-500 bg-clip-text text-3xl font-extrabold text-transparent">
        Flag Detector
      </Text>
      <Switch
        className="col-start-1 row-start-1 justify-self-end"
        initialState={currentTheme === "dark" ? true : false}
        iconsSet={["🔆", "🌙"]}
        shadow={true}
        onToggle={(state) => handleThemeToggle(state)}
      />
    </div>
  );
};

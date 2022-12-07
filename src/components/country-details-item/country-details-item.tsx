import { Text } from '../text/text';

type CountryDetailsItemProps = {
  label: string;
  value: string;
  orientation?: "vertical" | "horizontal";
};

export const CountryDetailsItem = ({
  label,
  value,
  orientation = "horizontal",
}: CountryDetailsItemProps) => {
  return (
    <div
      className={`flex gap-3 ${
        orientation === "vertical"
          ? "mb-2 flex-col gap-0 last:mb-0"
          : "mb-1 last:mb-0"
      }`}
    >
      <Text className="text-1xl font-bold text-blue-500 dark:text-blue-300">
        {label}:
      </Text>
      <Text className="text-1xl">{value}</Text>
    </div>
  );
};

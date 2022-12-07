import { format } from 'date-fns';

const YEAR_OF_CREATION = 2022;

export const Footer = () => {
  const currentYear = +format(new Date(), "yyyy");

  return (
    <div className="flex justify-center border-t border-gray-200 py-2 px-6 dark:border-gray-500">
      Flag Detector © All Right Reserver {YEAR_OF_CREATION}{" "}
      {currentYear > YEAR_OF_CREATION ? `- ${currentYear}` : ""}
    </div>
  );
};

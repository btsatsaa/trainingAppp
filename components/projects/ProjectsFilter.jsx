import React from "react";

const selectOptions = [
  "Спорт",
  "Урлаг",
  "Хэлний сургалт",
  "Боловсрол",
];
const selectOptions1 = [
  "Хан-уул",
  "Баянгол",
  "Баянзүрх",
  "Яармаг",
  "Согинохайрхан",
  "Багануур",
  "Налайх",
  "Сүхбаатар",
  "Чингэлтэй"
];

function ProjectsFilter({ setSelectedCategory, setSelectedDistrict }) {
  const handleCategoryChange = (e) => {
    const selectedCategoryValue = e.target.value.toLowerCase();
    setSelectedCategory(selectedCategoryValue === "all" ? "" : selectedCategoryValue);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictValue = e.target.value.toLowerCase();
    setSelectedDistrict(selectedDistrictValue === "all" ? "" : selectedDistrictValue);
  };

  return (
    <div className="gap-1 flex">
      <select
        onChange={handleCategoryChange}
        className="
          px-4
          sm:px-6
          py-2
          border
          dark:border-secondary-dark
          rounded-lg
          text-sm
          sm:text-md
          dark:font-medium
          bg-secondary-light
          dark:bg-ternary-dark
          text-primary-dark
          dark:text-ternary-light
        "
      >
        <option value="all" className="text-sm sm:text-md">
          Бүх ангилал
        </option>
        {selectOptions.map((option) => (
          <option className="text-normal sm:text-md" key={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>

      <select
        onChange={handleDistrictChange}
        className="
          px-4
          sm:px-6
          py-2
          border
          dark:border-secondary-dark
          rounded-lg
          text-sm
          sm:text-md
          dark:font-medium
          bg-secondary-light
          dark:bg-ternary-dark
          text-primary-dark
          dark:text-ternary-light
        "
      >
        <option value="all" className="text-sm sm:text-md">
          Бүх дүүрэг
        </option>
        {selectOptions1.map((option) => (
          <option className="text-normal sm:text-md" key={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProjectsFilter;

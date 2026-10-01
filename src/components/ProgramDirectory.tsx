"use client";

import { useState } from "react";
import { BrowseFilters, type FilterSelection } from "./BrowseFilters";
import { Button, Chip, Icon } from "./ui";

export type Program = {
  title: string;
  body: string;
  href: string;
  also: string[];
};

export type Category = {
  id: string;
  name: string;
  programs: Program[];
};

function normalize(label: string) {
  return label.toLowerCase().replace(/&/g, "and").replace(/\s+/g, " ").trim();
}

export function ProgramDirectory({ categories }: { categories: Category[] }) {
  const [selected, setSelected] = useState<FilterSelection>({});
  const supportFilters = (selected.support ?? []).map(normalize);
  const isFiltering = supportFilters.length > 0;

  const visibleCategories = isFiltering
    ? categories
        .map((category) => ({
          ...category,
          programs: category.programs.filter(
            (program) =>
              supportFilters.includes(normalize(category.name)) ||
              program.also.some((tag) => supportFilters.includes(normalize(tag))),
          ),
        }))
        .filter((category) => category.programs.length > 0)
    : categories;

  const totalPrograms = visibleCategories.reduce(
    (sum, category) => sum + category.programs.length,
    0,
  );

  return (
    <>
      <div className="flex flex-col gap-3">
        <BrowseFilters selected={selected} onChange={setSelected} />
        {isFiltering ? (
          <div
            className="flex flex-wrap items-center gap-3 text-sm text-[#1d1d1d]"
            aria-live="polite"
          >
            <p>
              Showing {totalPrograms}{" "}
              {totalPrograms === 1 ? "program" : "programs"}
            </p>
            <button
              type="button"
              onClick={() => setSelected({ ...selected, support: [] })}
              className="text-[#205c6f] underline underline-offset-2"
            >
              Clear support filters
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-12">
        {visibleCategories.length === 0 ? (
          <p className="rounded-2xl border border-[#e0e0e0] bg-white px-6 py-10 text-center text-base text-[#1d1d1d]">
            No programs match the selected support services.
          </p>
        ) : null}

        {visibleCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-[rgba(32,92,111,0.12)] px-6 py-4">
              <h2
                id={`${category.id}-heading`}
                className="font-heavy text-2xl text-[#1d1d1d]"
              >
                {category.name}
              </h2>
              <p className="shrink-0 text-sm text-[#205c6f]">
                {category.programs.length}{" "}
                {category.programs.length === 1 ? "program" : "programs"}
              </p>
            </div>

            <ul>
              {category.programs.map((program) => (
                <li
                  key={program.title}
                  className="border-t border-[#e0e0e0] px-6 py-5"
                >
                  <article className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-6">
                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                      <h3 className="font-heavy text-lg leading-6 text-[#1d1d1d]">
                        {program.title}
                      </h3>
                      {program.also.length > 0 ? (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs text-[#757575]">Also</span>
                          {program.also.map((label) => (
                            <Chip key={label}>{label}</Chip>
                          ))}
                        </div>
                      ) : null}
                      <p className="text-base leading-6 text-[#1d1d1d]">
                        {program.body}
                      </p>
                    </div>
                    <Button
                      href={program.href}
                      size="sm"
                      className="shrink-0"
                    >
                      Learn more
                      <Icon name="icon-chevron-right.svg" size={16} />
                    </Button>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

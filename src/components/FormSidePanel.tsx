"use client";

import { useState } from "react";
import { Button, Icon } from "./ui";

export type SidePanelKind = "reviews" | "notes";

const titles: Record<SidePanelKind, string> = {
  reviews: "Reviews",
  notes: "Notes",
};

export function FormSidePanel({
  open,
  kind,
  onClose,
}: {
  open: boolean;
  kind: SidePanelKind;
  onClose: () => void;
}) {
  return (
    <div
      className={`sticky top-4 shrink-0 self-start overflow-hidden transition-[width] duration-300 ease-out motion-reduce:transition-none ${
        open ? "w-[473px]" : "w-0"
      }`}
    >
      <aside
        id="form-side-panel"
        aria-label={titles[kind]}
        inert={!open}
        className={`ml-4 flex h-[calc(100vh-72px-32px)] w-[457px] flex-col border border-[#e0e0e0] bg-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-[#e0e0e0] px-6">
          <h2 className="font-heavy text-lg leading-6 text-[#1d1d1d]">
            {titles[kind]}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${titles[kind].toLowerCase()}`}
            className="rounded-[4px] p-0.5 hover:bg-[#f3f6fa]"
          >
            <Icon name="icon-close.svg" size={24} />
          </button>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto">
          {kind === "reviews" ? <ReviewsContent /> : <NotesContent />}
        </div>
      </aside>
    </div>
  );
}

const fieldBox =
  "w-full border-b border-[#9e9e9e] bg-[#eee] p-4 text-base text-[#1d1d1d] outline-none placeholder:text-[#9e9e9e] focus:border-[#205c6f]";

const yesNoOptions = ["Yes, this is the way", "No, you are clearly mistaken"];

function ReviewsContent() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [yesNo, setYesNo] = useState(yesNoOptions[0]);
  const [longText, setLongText] = useState("");

  function clearAll() {
    setQuestion1("");
    setQuestion2("");
    setYesNo("");
    setLongText("");
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-6 p-4"
    >
      <div className="flex items-start justify-between gap-10">
        <p className="text-base leading-6 text-[#1d1d1d]">
          Jerica Johnstone | Oct-15, 2026
        </p>
        <span className="inline-flex shrink-0 items-center rounded-[4px] bg-[#1d1d1d]/15 px-3 py-1.5 text-sm leading-[18px] text-[#1d1d1d]">
          Draft
        </span>
      </div>

      <label className="flex flex-col gap-2.5">
        <span className="text-lg leading-6 text-[#1d1d1d]">
          Review question 1
        </span>
        <div className="relative">
          <select
            value={question1}
            onChange={(e) => setQuestion1(e.target.value)}
            className={`${fieldBox} appearance-none pr-12`}
          >
            <option value="">Make a selection</option>
            <option value="Meets criteria">Meets criteria</option>
            <option value="Needs more information">Needs more information</option>
            <option value="Does not meet criteria">Does not meet criteria</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <Icon name="icon-chevron-down-field.svg" size={24} />
          </span>
        </div>
      </label>

      <label className="flex flex-col gap-2.5">
        <span className="text-lg leading-6 text-[#1d1d1d]">
          Review question 2
        </span>
        <input
          type="number"
          min={0}
          max={100}
          inputMode="numeric"
          value={question2}
          onChange={(e) => setQuestion2(e.target.value)}
          placeholder="e.g. Enter a number from 0 - 100"
          className={fieldBox}
        />
      </label>

      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-2.5 text-lg leading-6 text-[#1d1d1d]">
          This is a yes/no question
        </legend>
        <div className="flex flex-col gap-2">
          {yesNoOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-4 bg-[#f3f6fa] px-4 py-4 text-base leading-6 text-[#1d1d1d]"
            >
              <input
                type="radio"
                name="yes-no-question"
                value={option}
                checked={yesNo === option}
                onChange={() => setYesNo(option)}
                className="size-5 accent-[#205c6f]"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2.5">
        <span className="text-lg leading-6 text-[#1d1d1d]">Long text input</span>
        <textarea
          value={longText}
          onChange={(e) => setLongText(e.target.value)}
          className={`${fieldBox} min-h-[182px] resize-y`}
        />
      </label>

      <button
        type="button"
        onClick={clearAll}
        className="w-fit text-sm text-[#205c6f] hover:underline"
      >
        Clear all fields
      </button>

      <div className="flex items-center justify-end gap-2">
        <Button variant="secondary" size="sm">
          Save as draft
        </Button>
        <Button type="submit" size="sm">
          Save
        </Button>
      </div>
    </form>
  );
}

function NotesContent() {
  const [note, setNote] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setNote("");
      }}
      className="flex flex-col gap-10 p-4"
    >
      <label className="flex flex-col">
        <span className="sr-only">New note</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={`${fieldBox} h-[182px] resize-y`}
        />
      </label>
      <div className="flex justify-end">
        <Button type="submit" size="sm">
          <Icon name="icon-add.svg" size={16} />
          Add note
        </Button>
      </div>
    </form>
  );
}

"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

export type WaterfallRow = {
  id: string;
  kind: "work" | "edu";
  name: string;
  org: string;
  role: string;
  type: string;
  summary: string;
  period: string;
  status: string;
  pending: boolean;
  left: number;
  width: number;
  stack: string[];
};

type Props = {
  rows: WaterfallRow[];
  /** Year labels along the axis, one per year */
  years: number[];
  defaultId: string;
  labels: {
    list: string;
    columns: { name: string; status: string; type: string; time: string };
    role: string;
    org: string;
    period: string;
    stack: string;
  };
};

const COLUMNS = "lg:grid-cols-[minmax(0,15rem)_4.5rem_9rem_11rem_minmax(0,1fr)]";

export function Waterfall({ rows, years, defaultId, labels }: Props) {
  const [selectedId, setSelectedId] = useState(defaultId);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = rows.find((row) => row.id === selectedId) ?? rows[rows.length - 1];
  const axis = { "--years": years.length } as CSSProperties;

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = rows.length - 1;
    const next =
      event.key === "ArrowDown"
        ? Math.min(index + 1, last)
        : event.key === "ArrowUp"
          ? Math.max(index - 1, 0)
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setSelectedId(rows[next].id);
    tabs.current[next]?.focus();
  }

  return (
    <div className="font-mono text-xs">
      <div
        aria-hidden="true"
        className={`hidden gap-x-4 border-b border-paper/20 px-3 pb-2 text-dim lg:grid ${COLUMNS}`}
      >
        <span>{labels.columns.name}</span>
        <span>{labels.columns.status}</span>
        <span>{labels.columns.type}</span>
        <span>{labels.columns.time}</span>
        <span className="flex">
          {years.map((year) => (
            <span key={year} className="flex-1 border-l border-paper/20 pl-1">
              <span className={year % 2 === 0 ? "" : "hidden xl:inline"}>
                ’{String(year).slice(2)}
              </span>
            </span>
          ))}
        </span>
      </div>

      <div role="tablist" aria-orientation="vertical" aria-label={labels.list}>
        {rows.map((row, index) => {
          const active = row.id === selected.id;
          return (
            <button
              key={row.id}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`request-${row.id}`}
              aria-selected={active}
              aria-controls="request-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => setSelectedId(row.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-b border-paper/10 px-3 py-3 text-left transition-colors lg:py-2 ${COLUMNS} ${
                active ? "bg-ink-2 text-paper" : "text-dim hover:bg-ink-2/60 hover:text-paper"
              }`}
            >
              <span className="truncate text-sm lg:text-xs">
                <span aria-hidden="true" className={active ? "text-signal" : "opacity-0"}>
                  ▸{" "}
                </span>
                {row.name}
              </span>
              <span className={`hidden lg:block ${row.pending ? "blink text-signal" : "text-plus-bright"}`}>
                {row.status}
              </span>
              <span className="hidden truncate lg:block">{row.type}</span>
              <span className="whitespace-nowrap">{row.period}</span>
              <span className="track col-span-2 lg:col-span-1" style={axis}>
                <span
                  className="bar"
                  data-kind={row.kind}
                  data-pending={row.pending}
                  style={{ left: `${row.left}%`, width: `${row.width}%`, "--i": index } as CSSProperties}
                />
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="request-panel"
        aria-labelledby={`request-${selected.id}`}
        tabIndex={0}
        className="px-3 pt-8"
      >
        <div key={selected.id} className="panel-in grid gap-8 lg:grid-cols-12">
          <dl className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 self-start text-sm lg:col-span-5">
            <dt className="text-dim">{labels.role}:</dt>
            <dd>{selected.role}</dd>
            <dt className="text-dim">{labels.org}:</dt>
            <dd>{selected.org}</dd>
            <dt className="text-dim">{labels.period}:</dt>
            <dd>{selected.period}</dd>
            {selected.stack.length > 0 && (
              <>
                <dt className="text-dim">{labels.stack}:</dt>
                <dd>{selected.stack.join(", ")}</dd>
              </>
            )}
          </dl>
          <p className="display max-w-[30ch] text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:col-span-7">
            {selected.summary}
          </p>
        </div>
      </div>
    </div>
  );
}

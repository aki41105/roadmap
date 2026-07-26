import { useId } from "react";
import type { FormEvent, ReactNode } from "react";
import { joinClassNames } from "./utils";

export interface FilterOption {
  value: string;
  label: ReactNode;
  count?: number;
  disabled?: boolean;
}

export interface FilterGroup {
  id: string;
  legend: ReactNode;
  options: readonly FilterOption[];
  selectedValues: readonly string[];
  multiple?: boolean;
}

export interface FilterBarProps {
  groups: readonly FilterGroup[];
  resultCount: number;
  totalCount?: number;
  resultNoun?: string;
  onGroupChange: (groupId: string, selectedValues: string[]) => void;
  onReset?: () => void;
  resetLabel?: string;
  labelledBy?: string;
  className?: string;
  controlsId?: string;
  children?: ReactNode;
}

export function FilterBar({
  groups,
  resultCount,
  totalCount,
  resultNoun = "件",
  onGroupChange,
  onReset,
  resetLabel = "絞り込みを解除",
  labelledBy,
  className,
  controlsId,
  children,
}: FilterBarProps) {
  const generatedId = useId().replaceAll(":", "");

  function updateCheckbox(
    group: FilterGroup,
    value: string,
    checked: boolean,
  ) {
    const selected = new Set(group.selectedValues);
    if (checked) {
      selected.add(value);
    } else {
      selected.delete(value);
    }
    onGroupChange(group.id, [...selected]);
  }

  function handleReset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onReset?.();
  }

  return (
    <form
      className={joinClassNames("rm-filter-bar", className)}
      aria-labelledby={labelledBy}
      onSubmit={(event) => event.preventDefault()}
      onReset={handleReset}
    >
      <div className="rm-filter-bar__groups">
        {groups.map((group) => (
          <fieldset className="rm-filter-group" key={group.id}>
            <legend className="rm-filter-group__legend">{group.legend}</legend>
            <div className="rm-filter-group__options">
              {group.options.map((option) => {
                const inputId = `${generatedId}-${group.id}-${option.value}`
                  .replaceAll(/\s+/g, "-")
                  .replaceAll(/[^a-zA-Z0-9_-]/g, "");
                const checked = group.selectedValues.includes(option.value);

                return (
                  <label
                    className={joinClassNames(
                      "rm-filter-option",
                      checked && "rm-filter-option--selected",
                    )}
                    htmlFor={inputId}
                    key={option.value}
                  >
                    <input
                      id={inputId}
                      name={`filter-${generatedId}-${group.id}`}
                      type={group.multiple === false ? "radio" : "checkbox"}
                      value={option.value}
                      checked={checked}
                      disabled={option.disabled}
                      aria-controls={controlsId}
                      onChange={(event) => {
                        if (group.multiple === false) {
                          onGroupChange(group.id, [option.value]);
                        } else {
                          updateCheckbox(
                            group,
                            option.value,
                            event.currentTarget.checked,
                          );
                        }
                      }}
                    />
                    <span>{option.label}</span>
                    {option.count !== undefined ? (
                      <span className="rm-filter-option__count">
                        <span className="rm-visually-hidden">該当 </span>
                        {option.count}
                      </span>
                    ) : null}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      {children ? <div className="rm-filter-bar__extra">{children}</div> : null}
      <div className="rm-filter-bar__footer">
        <p
          className="rm-filter-bar__result"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {totalCount !== undefined ? (
            <>
              全{totalCount}
              {resultNoun}中、<strong>{resultCount}</strong>
              {resultNoun}を表示
            </>
          ) : (
            <>
              <strong>{resultCount}</strong>
              {resultNoun}を表示
            </>
          )}
        </p>
        {onReset ? (
          <button className="rm-filter-bar__reset" type="reset">
            {resetLabel}
          </button>
        ) : null}
      </div>
    </form>
  );
}

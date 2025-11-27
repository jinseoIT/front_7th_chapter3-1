import React, { useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export interface Column<T = Record<string, unknown>> {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
}

const tableContainerVariants = cva("w-full overflow-x-auto");

const tableVariants = cva(
  "w-full border-collapse text-sm text-left",
  {
    variants: {
      striped: {
        true: "[&_tbody_tr:nth-child(odd)]:bg-gray-50",
      },
      bordered: {
        true: "border border-gray-200",
      },
      hover: {
        true: "[&_tbody_tr:hover]:bg-gray-100",
      },
    },
  }
);

const searchInputVariants = cva(
  "w-full max-w-sm px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
);

const paginationContainerVariants = cva(
  "flex items-center justify-center gap-2 mt-4 py-3"
);

const paginationButtonVariants = cva(
  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
  {
    variants: {
      disabled: {
        true: "bg-gray-100 text-gray-400 cursor-not-allowed",
        false: "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export interface TableProps<T = Record<string, unknown>> extends VariantProps<typeof tableVariants> {
  columns?: Column<T>[];
  data?: T[];
  pageSize?: number;
  searchable?: boolean;
  sortable?: boolean;
  onRowClick?: (row: T) => void;
  className?: string;
}

export const Table = <T extends Record<string, unknown> = Record<string, unknown>>({
  columns,
  data = [],
  striped = false,
  bordered = false,
  hover = false,
  pageSize = 10,
  searchable = false,
  sortable = false,
  onRowClick,
  className,
}: TableProps<T>) => {
  const [tableData, setTableData] = useState<T[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleSort = (columnKey: string) => {
    if (!sortable) return;

    const newDirection = sortColumn === columnKey && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(columnKey);
    setSortDirection(newDirection);

    const sorted = [...tableData].sort((a, b) => {
      const aVal = a[columnKey];
      const bVal = b[columnKey];

      if (typeof aVal === "number" && typeof bVal === "number") {
        return newDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      return newDirection === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });

    setTableData(sorted);
  };

  const filteredData =
    searchable && searchTerm
      ? tableData.filter((row) =>
          Object.values(row).some((val) => String(val).toLowerCase().includes(searchTerm.toLowerCase()))
        )
      : tableData;

  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const actualColumns: Column<T>[] =
    columns || (tableData[0] ? Object.keys(tableData[0]).map((key) => ({ key, header: key })) : []);

  const renderCell = (row: T, column: Column<T>) => {
    const value = row[column.key];

    // 커스텀 렌더러가 있으면 사용
    if (column.render) {
      return column.render(value, row);
    }

    // React Element면 그대로 렌더링
    if (React.isValidElement(value)) {
      return value;
    }

    return String(value ?? "");
  };

  return (
    <div className={tableContainerVariants()}>
      {searchable && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={searchInputVariants()}
          />
        </div>
      )}

      <table className={tableVariants({ striped, bordered, hover, className })}>
        <thead className="bg-gray-100 border-b-2 border-gray-300">
          <tr>
            {actualColumns.map((column) => (
              <th
                key={column.key}
                style={column.width ? { width: column.width } : undefined}
                onClick={() => sortable && column.sortable !== false && handleSort(column.key)}
                className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                <div
                  className={`flex items-center gap-1 ${
                    sortable && column.sortable !== false ? "cursor-pointer select-none hover:text-gray-900" : "cursor-default"
                  }`}
                >
                  {column.header}
                  {sortable && sortColumn === column.key && (
                    <span className="text-blue-600">{sortDirection === "asc" ? "↑" : "↓"}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              className={onRowClick ? "cursor-pointer transition-colors" : "cursor-default"}
            >
              {actualColumns.map((column) => (
                <td key={column.key} className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                  {renderCell(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {paginatedData.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          데이터가 없습니다.
        </div>
      )}

      {totalPages > 1 && (
        <div className={paginationContainerVariants()}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={paginationButtonVariants({ disabled: currentPage === 1 })}
          >
            이전
          </button>
          <span className="py-1.5 px-3 text-sm text-gray-700">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={paginationButtonVariants({ disabled: currentPage === totalPages })}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
};

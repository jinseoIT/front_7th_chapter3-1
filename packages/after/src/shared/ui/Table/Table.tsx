import React, { useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge } from "../Badge";
import { Button as ButtonCustom } from "../Button";

interface Column {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
}

const tableContainerVariants = cva("table-container");

const tableVariants = cva("table", {
  variants: {
    striped: {
      true: "table-striped",
    },
    bordered: {
      true: "table-bordered",
    },
    hover: {
      true: "table-hover",
    },
  },
});

const searchInputVariants = cva("table-search-input");

const paginationContainerVariants = cva("table-pagination");

const paginationButtonVariants = cva("table-pagination-button", {
  variants: {
    disabled: {
      true: "disabled",
    },
  },
});

// 🚨 Bad Practice: UI 컴포넌트가 도메인 타입을 알고 있음
export interface TableProps extends VariantProps<typeof tableVariants> {
  columns?: Column[];
  data?: any[];
  pageSize?: number;
  searchable?: boolean;
  sortable?: boolean;
  onRowClick?: (row: any) => void;
  className?: string;

  // 🚨 도메인 관심사 추가
  entityType?: "user" | "post";
  onEdit?: (item: any) => void;
  onDelete?: (id: number) => void;
  onPublish?: (id: number) => void;
  onArchive?: (id: number) => void;
  onRestore?: (id: number) => void;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data = [],
  striped = false,
  bordered = false,
  hover = false,
  pageSize = 10,
  searchable = false,
  sortable = false,
  onRowClick,
  entityType,
  onEdit,
  onDelete,
  onPublish,
  onArchive,
  onRestore,
  className,
}) => {
  const [tableData, setTableData] = useState<any[]>(data);
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

  const actualColumns =
    columns || (tableData[0] ? Object.keys(tableData[0]).map((key) => ({ key, header: key, width: undefined })) : []);

  // 🚨 Bad Practice: Table 컴포넌트가 도메인별 렌더링 로직을 알고 있음
  const renderCell = (row: any, columnKey: string) => {
    const value = row[columnKey];

    // 도메인별 특수 렌더링
    if (entityType === "user") {
      if (columnKey === "role") {
        return <Badge userRole={value} />;
      }
      if (columnKey === "status") {
        // User status를 Badge status로 변환
        const badgeStatus = value === "active" ? "published" : value === "inactive" ? "draft" : "rejected";
        return <Badge status={badgeStatus} />;
      }
      if (columnKey === "lastLogin") {
        return value || "-";
      }
      if (columnKey === "actions") {
        return (
          <div className="flex gap-2">
            <ButtonCustom size="sm" variant="primary" onClick={() => onEdit?.(row)}>
              수정
            </ButtonCustom>
            <ButtonCustom size="sm" variant="danger" onClick={() => onDelete?.(row.id)}>
              삭제
            </ButtonCustom>
          </div>
        );
      }
    }

    if (entityType === "post") {
      if (columnKey === "category") {
        const type =
          value === "development"
            ? "primary"
            : value === "design"
            ? "info"
            : value === "accessibility"
            ? "danger"
            : "secondary";
        return (
          <Badge type={type} pill>
            {value}
          </Badge>
        );
      }
      if (columnKey === "status") {
        return <Badge status={value} />;
      }
      if (columnKey === "views") {
        return value?.toLocaleString() || "0";
      }
      if (columnKey === "actions") {
        return (
          <div className="flex gap-2 flex-wrap">
            <ButtonCustom size="sm" variant="primary" onClick={() => onEdit?.(row)}>
              수정
            </ButtonCustom>
            {row.status === "draft" && (
              <ButtonCustom size="sm" variant="success" onClick={() => onPublish?.(row.id)}>
                게시
              </ButtonCustom>
            )}
            {row.status === "published" && (
              <ButtonCustom size="sm" variant="secondary" onClick={() => onArchive?.(row.id)}>
                보관
              </ButtonCustom>
            )}
            {row.status === "archived" && (
              <ButtonCustom size="sm" variant="primary" onClick={() => onRestore?.(row.id)}>
                복원
              </ButtonCustom>
            )}
            <ButtonCustom size="sm" variant="danger" onClick={() => onDelete?.(row.id)}>
              삭제
            </ButtonCustom>
          </div>
        );
      }
    }

    // React Element면 그대로 렌더링
    if (React.isValidElement(value)) {
      return value;
    }

    return value;
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
            className={`${searchInputVariants()} p-2 px-3 border border-gray-300 rounded w-[300px]`}
          />
        </div>
      )}

      <table className={tableVariants({ striped, bordered, hover, className })}>
        <thead>
          <tr>
            {actualColumns.map((column) => (
              <th
                key={column.key}
                style={column.width ? { width: column.width } : undefined}
                onClick={() => sortable && handleSort(column.key)}
              >
                <div
                  className={`flex items-center gap-1 ${sortable ? "cursor-pointer" : "cursor-default"}`}
                >
                  {column.header}
                  {sortable && sortColumn === column.key && <span>{sortDirection === "asc" ? "↑" : "↓"}</span>}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={() => onRowClick?.(row)} className={onRowClick ? "cursor-pointer" : "cursor-default"}>
              {actualColumns.map((column) => (
                <td key={column.key}>{entityType ? renderCell(row, column.key) : row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className={paginationContainerVariants()}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={paginationButtonVariants({ disabled: currentPage === 1 })}
          >
            이전
          </button>
          <span className="py-1.5 px-3">
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

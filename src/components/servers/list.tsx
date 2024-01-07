"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  OpenInNewWindowIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table as ReactTable,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Row as ReactTableRow,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ServerComponentProps } from "@/app/servers/page";
import { DefaultServer, Server, statusToEmoji, statusToText } from "@/types/server";
import Link from "next/link";
import { uuid } from "uuidv4";

const data: Server[] = [
  DefaultServer(),
  DefaultServer(),
  DefaultServer(),
  DefaultServer(),
];



export const columns: ColumnDef<Server>[] = [
  {
    accessorKey: "status",
    header: "",
    cell: (
      { row }
    ) => (
      
        <span className="pl-2" title={statusToText(row.getValue("status"))}>{statusToEmoji(row.getValue("status"))}</span>
    ),
  },
  {
    id: "org_name",
    accessorKey: "org_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Organization
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("org_name")}</div>
    ),
  },
  {
    id: "server_name",
    accessorKey: "server_name",
    header: () => <div className="text-center">Server Name</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.getValue("server_name")}
        </div>
      );
    },
  },
  {
    id: "last_activity",
    accessorKey: "last_activity",
    header: () => <div className="text-right">Last Activity</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.getValue("last_activity")}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="serverListActions">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/logs/${row.original.id}`}>Connect</Link>
              <DropdownMenuShortcut>
                <Link href={`/logs/${row.original.id}`}>
                  <OpenInNewWindowIcon width="1rem" height="1rem" />
                </Link>
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy server ID
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/logs/${row.original.id}`}>View Logs</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/events/${row.original.id}`}>View Events</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/customers/${row.original.org_id}`} target="_blank">
                View Customer
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function ServerList({server, setServer}: ServerComponentProps) {

/// Sets the current server to be displayed in the details section.
/// Also highlights the row currently displayed.
function setCurrentServer(newServer: Server, table: ReactTable<Server>) {
  setServer(newServer);
  table.getRowModel().rows.forEach((row: ReactTableRow<Server>) => {
    if (row.getIsSelected()) row.toggleSelected();
    if(row.original.id === server.id) row.toggleSelected();
  });
}
  data.push({
    id: uuid(),
    status: 1,
    org_name: "TEST_ORG",
    server_name: "TEST",
    org_id: uuid(),
    last_activity: "05:17",
    system_info: {
      os_type: "ubuntu",
      version: "21.3.9"
    }
  })


  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full h-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter"
          value={
            (table.getColumn("server_name")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("server_name")?.setFilterValue(event.target.value)
          }
          className="w-1/2"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border h-4/6">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="px-0" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onDoubleClick={() => {
                    setCurrentServer(row.original, table);
                  }}
                  className="select-none"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground"></div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

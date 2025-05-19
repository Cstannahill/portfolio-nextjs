"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SummaryItem {
  category: string;
  rank: string;
  notes: string;
}

interface SummaryTableProps {
  items: SummaryItem[];
  title?: string;
}

export function SummaryTable({ items, title }: SummaryTableProps) {
  return (
    <div className="my-6">
      {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
      <div className="border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 dark:bg-muted/20">
              <TableHead className="w-[200px] font-semibold">
                Category
              </TableHead>
              <TableHead className="w-[100px] font-semibold">Rank</TableHead>
              <TableHead className="font-semibold">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={index}
                className="border-border hover:bg-muted/30 dark:hover:bg-muted/10"
              >
                <TableCell className="font-medium">{item.category}</TableCell>
                <TableCell className="font-medium">{item.rank}</TableCell>
                <TableCell className="text-muted-foreground">
                  {item.notes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

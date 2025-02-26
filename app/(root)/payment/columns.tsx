"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  status: "pending" | "processing" | "success" | "failed"
  email: string | null | undefined
  name: string
  phone: string
  query: string
  comment: string
  date: string
  gst: boolean
  wholesaller: boolean
  drug_liscence: boolean
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "date",
    header: "Date",
  }, 
  {
    accessorKey: "name",
    header: "Name",
  }, 
  {
    accessorKey: "query",
    header: "Query",    
    cell: ({ row }) => {
        const Query = row.getValue("query") as string;
        return (
          <textarea 
            className="min-h-[100px] w-full" 
            rows={5} 
            defaultValue={Query}
            readOnly
          />
        );
      }
  }, 
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <select 
            defaultValue={status}
            className="rounded-md border border-gray-200 p-2"
          >
            <option value="pending">Pending</option>
            <option value="success">Success</option>
            <option value="rejected">Rejected</option>
          </select>
        );
      }
  },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
  
  {
    accessorKey: "phone",
    header: "Phone",
  }, 
 
  
  {
    accessorKey: "gst",
    header: "GST",
  }, 
  {
    accessorKey: "wholesaller",
    header: "Wholesaller",
  },
   {
    accessorKey: "drug_liscence",
    header: "Drug Liscence",
  },
  {
    accessorKey: "comment",
    header: "Comment",
    cell: ({ row }) => {
      const comment = row.getValue("comment") as string;
      return (
        <textarea 
          className="min-h-[100px] w-full" 
          rows={5} 
          defaultValue={comment}
          readOnly
        />
      );
    }
  },
//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)
 
//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            //   onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

]

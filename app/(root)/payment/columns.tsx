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
export type IQuery = {
  _id: string
  status: "pending" | "processing" | "success" | "failed"
  email: string | null | undefined
  name: string
  phone: string
  products: string[]
  comment: string
  date: string
  gst: boolean
  wholesaller: boolean
  drug_liscence: boolean
}

export const columns: ColumnDef<IQuery>[] = [
  {
    accessorKey: "updatedAt",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\//g, '-');
    }
  }, 
  {
    accessorKey: "name",
    header: "Name",
  }, 
  {
    accessorKey: "products",
    header: "Query",    
    cell: ({ row }) => {
        const Query = row.getValue("products") as string;
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
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        );
      }
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const finalEmail = row.getValue("email");
      return finalEmail || "N/A";
    }
  },
  
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      const finalPhone = row.getValue("phone");
      return finalPhone || "N/A";
    }
  }, 
 
  
  {
    accessorKey: "gst",
    header: "GST",
  }, 
  {
    accessorKey: "wholesaler",
    header: "wholesaler",
  },
   {
    accessorKey: "drug_license",
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

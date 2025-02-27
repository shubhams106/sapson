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
import { useState, useTransition } from "react"
import { editQuery } from "@/lib/actions/query.action"
import { toast } from "@/hooks/use-toast"
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

const CommentCell = ({ row }: { row: any }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(row.getValue("comment") as string);
  const [isPending, startTransition] = useTransition();

  const handleSaveEdit = async () => {
    startTransition(async () => {
     await editQuery({
      queryId: row.original._id,
      comment: editedComment,
    });
    toast({
      title: "Success",
      description: "Edited successfully"
    });
    setIsEditing(false);
    });
  };

  return (
    <div className="min-w-[300px] flex flex-col gap-2">
      <textarea 
        className="min-h-[150px] w-full" 
        rows={5} 
        defaultValue={editedComment}
        onChange={(e) => setEditedComment(e.target.value)}
        readOnly={!isEditing}
      />
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
        {isEditing && (
          <Button 
            variant="default"
            onClick={handleSaveEdit}
            disabled={isPending}

          >
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        )}
      </div>
    </div>
  );
};

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
          <div className="min-w-[300px]">
          <textarea 
            className="min-h-[150px] w-full" 
            rows={5} 
            defaultValue={Query}
            readOnly
          />
          </div>
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
    accessorKey: "comment",
    header: "Comment",
    cell: ({ row }) => <CommentCell row={row} />
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
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const finalEmail = row.getValue("email");
      return finalEmail || "N/A";
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

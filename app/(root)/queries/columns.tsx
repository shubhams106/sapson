"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { useState, useTransition } from "react"
import { editQuery } from "@/lib/actions/query.action"
import { toast } from "@/hooks/use-toast"
// export type IQuery = {
//   _id: string
//   status: "pending" | "success" | "failed"
//   email: string | null | undefined
//   name: string
//   phone: string
//   products: string[]
//   comment: string
//   date: string
//   gst: boolean
//   wholesaller: boolean
//   drug_liscence: boolean
// }

const CommentCell = ({ row, cellName }: { row: any, cellName: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(row.getValue("comment") as string);
  const [editedStatus, setEditedStatus] = useState(row.getValue("status") as string);
  const [isPending, startTransition] = useTransition();

  const handleSaveEdit = async () => {
    startTransition(async () => {
     await editQuery({
      queryId: row.original._id,
      comment: editedComment,
      status: editedStatus as "pending" | "approved" | "rejected",
    });
    toast({
      title: "Success",
      description: "Edited successfully"
    });
    setIsEditing(false);
    });
  };

  return (
    <>
      {cellName === 'comment' ?
    <div className="min-w-[300px] flex flex-col gap-2">

      <textarea 
        className="min-h-[150px] w-full" 
        rows={5} 
        defaultValue={cellName === "comment" ? editedComment : editedStatus}
        onChange={(e) => {
          if(cellName === "comment"){
            setEditedComment(e.target.value)
          } 
        }}
        readOnly={!isEditing}
      />
      </div> : 
            <select 
            defaultValue={editedStatus}
            className="rounded-md border border-gray-200 p-2"
            disabled={!isEditing}
            onChange={(e) => setEditedStatus(e.target.value as "pending" | "approved" | "rejected")}>
            
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
      
      }
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
      </>
  );
};

export const columns: ColumnDef<Query>[] = [
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
    header: "Products Query",    
    cell: ({ row }) => {
        const products = row.getValue("products") as string[];
          const formattedProducts = Array.isArray(products) 
          ? products.join("\n\n")  // Changed from ", " to "\n\n" for line breaks
          : String(products).split(",").map(item => item.trim()).join(""); // Changed here too
        return (
          <div className="min-w-[300px]">
          <textarea 
            className="min-h-[150px] w-full" 
            rows={5} 
            defaultValue={formattedProducts}
            readOnly
          />
          </div>
        );
      }
  }, 
  {
    accessorKey: "status",
    header: "Status",
   
    cell: ({ row }) => <CommentCell row={row} cellName={"status"} />

  },
  {
    accessorKey: "comment",
    header: "Comment",
    cell: ({ row }) => <CommentCell row={row} cellName={"comment"} />
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
 
  // {
  //   id: "actions",
  //   cell: () => {
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="size-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="size-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //           //   onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },

]

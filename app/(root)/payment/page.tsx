import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {

return [
    {
      id: "728ed52f",
      status: "pending",
      name: "Mehul Patel",
      email: "m@example.com",
      phone: "9876543210",
      query: "Product availability inquiry",
      comment: "Requesting bulk order details",
      date: "2024-03-20",
      gst: true,
      wholesaller: true,
      drug_liscence: true,
      
    },
    {
        id: "728ed52f",
        status: "pending",
        name: "Mehul Patel",
        email: "m@example.com",
        phone: "9876543210",
        query: "Product availability inquiry",
        comment: "Requesting bulk order details",
        date: "2024-03-20",
        gst: true,
        wholesaller: true,
        drug_liscence: true,
        
      },
      {
        id: "728ed52f",
        status: "pending",
        name: "Mehul Patel",
        email: "m@example.com",
        phone: "9876543210",
        query: "Product availability inquiry",
        comment: "Requesting bulk order details",
        date: "2024-03-20",
        gst: true,
        wholesaller: true,
        drug_liscence: true,
        
      },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

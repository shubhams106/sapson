import { columns } from "./columns"
import { DataTable } from "./data-table"

import { getQueries } from "@/lib/actions/query.action";


interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}


  const DemoPage = async ({ searchParams }: SearchParams) => {
    const { page, pageSize, query, filter } = await searchParams;
    const { success, data, error } = await getQueries({
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
      query: query || "",
      filter: filter || "",
    });

    const { queries } = data || {};
    console.log(queries, 'yeh from api')
  // const dataa = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={queries} />
    </div>
  )
}
export default DemoPage
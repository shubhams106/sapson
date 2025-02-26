import { columns } from "./columns"
import { DataTable } from "./data-table"

import DataRenderer from "@/components/DataRenderer";
import { EMPTY_QUERIES } from "@/constants/states";
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

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
      <h1 className="h1-bold text-dark100_light900">All Queries</h1>
      </section>

      <DataRenderer
        success={success}
        error={error}
        data={queries}
        empty={EMPTY_QUERIES}
        render={(queries) => (
          <div className="container mx-auto py-10">
          <DataTable columns={columns} data={queries} />
        </div>
        )}
      />

   
    </>
  )
}
export default DemoPage
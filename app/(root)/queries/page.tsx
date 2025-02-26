import { redirect } from "next/navigation";

import { columns } from "./columns"
import { DataTable } from "./data-table"

import { auth } from "@/auth";
import DataRenderer from "@/components/DataRenderer";
import { EMPTY_QUERIES } from "@/constants/states";
import { getQueries } from "@/lib/actions/query.action";


interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

  const QueriesAll = async ({ searchParams }: SearchParams) => {
    const session = await auth();
  //   {
  //     "user": {
  //         "name": "shubham singla",
  //         "email": "singlas106@gmail.com",
  //         "image": "https://lh3.googleusercontent.com/a/ACg8ocKsHGcpA3ztSpSqykBIAMGqzWYC9EOWAkZGBvgUGRQ1tA5ggyeb=s96-c",
  //         "id": "67bea5abeea6abf7e22c7182"
  //     },
  //     "expires": "2025-03-28T17:09:29.558Z"
  // }
    if(!session || session?.user?.email !== 'singlas106@gmail.com' && session?.user?.email !== 'sapsonpharma@gmail.com'){
      redirect('/')
    }
    const { page, pageSize, query, filter } = await searchParams;
    const { success, data, error } = await getQueries({
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
      query: query || "",
      filter: filter || "",
    });

    const { queries } = data || {};

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
export default QueriesAll
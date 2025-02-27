"use server";

import { Error, FilterQuery } from "mongoose";

import action from "../handlers/action";
import handleError from "../handlers/error";
import {AskQuerySchema, EditQuerySchema, PaginatedSearchParamsSchema} from "../validations";

import Query, { IQuery, IQueryDoc } from "@/database/query.model";


export async function createQuery(
  params: IQuery
): Promise<ActionResponse<Query>> {
  const validationResult = await action({
    params,
    schema: AskQuerySchema,
    // authorize: true,
  });
  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }


  try {
    // const query = await Query.create(params);
    const query = await Query.create({
      name: params.name,
      email: params.email,
      phone: params.phone,
      drug_license: params.drug_license,
      gst: params.gst,
      wholesaler: params.wholesaler,
      products: params.products,
      comment: params.comment,
      status: params.status
    });

    if (!query) {
      throw new Error("Failed to create question");
    }

    return { success: true, data: JSON.parse(JSON.stringify(query)) };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  } 
}



export async function getQueries(
  params: PaginatedSearchParams
): Promise<ActionResponse<{ queries: Query[]; isNext: boolean }>> {
  const validationResult = await action({
    params,
    schema: PaginatedSearchParamsSchema,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { page = 1, pageSize = 2, query = "", filter } = params;
  const skip = (Number(page) - 1) * pageSize;
  const limit = Number(pageSize);

  const filterQuery: FilterQuery<typeof Query> = {};

  // if (filter === "recommended") {
  //   return { success: true, data: { queries: [], isNext: false } };
  // }

  if (query) {
    filterQuery.$or = [
      { title: { $regex: new RegExp(query, "i") } },
      { content: { $regex: new RegExp(query, "i") } },
    ];
  }

 let sortCriteria ={};

  switch (filter) {
    case "newest":
      sortCriteria = { createdAt: -1 };
      break;
    case "unanswered":
      filterQuery.answers = 0;
      sortCriteria = { createdAt: -1 };
      break;
    case "popular":
      sortCriteria = { upvotes: -1 };
      break;
    default:
      sortCriteria = { createdAt: -1 };
      break;
  }

  try {
    const totalQueries = await Query.countDocuments(filterQuery);

    const queries = await Query.find(filterQuery)
      // .populate("tags", "name")
      // .populate("author", "name image")
      // .lean()
      .sort(sortCriteria)
      .skip(skip)
      .limit(limit);

    const isNext = totalQueries > skip + queries.length;

    return {
      success: true,
      data: { queries: JSON.parse(JSON.stringify(queries)), isNext },
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}


export async function editQuery(
  params: EditQueryParams
): Promise<ActionResponse<IQueryDoc>> {
  const validationResult = await action({
    params,
    schema: EditQuerySchema,  
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }
const { queryId, comment, status } = params;
try {
  const query = await Query.findById(queryId);

  if (!query) {
    throw new Error("Query not found");
  }

  query.comment = comment;
  query.status = status;
  await query.save();

  return { success: true, data: JSON.parse(JSON.stringify(query)) };
} catch (error) {
  return handleError(error) as ErrorResponse;
}
}
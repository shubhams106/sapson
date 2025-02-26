"use server";

import { Error } from "mongoose";

import action from "../handlers/action";
import handleError from "../handlers/error";
import {AskQuerySchema} from "../validations";

import Query from "@/database/query.model";


export async function createQuery(
  params: CreateQueryParams
): Promise<ActionResponse<Query>> {
  const validationResult = await action({
    params,
    schema: AskQuerySchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }


  try {
    const query = await Query.create(params);

    if (!query) {
      throw new Error("Failed to create question");
    }

   


    return { success: true, data: JSON.parse(JSON.stringify(query)) };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  } 
}

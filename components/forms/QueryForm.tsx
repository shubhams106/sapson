"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


import TagCard from "../cards/TagCard";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { AskQuerySchema } from "@/lib/validations";

const QuestionForm = () => {

  const form = useForm<z.infer<typeof AskQuerySchema>>({
    resolver: zodResolver(AskQuerySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      drug_license: true,
      gst: true,
      wholesaler: true,
      products: [],
    },
  });

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: { value: string[] }
  ) => {
    console.log(field, e);
    if (e.key === "Enter") {
      e.preventDefault();
      const tagInput = e.currentTarget.value.trim();

      if (tagInput && tagInput.length < 15 && !field.value.includes(tagInput)) {
        form.setValue("products", [...field.value, tagInput]);
        e.currentTarget.value = "";
        form.clearErrors("products");
      } else if (tagInput.length > 50) {
        form.setError("products", {
          type: "manual",
          message: "Tag should be less than 50 characters",
        });
      } else if (field.value.includes(tagInput)) {
        form.setError("products", {
          type: "manual",
          message: "Tag already exists",
        });
      }
    }
  };

  const handleProductsRemove = (tag: string, field: { value: string[] }) => {
    const newproducts = field.value.filter((t) => t !== tag);

    form.setValue("products", newproducts);

    if (newproducts.length === 0) {
      form.setError("products", {
        type: "manual",
        message: "products are required",
      });
    }
  };

  const handleCreateQuery = (data: z.infer<typeof AskQuerySchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-10"
        onSubmit={form.handleSubmit(handleCreateQuery)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Name <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription className="body-regular text-light-500 mt-2.5">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Email 
              </FormLabel>
              <FormControl>
                <Input
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription className="body-regular text-light-500 mt-2.5">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Phone Number <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription className="body-regular text-light-500 mt-2.5">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="drug_license"
          render={({ field }) => (
            <FormItem className=" flex w-full items-center gap-5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Do you have a drug license? <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
               
                <Checkbox
                 checked={field.value}
                 onCheckedChange={field.onChange}
                />
              </FormControl>
              {/* <FormDescription className="body-regular text-light-500 mt-2.5">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="gst"
          render={({ field }) => (
            <FormItem className=" flex w-full items-center gap-5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Do you have a GST number? <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
               
                <Checkbox
                 checked={field.value}
                 onCheckedChange={field.onChange}
                />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="wholesaler"
          render={({ field }) => (
            <FormItem className=" flex w-full items-center gap-5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Are you a wholesaler? <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
               
                <Checkbox
                 checked={field.value}
                 onCheckedChange={field.onChange}
                />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
       
        <FormField
          control={form.control}
          name="products"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                products <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                    placeholder="Add products..."
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 flex-wrap gap-2.5">
                      {field?.value?.map((tag: string) => (
                        <TagCard
                          key={tag}
                          _id={tag}
                          name={tag}
                          remove
                          isButton
                          handleRemove={() => handleProductsRemove(tag, field)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Add up to 10 products to describe what your query is about. You
                need to press enter to add a product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-16 flex justify-end">
          <Button
            type="submit"
            className="primary-gradient !text-light-900 w-fit"
          >
            Ask A Query
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { productsData } from "@/constants/productData";
import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
import { createQuery } from "@/lib/actions/query.action";
import { AskQuerySchema } from "@/lib/validations";


const QueryForm = ({session}: {session: any}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof AskQuerySchema>>({
    resolver: zodResolver(AskQuerySchema),
    defaultValues: {
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      phone: "",
      drug_license: true,
      gst: true,
      wholesaler: true,
      products: [],
    },
  });

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

  const handleCreateQuery = async (data: z.infer<typeof AskQuerySchema>) => {
    startTransition(async () => {

      const result = await createQuery(data);

      if (result.success) {
        toast({
          title: "Success",
          description: "Question created successfully",
        });

        if (result.data) { router.push(ROUTES.HOME); }
      } else {
        toast({
          title: `Error ${result.status}`,
          description: result.error?.message || "Something went wrong",
          variant: "destructive",
        });
      }
    });

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
                  {/* <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                    placeholder="Add products..."
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  /> */}
                  <Select
                    onValueChange={(value: string) => {
                      if (!field.value.includes(value)) {
                        form.setValue("products", [...field.value, value]);
                      } else {
                        form.setError("products", {
                          type: "manual",
                          message: "Product already exists",
                        });
                      }
                    }}
                  >
                    <SelectTrigger className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border">
                      <SelectValue placeholder="Select a product..." />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(productsData).map((category) =>
                        category.products.map((product) => (
                          <SelectItem
                            key={product._id}
                            value={product.productName}
                          >
                            {product.productName}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
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
            disabled={isPending}
            className="primary-gradient !text-light-900 w-fit"
          >
            {isPending ? (
              <>
                <ReloadIcon className="mr-2 size-4 animate-spin" />
                <span>Submitting</span>
              </>
            ) :"Ask a Query"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QueryForm;

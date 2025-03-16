interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
}

interface Query {
  _id: string;
  name: string;
  email: string;
  products: string[];
  phone: string;
  drug_license: boolean;
  gst: boolean;
  wholesaler: boolean;
  status: "pending" | "approved" | "rejected";
  comment: string;
  createdAt: Date;
}


interface Product {
  _id: number | string;
  ProductName: string;
  ImageUrl: string;
  Mrp: number;
  Packing: string | number;
  Description: string;
  Category: string;
  Composition: string;
}


type ActionResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  status?: number;
};

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<undefined> & { success: false };

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;


interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface PaginatedSearchParams {
  page?: number;
  pageSize?: number;
  query?: string;
  filter?: string;
  sort?: string;
}

interface Answer {
  _id: string;
  author: Author;
  content: string;
  createdAt: Date;
}
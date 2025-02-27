import Image from "next/image";
import { ReactNode } from "react";
import { auth } from "@/auth"
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth()
  if(session?.user?.id){
    redirect('/')
  }
  console.log(session, 'session')
 
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
               <h1 className="h2-bold font-space-grotesk text-[#276956] max-sm:hidden">
                Sapson<span className="text-primary-500">Pharma</span>
        </h1>
            <p className="paragraph-regular text-dark500_light400">
            Save your profile, get exclusive discounts and personalized offers
            </p>
          </div>
          <Image
            src="/images/Sapson-logo.png"
            alt="sapson Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;

import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
   <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-5xl gap-6 mx-auto">
    <h1 className="text-5xl font-bold">
      EasyInvoice
    </h1>
    <p className="mt-4">
       <Button asChild>
      <Link href="/dashboard">
      Sign In
      </Link>
    </Button>
    </p>
    
   </main>
  );
}

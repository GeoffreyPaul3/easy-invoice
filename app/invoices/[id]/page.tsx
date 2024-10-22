
import { Badge } from "@/components/ui/badge";
import { db } from "@/db"
import { Invoices } from "@/db/schema"
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";


export default async function InvoicePage({ params } : {params: {invoiceId: string}}) {
  const invoiceId = Number.parseInt(params.invoiceId)

  if (Number.isNaN(invoiceId)) {
    throw new Error("Invalid Invoice ID");
  }

  const [result] = await db.select()
  .from(Invoices)
  .where(eq(Invoices.id, invoiceId))
  .limit(1)

  console.log("result", result)

  return (
    <div className='h-full max-w-5xl mx-auto my-12'>
    <div className="flex justify-between mb-8">
      <h1 className='flex items-center text-3xl font-semibold'>
        Invoice  {invoiceId}

        <Badge className={cn(
          "rounded-full",
          result.status === "open" && "bg-orange-500",
          result.status === "paid" && "bg-green-600",
          result.status === "void" && "bg-zinc-700",
          result.status === "uncollectible" && "bg-red-600",
        )}>
          {result.status}
        </Badge>
      </h1>
      <p>
        
      </p>
      </div>

      <p className="text-3xl mb-3">
        ${ (result.value / 100).toFixed(2) }
      </p>

      <p className="text-lg mb-8">
        {result.description}
      </p>

      <h2 className="font-bold text-lg mb-4">
        Billing Details
      </h2>

      <ul className="grid gap-2">
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium">Invoice ID</strong>
          <span>{ invoiceId }</span>
        </li>
        <li className="flex gap-4">
           <strong className="block w-28 flex-shrink-0 font-medium">Date</strong>
          <span> {new Date(result.createTs).toLocaleDateString()}</span>
        </li>
      </ul>
    </div>
  )
}

 
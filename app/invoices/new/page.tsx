"use client"

import { createAction } from '@/app/actions'
import SubmitButton from '@/components/SubmitButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SyntheticEvent, useState } from 'react'
import Form from "next/form"


export default function CreateInvoice() {
    const [state, setState] = useState('ready')
    async function handleOnSubmit(event: SyntheticEvent) {
        
        if (state === 'pending'){
          event.preventDefault();
        }
        setState('pending')  
    }

  return (
    <div className='flex flex-col justify-center h-full gap-6 max-w-5xl mx-auto my-12'>
    <div className="flex justify-between">
      <h1 className='text-3xl font-bold'>
        Create Invoice
      </h1>
      </div>
      <Form action={createAction} onSubmit={handleOnSubmit} className='grid gap-4 max-w-xs'>
        <div>
            <Label htmlFor='name' className='block mb-2 text-sm font-semibold'>Billing Name</Label>
            <Input  id='name' name='name' type="text" />
        </div>
        <div>
            <Label htmlFor='email' className='block mb-2 text-sm font-semibold'>Billing Email</Label>
            <Input  id='email' name='email' type="email" />
        </div>
        <div>
            <Label htmlFor='value' className='block mb-2 text-sm font-semibold'>Value</Label>
            <Input  id='value' name='value' type="text" />
        </div>
        <div>
            <Label htmlFor='description' className='block mb-2 text-sm font-semibold'>Description</Label>
            <Textarea name="description" id="description"></Textarea>
        </div>
        <div>
           <SubmitButton />
        </div>
      </Form>
    </div>
  )
}


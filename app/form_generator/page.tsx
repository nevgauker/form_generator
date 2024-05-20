'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
const FormGenerator = () => {
  const [open, setOpen] = useState(false)

  const onFromCreate = () => {
    setOpen(true)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={onFromCreate}>Create Form</Button>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create a new form</DialogTitle>
        </DialogHeader>
        <form>
          <div className='grid gap-4 py-4'>
            <Textarea
              id='description'
              name='description'
              required
              placeholder='Share what your from is about, who is it for, and what information you would like to collect. And AI will do the magic'
            />
          </div>
        </form>

        <DialogFooter>
          <Button variant='link'>Create Manually</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FormGenerator

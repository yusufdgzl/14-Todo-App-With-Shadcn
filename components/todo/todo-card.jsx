import { EditDialog } from "../alert/EditDialog";
import { AlertDialogItem } from "../alert/alert-dialog";
import { Separator } from "../ui/separator";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react"; 

const TodoCard = (props) => {

   const [dialogIsVisible,setDialogIsVisible]= useState(false)
   
   function handlerEdit(){
    
   }

  return (
    <>
      <div className="flex justify-between items-center rounded-md">
        <h1 className="text-xl font-mono">{props.item}</h1>
        <div className="space-x-5 flex h-10 ">
          
          <Button onClick={()=>setDialogIsVisible(true)} variant="secondary">Edit</Button>
          <Separator orientation="vertical" className="" />
          <AlertDialogItem onDelete={props.onDelete.bind(null, props.id)} />
        </div>

      </div>
      <Separator />
      <Dialog open={dialogIsVisible} onOpenChange={setDialogIsVisible} >
      
     
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Make changes to your todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Todo : 
            </Label>
            <Input onChange={(e)=> setValue(e.target.value)} id="name" defaultValue={props.item} className="col-span-3" />
          </div>
          
        </div>
        <DialogFooter>
          <Button onClick={handlerEdit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default TodoCard;

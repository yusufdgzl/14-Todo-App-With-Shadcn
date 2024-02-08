// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";

// export function EditDialog(props) {

//   const [value,setValue] = useState('')

//   function handlerEdit(){
//   const filtered = props.todos.filter((item)=> item.id === props.id)
//    console.log(filtered)
//   }
  
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button >Edit Todo</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit Todo</DialogTitle>
//           <DialogDescription>
//             Make changes to your todo here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Todo : 
//             </Label>
//             <Input onChange={(e)=> setValue(e.target.value)} id="name" defaultValue={props.item} className="col-span-3" />
//           </div>
          
//         </div>
//         <DialogFooter>
//           <Button onClick={handlerEdit}>Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

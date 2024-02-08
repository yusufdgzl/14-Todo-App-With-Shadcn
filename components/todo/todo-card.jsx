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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";

const TodoCard = (props) => {
  const [changedTodo, setChangedTodo] = useState(null);

  return (
    <div>
      <div className="flex justify-between items-center rounded-md">
        <h1 className="text-xl font-mono">{props.todo}</h1>
        <div className="space-x-5 flex h-10 ">
          <Dialog>
            <DialogTrigger>
              <Button variant="secondary">Edit</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  Make changes to your Todo here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>

              <Label htmlFor="todo" className="text-right">
                Todo
              </Label>
              <Input
                onChange={(e) => setChangedTodo(e.target.value)}
                id="todo"
                defaultValue={props.todo}
              />

              <DialogFooter>
                <Button
                  onClick={() => props.onUpdateTodo(props.id, changedTodo)}
                  type="submit"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button
            onClick={() => props.onDeleteTodo(props.id)}
            variant="secondary"
          >
            Delete
          </Button>
          <Separator orientation="vertical" className="" />
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default TodoCard;

import {ToDoTypeStrict} from "../types/toDoType.ts";
import Dialog from "@mui/material/Dialog";
import ToDoDetail from "./ToDoDetail.tsx";
import {DialogActions, DialogContent} from "@mui/material";

type ToDoDialogProps = {
    openStat: boolean,
    toDo : ToDoTypeStrict | null,
    handleCloseDialog() :void,
    delete(id: string): void
}

export default function ToDoDialog(props: ToDoDialogProps) {

    return(
        <>
            <Dialog open={props.openStat} >
                <DialogContent>
                    {props.toDo &&
                        <ToDoDetail id={props.toDo.id} description={props.toDo.description} status={props.toDo.status} nextStatus={props.toDo.nextStatus} closeDialog={props.handleCloseDialog} deleteToDo={props.delete}/>}
                </DialogContent>
                <DialogActions>
                    <button onClick={props.handleCloseDialog}
                            color="primary" autoFocus>
                        Close
                    </button>
                </DialogActions>
            </Dialog>
        </>
    )
}
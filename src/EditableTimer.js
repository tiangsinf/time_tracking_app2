import React from "react";

import { TimerForm } from "./TimerForm";
import { Timer } from "./Timer";

export const EditableTimerContext = React.createContext({
    editFormOpen: "",
    handleEditFormOpen: () => {}
});

export const EditableTimer = props => {
    const [editFormOpen, setEditFormOpen] = React.useState(false);

    const handleEditFormOpen = () => {
        setEditFormOpen(true);
    };

    const handleTimerFormClose = () => {
        setEditFormOpen(false);
    };

    if (editFormOpen) {
        return (
            <TimerForm
                id={props.id}
                title={props.title}
                project={props.project}
                informTimerFormClose={handleTimerFormClose}
            />
        );
    } else {
        return (
            <EditableTimerContext.Provider value={handleEditFormOpen}>
                <Timer
                    id={props.id}
                    title={props.title}
                    project={props.project}
                    elapsed={props.elapsed}
                    runningSince={props.runningSince}
                    isRunning={props.isRunning}
                />
            </EditableTimerContext.Provider>
        );
    }
};

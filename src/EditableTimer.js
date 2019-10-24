import React from "react";

import { TimerForm } from "./TimerForm";
import { Timer } from "./Timer";

export const EditableTimer = props => {
    const [editFormOpen, setEditFormOpen] = React.useState(false);

    if (editFormOpen) {
        return <TimerForm title={props.title} project={props.project} />;
    } else {
        return (
            <Timer
                id={props.id}
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
            />
        );
    }
};

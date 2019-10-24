import React from "react";

import { TimerForm } from "./TimerForm";
import { Timer } from "./Timer";

export const EditableTimer = props => {
    if (props.editFormOpen) {
        return <TimerForm title={props.title} project={props.project} />;
    } else {
        return (
            <Timer
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
            />
        );
    }
};

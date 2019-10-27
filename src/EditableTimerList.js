import React from "react";

import { EditableTimer } from "./EditableTimer";

export const EditableTimerList = ({ timers }) => {
    return timers.map(timer => (
        <EditableTimer
            key={timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            runningSince={timer.runningSince}
            isRunning={timer.isRunning}
        />
    ));
};

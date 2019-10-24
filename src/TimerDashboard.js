import React from "react";
import uuidv4 from "uuid";
import { Container, Box, Typography, Divider } from "@material-ui/core";

import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";


export const TimerDashboardContext = React.createContext({
    timers: [],
    handleCreateFormSubmit: () => {}
});

export const TimerDashboard = () => {
    const [timers, setTimer] = React.useState([
        {
            id: uuidv4(),
            title: "Practice squat",
            project: "Gym Chores",
            elapsed: 5456099,
            runningSince: Date.now()
        },
        {
            id: uuidv4(),
            title: "Bake squash",
            project: "Kitchen Chores",
            elapsed: 1273998,
            runningSince: null
        }
    ]);

    // Create new timer
    const handleCreateFormSubmit = timer => {
        createTimer(timer);
    };

    const createTimer = timer => {
        const t = newTimer(timer);
        setTimer([...timers, t]);
    };

    const newTimer = (attrs = {}) => {
        const timer = {
            title: attrs.title || "Timer",
            project: attrs.project || "Project",
            id: uuidv4(),
            elapsed: 0
        };
        return timer;
    };

    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" m={3} mb={1}>
                <Typography variant="h4">Timer</Typography>
            </Box>
            <Box justifyContent="center" m={3} mb={1}>
                <Divider />
            </Box>
            <Box justifyContent="center" m={3} mb={1}>
                <TimerDashboardContext.Provider 
                    value={handleCreateFormSubmit} 
                >
                    <EditableTimerList timers={timers} />
                    <ToggleableTimerForm
                        onInformedFormSubmit={handleCreateFormSubmit}
                    />
                </TimerDashboardContext.Provider>
            </Box>
        </Container>
    );
};

import React from "react";
import uuidv4 from "uuid";
import { Container, Box, Typography, Divider } from "@material-ui/core";

import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";

export const TimerDashboardContext = React.createContext({
    timers: [],
    handleCreateFormSubmit: () => {},
    handleTimerUpdate: () => {},
    handleTimerDelete: () => {},
    handleTimerStart: () => {},
    handleTimerStop: () => {},
});

export const TimerDashboard = () => {
    const [timers, setTimer] = React.useState([
        {
            id: uuidv4(),
            title: "Practice squat",
            project: "Gym Chores",
            elapsed: 5456099,
            runningSince: Date.now(),
            started: false,
            isRunning: false
        },
        {
            id: uuidv4(),
            title: "Bake squash",
            project: "Kitchen Chores",
            elapsed: 1273998,
            runningSince: null,
            started: false,
            isRunning: false
        }
    ]);

    /* Timer handlers:
       - Create new timer
       - Update existing timer
       - Delete existing timer
    */
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

    const handleTimerUpdate = attrs => {
        updateTimer(attrs);
    };

    const updateTimer = attrs => {
        setTimer(
            timers.map(timer => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project
                    });
                } else {
                    return timer;
                }
            })
        );
    };

    const handleTimerDelete = id => {
        deleteTimer(id);
    };

    const deleteTimer = id => {
        setTimer(timers.filter(timer => timer.id !== id));
    };

    const handleTimerStart = timerId => {
        const now = Date.now();
        setTimer(timers.map(timer => {
            if (timer.id === timerId) {
                return Object.assign({}, timer, {
                    // elapsed: timer.elapsed + 1,
                    runningSince: now,
                    isRunning: true
                })
            } else {
                return timer;
            }
        }))
    };

    const handleTimerStop = timerId => {
        const now = Date.now();
        setTimer(timers.map(timer => {
            if (timer.id === timerId) {
                const lastElapsed = now - timer.runningSince;
                return Object.assign({}, timer, {
                    elapsed: timer.elapsed + lastElapsed,
                    runningSince: null,
                    isRunning: false
                })
            } else {
                return timer;
            }
        }))
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
                    value={{
                        handleCreateFormSubmit,
                        handleTimerUpdate,
                        handleTimerDelete,
                        handleTimerStart,
                        handleTimerStop,
                    }}
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

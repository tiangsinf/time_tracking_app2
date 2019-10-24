import React from "react";

import { Box, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { TimerForm } from "./TimerForm";

export const ToggleableTimerForm = props => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleTimerFormOpen = () => {
        setIsOpen(true);
    };

    const handleTimerFormClose = () => {
        setIsOpen(false);
    };

    if (isOpen) {
        return <TimerForm 
            isOpen={isOpen} 
            informTimerFormClose={handleTimerFormClose}
        />;
    } else {
        return (
            <Box align="center" m={4}>
                <Fab color="secondary" size="large">
                    <AddIcon onClick={handleTimerFormOpen} />
                </Fab>
            </Box>
        );
    }
};

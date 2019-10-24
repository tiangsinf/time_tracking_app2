import React from "react";

import { Box, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { TimerForm } from "./TimerForm";

export const ToggleableTimerForm = props => {
    if (props.isOpen) {
        return <TimerForm isOpen={props.isOpen} />;
    } else {
        return (
            <Box align="center" m={4}>
                <Fab color="secondary" size="large">
                    <AddIcon />
                </Fab>
            </Box>
        );
    }
};

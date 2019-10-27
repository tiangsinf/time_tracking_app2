import React from "react";
import Button from "@material-ui/core/Button";
import { TimerDashboardContext } from "./TimerDashboard";

const TimerActions = props => {

    const {
        handleTimerStart,
        handleTimerStop
    } = React.useContext(TimerDashboardContext);

    const onStartClick = () => {
        handleTimerStop(props.id);
    };

    const onStopClick = () => {
        handleTimerStart(props.id);
    };

    if (props.isRunning) {
        return (
            <>
                <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={onStartClick}
                >
                    STOP
                </Button>
            </>
        )
    } else {
        return (
            <>
                <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={onStopClick}
                >
                    START
                </Button>
            </>
        )
    };
};

export default TimerActions;
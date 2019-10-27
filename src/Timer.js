import React from "react";

import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Typography
} from "@material-ui/core";

import { SettingMenu } from "./SettingMenu";
import { TimerDashboardContext } from "./TimerDashboard";
import TimerActions from "./TimerActions";

export const Timer = props => {

    // Convert elapsed to HH:MM:SS
    function renderElapsedString(elapsed, runningSince) {
        let totalElapsed = elapsed;
        if (runningSince) {
            totalElapsed += Date.now() - runningSince;
        }
        return millisecondsToHuman(totalElapsed);
    };

    function millisecondsToHuman(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        const hours = Math.floor(ms / 1000 / 60 / 60);

        const humanized = [
            pad(hours.toString(), 2),
            pad(minutes.toString(), 2),
            pad(seconds.toString(), 2)
        ].join(":");

        return humanized;
    };

    function pad(numberString, size) {
        let padded = numberString;
        while (padded.length < size) padded = `0${padded}`;
        return padded;
    };

    const { handleTimerStart } = React.useContext(TimerDashboardContext);

    React.useEffect(() => {
        if (props.isRunning) {
            const forceHandleTimerStart = setInterval(() => handleTimerStart(), 1000);
            return () => clearInterval(forceHandleTimerStart);
        };
    });

    return (
        <Box display="flex" justifyContent="center" m={3} mb={1}>
            <Card raised={true} style={{ width: 350 }}>
                <CardHeader
                    style={{ height: 50 }}
                    title={props.title}
                    subheader={props.project}
                    action={<SettingMenu id={props.id} />}
                />
                <Divider />
                <CardContent style={{ height: 150 }}>
                    <Typography
                        style={{ paddingTop: 30 }}
                        align="center"
                        variant="h2"
                        color="primary"
                    >
                        {renderElapsedString(props.elapsed, props.runningSince)}
                    </Typography>
                </CardContent>
                <TimerActions
                    id={props.id}
                    isRunning={props.isRunning}
                />
            </Card>
        </Box>
    );
};

import React, { useState } from "react";
import { Button } from "react-bootstrap";

<<<<<<< HEAD
type Holiday = "🎏" | "🪔" | "🎃" | "🎄" | "🎆";

const holidaysByYear: Record<Holiday, Holiday> = {
    "🎏": "🪔",
    "🪔": "🎃",
    "🎃": "🎄",
    "🎄": "🎆",
    "🎆": "🎏"
};

const holidaysByAlphabet: Record<Holiday, Holiday> = {
    "🎏": "🎄",
    "🎄": "🎆",
    "🎆": "🪔",
    "🪔": "🎃",
    "🎃": "🎏"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎏");

    const cycleByYear = () => {
        setHoliday(holidaysByYear[holiday]);
    };

    const cycleByAlphabet = () => {
        setHoliday(holidaysByAlphabet[holiday]);
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={cycleByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
=======
export function CycleHoliday(): React.JSX.Element {
    return <div>Cycle Holiday</div>;
>>>>>>> 2f2ff1b (Initialize task-state)
}

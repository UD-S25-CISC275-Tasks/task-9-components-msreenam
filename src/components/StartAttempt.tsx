import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 89be9a0 (finish this)
    const [attempts, setAttempts] = useState<number>(4);

    const [inProgress, setInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        setInProgress(true);
        setAttempts((prevAttempts) => prevAttempts - 1);
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const mulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
        </div>
    );
<<<<<<< HEAD
=======
    return <div>Start Attempt</div>;
>>>>>>> 2f2ff1b (Initialize task-state)
=======
>>>>>>> 89be9a0 (finish this)
}

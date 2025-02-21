import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
<<<<<<< HEAD
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const changeType = () => {
        setType((prevType) =>
            prevType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {type === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
        </div>
    );
=======
    return <div>Change Type</div>;
>>>>>>> 2f2ff1b (Initialize task-state)
}

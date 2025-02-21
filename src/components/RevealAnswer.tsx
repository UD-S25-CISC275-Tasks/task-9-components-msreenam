import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1ba68a (answer is revealed)
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Reveal Answer
            </Button>
            {visible && <div>42</div>}
        </div>
    );
<<<<<<< HEAD
=======
    return <div>Reveal Answer</div>;
>>>>>>> 2f2ff1b (Initialize task-state)
=======
>>>>>>> d1ba68a (answer is revealed)
=======
    return <div>Reveal Answer</div>;
>>>>>>> 1509083 (Initialize task-components)
}

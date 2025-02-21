import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
<<<<<<< HEAD
            <Button
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>
=======
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
>>>>>>> 2f2ff1b (Initialize task-state)
            to {value}.
        </span>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6016326 (counter)
            <Button
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>
<<<<<<< HEAD
=======
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
>>>>>>> 2f2ff1b (Initialize task-state)
=======
>>>>>>> 6016326 (counter)
=======
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
>>>>>>> 1509083 (Initialize task-components)
            to {value}.
        </span>
    );
}

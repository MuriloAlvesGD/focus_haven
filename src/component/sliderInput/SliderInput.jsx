import { useState } from "react";
import { Grommet, Box, RangeInput } from "grommet";

function SliderInput({ func, max = 60, type = "min" }) {
    const [count, setCount] = useState(1);

    const handle = (value) => {
        func(value);
        setCount(value);
    };

    return (
        <Grommet>
            <Box width="300px" height="fit-content" align="center" justify="center" pad="medium" gap="small">
                <RangeInput style={{ height: 'auto' }} value={count} min="1" max={max} step="1" onChange={(e) => handle(e.target.value)} />
                <span>{`${count} ${type}${count > 1 ? "s" : ""}`}</span>
            </Box>
        </Grommet>
    );
}

export default SliderInput;

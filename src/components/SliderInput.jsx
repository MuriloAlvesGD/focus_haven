import { useState } from "react";
import { Box, RangeInput, Text } from "grommet";

function SliderInput({ save, name, max = 60, type = "min", colors}) {
    const [count, setCount] = useState(1);

    const handle = (value) => {
        save(name, value);
        setCount(value);
    };

    return (
        <Box gap="4px" direction="row" margin="10px" align="center">
            <RangeInput
                value={count}
                min="1"
                max={max}
                step="1"
                onChange={(e) => handle(e.target.value)}
                color={colors.contrast_shadown}
            />
            <Text weight="bold" color={colors.contrast}>
                {count}
            </Text>
            <Text weight="bold" color={colors.contrast}>{`${type}${count > 1 ? "s" : ""}`}</Text>
        </Box>
    );
}

export default SliderInput;

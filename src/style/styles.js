// This File is only and dedicate for declarating global style objects
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet";

const backColors = {
    dark: "#282e36",
    light: "#fffae3"
};

const textColors = {
    dark: "#fffae3",
    light: "#282e36"
};

export const customTheme = deepMerge(grommet, {
    global: {
        font: {
            family: "Pixelify Sans, sans-serif"
        },
        colors: {
            background: backColors,
            text: textColors,
            control: textColors
        }
    },
    boxAlign: {
        align: "center",
        justify: "center",
        gap: "medium",
        pad: "large"
    },
    boxAlignRow: {
        align: "center",
        justify: "center",
        gap: "medium",
        pad: "large",
        direction: "row"
    }
});

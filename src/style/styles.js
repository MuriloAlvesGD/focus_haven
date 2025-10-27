// This File is only and dedicate for declarating global style objects
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet";

const colors = {
    rich_black: "#0D1321",
    linen: "#FFEDDF",
    rose_taupe: "#7D6167",
    mindaro: "#C5D86D"
};

const backColors = {
    dark: colors.rich_black,
    light: colors.linen
};

const textColors = {
    dark: colors.linen,
    light: colors.rich_black
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

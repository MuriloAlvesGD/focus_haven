import { deepMerge } from "grommet/utils";
import { grommet } from "grommet";

export const colors = {
    dark: {
        background: "#0D1321",
        back_light: "#131B30",
        back_shadown: "#020712",
        content: "#FFEDDF",
        content_light: "#FDF7F1",
        content_shadown: "#FCDAC9",
        contrast: "#C5D86D",
        contrast_light: "#D2E481",
        contrast_shadown: "#AEC350",
        contrast2: "#7D6167",
        contrast2_light: "#967379",
        contrast2_shadown: "#674C52"
    },
    light: {
        background: "#FFEDDF",
        back_light: "#FDF7F1",
        back_shadown: "#FCDAC9",
        content: "#0D1321",
        content_light: "#131B30",
        content_shadown: "#020712",
        contrast: "#7D6167",
        contrast_light: "#967379",
        contrast_shadown: "#674C52",
        contrast2: "#C5D86D",
        contrast2_light: "#D2E481",
        contrast2_shadown: "#AEC350"
    }
};

export const theme = deepMerge(grommet, {
    global: {
        spacing: "12px",
        font: {
            family: "Pixelify Sans, sans-serif"
        },
        focus: {
            border: {
                color: { dark: colors.dark.contrast_light, light: colors.light.contrast_light }
            }
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
    },
    card: {
        container: {
            background: { dark: colors.dark.contrast, light: colors.light.contrast }
        }
    },
    clock: {
        analog: {
            hour: {
                color: { dark: colors.dark.contrast, light: colors.light.contrast }
            }
        }
    },
    rangeInput: {
        thumb: {
            color: { dark: colors.dark.contrast, light: colors.light.contrast }
        },
        track: {
            color: { dark: colors.dark.back_shadown, light: colors.light.back_shadown },
            height: "11px",
            extend: () => `border-radius: 5px`
        }
    },
    formField: {
        label: {
            margin: "0"
        }
    },
    list: {
        container: {
            width: "90%"
        },
        item: {
            extend: () => ``
        }
    },
    pagination: {
        container: {
            margin: "0 auto"
        }
    }

});

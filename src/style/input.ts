import { SxProps } from "@mui/material"
import { colors } from "./colors"

export const input_outlined: any = {
    "& .MuiInputLabel-root": {
        color: "#000",
        fontSize: "3.2vw",
        fontFamily: "KG",
        letterSpacing: "0.5vw",

        "@media (max-width: 600px)": {
            textAlign: "center",
        },
    },
    "& .MuiInputLabel-root:focus": {
        color: "primary.main",
    },
    "& .MuiInput-root": {
        "&::before": {},
    },
    "& .MuiInput-root:hover": {
        "&::before": {},
    },
    "& .MuiInputBase-root": {
        borderRadius: "4vw",

        "@media (max-width: 600px)": {
            borderRadius: "4vw",
            height: "11vw",
        },
    },
    "& .MuiInputBase-root:not(.MuiInputBase-multiline)": {},
    "& .MuiInputLabel-shrink": {
        textAlign: "center",

        "@media (max-width: 600px)": {
            // fontSize: "4vw",
        },
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "1px solid black", // Cor da borda padrão
        },
        "&:hover fieldset": {
            borderColor: colors.primary, // Cor da borda ao passar o mouse
        },
        "&.Mui-focused fieldset": {
            border: `2px solid ${colors.primary}`, // Cor da borda quando focado
        },
    },
    "& .MuiOutlinedInput-input": {
        textAlign: "center",
    },
}
export const input: any = {
    "& .MuiInputLabel-root": {
        color: "#000",
        fontSize: "3.5vw",

        "@media (max-width: 600px)": {
            textAlign: "center",
        },
    },
    "& .MuiInputLabel-root:focus": {
        color: "primary.main",
        bgcolor: "#fff",
    },
    "& .MuiInput-root": {
        bgcolor: "#fff",

        "&::before": {},
    },
    "& .MuiInput-root:hover": {
        "&::before": {},
    },
    "& .MuiInputBase-root": {
        borderRadius: "6vw",
        bgcolor: "#fff",

        "@media (max-width: 600px)": {
            borderRadius: "8vw",
            height: "12vw",
        },
    },
    "& .MuiInputBase-root:not(.MuiInputBase-multiline)": {},
    "& .MuiInputLabel-shrink": {
        textAlign: "center",

        "@media (max-width: 600px)": {
            // fontSize: "4vw",
        },
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "", // Cor da borda padrão
        },
        "&:hover fieldset": {
            // borderColor: colors.primary, // Cor da borda ao passar o mouse
        },
        "&.Mui-focused fieldset": {
            border: `2px solid ${colors.button2}`, // Cor da borda quando focado
        },
    },
    "& .MuiOutlinedInput-input": {
        textAlign: "center",
    },
}

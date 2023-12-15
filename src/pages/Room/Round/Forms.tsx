import { Box } from "@mui/material"
import React from "react"
import { colors } from "../../../style/colors"
import { InputStop } from "../../../components/InputStop"
import { input } from "../../../style/input"
import { motion } from "framer-motion"

interface FormsProps {}

export const Forms: React.FC<FormsProps> = ({}) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, ease: "easeOut" }}>
            <Box
                sx={{
                    width: "90%",
                    height: "80%",
                    bgcolor: colors.primary,
                    borderRadius: "4vw",
                    position: "absolute",
                    p: "4vw",
                    flexDirection: "column",
                    gap: "4vw",
                }}
            >
                <Box sx={{ flexDirection: "row", gap: "2vw", width: "100%" }}>
                    <InputStop sx={{ ...input, width: "50%" }} />
                    <InputStop sx={{ ...input, width: "50%" }} />
                </Box>
                <Box sx={{ flexDirection: "row", gap: "2vw", width: "100%" }}>
                    <InputStop sx={{ ...input, width: "50%" }} />
                    <InputStop sx={{ ...input, width: "50%" }} />
                </Box>
                <Box sx={{ flexDirection: "row", gap: "2vw", width: "100%" }}>
                    <InputStop sx={{ ...input, width: "50%" }} />
                    <InputStop sx={{ ...input, width: "50%" }} />
                </Box>
                <Box sx={{ flexDirection: "row", gap: "2vw", width: "100%" }}>
                    <InputStop sx={{ ...input, width: "50%" }} />
                    <InputStop sx={{ ...input, width: "50%" }} />
                </Box>
            </Box>
        </motion.div>
    )
}

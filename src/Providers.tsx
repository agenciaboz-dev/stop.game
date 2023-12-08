import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Box, ThemeProvider } from "@mui/material"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { SnackbarProvider } from "burgos-snackbar"
import { ConfirmDialogProvider } from "burgos-confirm"
import { IoProvider } from "./contexts/ioContext"
import { AvatarProvider } from "./contexts/avatarContext"

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mui_theme = useMuiTheme()

    return (
        <BrowserRouter>
            <IoProvider>
                <AvatarProvider>
                    <ThemeProvider theme={mui_theme}>
                        <SnackbarProvider>
                            <ConfirmDialogProvider>
                                <IoProvider>{children}</IoProvider>
                            </ConfirmDialogProvider>
                        </SnackbarProvider>
                    </ThemeProvider>
                </AvatarProvider>
            </IoProvider>
        </BrowserRouter>
    )
}

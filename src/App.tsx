import "./App.css"
import { Providers } from "./Providers"
import { Snackbar } from "burgos-snackbar"
import { ConfirmDialog } from "burgos-confirm"
import { Routes } from "./Routes"
import "@mantine/core/styles.css"

export const App: React.FC = () => {
    return (
        <Providers>
            <Routes />
            <Snackbar />
            <ConfirmDialog />
        </Providers>
    )
}

export default App

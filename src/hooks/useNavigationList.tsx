import ChatIcon from "@mui/icons-material/Chat"
import GridViewIcon from "@mui/icons-material/GridView"
import StorefrontIcon from "@mui/icons-material/Storefront"
import MultipleStopIcon from "@mui/icons-material/MultipleStop"
import BarChartIcon from "@mui/icons-material/BarChart"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AppsIcon from "@mui/icons-material/Apps"
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"

// import CircumIcon from "@klarr-agency/circum-icons-react" // React

import { SxProps } from "@mui/material"

export const useNavigationList = () => {
    const iconStyle: SxProps = { color: "#232323" }

    const players: NavigationMenu = {
        id: 1,
        title: "Administrador",
        location: "/adm",
        icon: <AppsIcon />,
        drawer: [
            {
                id: 1,
                title: "Meu Perfil",
                location: "/adm/profile",
                icon: <LocalShippingIcon />,
            },
            {
                id: 2,
                title: "Cadastrar Funcionário",
                location: "/adm/new_employee",
                icon: <SwapHorizIcon />,
            },
        ],
        bottom: [],
    }
    const categories: NavigationMenu = {
        id: 1,
        title: "Administrador",
        location: "/adm",
        icon: <AppsIcon />,
        drawer: [
            {
                id: 1,
                title: "Meu Perfil",
                location: "/adm/profile",
                icon: <LocalShippingIcon />,
            },
            {
                id: 2,
                title: "Cadastrar Funcionário",
                location: "/adm/new_employee",
                icon: <SwapHorizIcon />,
            },
        ],
        bottom: [],
    }

    return { players,categories }
}

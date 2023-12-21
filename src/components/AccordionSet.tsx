import { Accordion, Group, Text } from "@mantine/core"
import React from "react"
import { CardPlayer } from "./CardPlayer"
import { Box } from "@mui/material"
import { InputStop } from "./InputStop"
import { input_outlined } from "../style/input"
import { Title } from "./Title"
import { ButtonStop } from "./ButtonStop"
import { useMenuDrawerCategories } from "../hooks/useMenuCategories"

interface AccordionSetProps {}
interface AccordionLabelProps {
    label: string
}

const title_style = {
    color: "#000",
    fontWeight: "400",
    fontSize: "5vw",
}
const charactersList = [
    {
        id: "1",
        label: "Editar informações",
        description: "Atualizar configurações da sala",
        content: (
            <Box
                sx={{
                    width: "100%",
                    alignSelf: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "3vw",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        alignSelf: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0vw",
                    }}
                >
                    <Title style={title_style} title="Nome da Sala" />
                    <InputStop sx={{ ...input_outlined, width: "80%" }} value={"Studio ABC"} />
                    <Title style={title_style} title="Privacidade" />
                    <InputStop sx={{ ...input_outlined, width: "80%" }} value={"Privada"} />
                    <Title style={title_style} title="Alterar senha" />
                    <InputStop
                        sx={{ ...input_outlined, width: "80%", letterSpacing: "2vw" }}
                        type="password"
                        value={"Studio ABC"}
                    />
                </Box>
                <ButtonStop sx={{ fontSize: "7vw" }}> Salvar</ButtonStop>
            </Box>
        ),
    },
    {
        id: "2",
        label: "Categorias",
    },
    {
        id: "3",
        label: "Banir Jogador",
        content: (
            <Box sx={{ gap: "2vw", flexDirection: "column", width: "100%", height: "50%", overflowY: "auto" }}>
                <CardPlayer variant />
                <CardPlayer variant />
                <CardPlayer variant />
                <CardPlayer variant />
                <CardPlayer variant />
                <CardPlayer variant />
                <CardPlayer variant />
            </Box>
        ),
    },
    {
        id: "4",
        label: "Deletar sala",
    },
]

function AccordionLabel({ label }: AccordionLabelProps) {
    return (
        <Group wrap="nowrap">
            <div>
                <Text style={{ fontFamily: "KG", fontSize: "6vw" }}>{label}</Text>
            </div>
        </Group>
    )
}

const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label} style={{ borderRadius: "2vw", border: 0, boxShadow: "transparent" }}>
        <Accordion.Control>
            <AccordionLabel {...item} />
        </Accordion.Control>
        {item.content !== undefined && (
            <Accordion.Panel>
                <Text size="sm">{item.content}</Text>
            </Accordion.Panel>
        )}
    </Accordion.Item>
))

export const AccordionSet: React.FC<AccordionSetProps> = ({}) => {
    return (
        <Accordion chevronPosition="right" variant="contained">
            {items}
        </Accordion>
    )
}

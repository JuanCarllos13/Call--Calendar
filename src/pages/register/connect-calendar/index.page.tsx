import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { ConnectBox, ConnectItem } from "./styles";

export default function Register() {
  // async function handleRegister(data) {

  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Connect sua agenda</Heading>
        <Text>
          Connect o sua calendário para verificar automaticamente as horas
          ocupados e os novos eventos á media em que são agendados
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>

          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}

import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from "@ignite-ui/react";
import { Container, Header } from "../styles";
import {
  IntervalBox,
  IntervalsContainer,
  IntervalItem,
  IntervalDay,
  IntervalInput,
} from "./styles";
import { ArrowRight } from "phosphor-react";

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda</Text>
            </IntervalDay>

            <IntervalInput>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInput>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça</Text>
            </IntervalDay>

            <IntervalInput>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInput>
          </IntervalItem>
        </IntervalsContainer>

        <Button type="submit">
          <Text>Próximo passo</Text>

          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}

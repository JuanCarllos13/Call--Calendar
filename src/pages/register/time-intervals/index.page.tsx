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
  FormError,
} from "./styles";
import { ArrowRight } from "phosphor-react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { getWeekDays } from "@/utils/get-week-days";
import { zodResolver } from "@hookform/resolvers/zod";
import { convertTimeStringToMinutes } from "@/utils/converte-time-strint-to-minutes";
import { api } from "@/lib/axios";

const timeIntervalsFromSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      })
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => intervals.length > 0, {
      message: "Você precisa selecionar pelo menos um dia da semana!",
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          weekDay: interval.weekDay,
          startTimeMinutes: convertTimeStringToMinutes(interval.startTime),
          endTimeMinutes: convertTimeStringToMinutes(interval.endTime),
        };
      });
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (intervals) =>
            intervals.endTimeMinutes - 60 >= intervals.startTimeMinutes
        );
      },
      {
        message:
          "O horário de termino deve ser pelo menos 1h distante do início.",
      }
    ),
});

type TimeIntervalsFormInput = z.input<typeof timeIntervalsFromSchema>;
type TimeIntervalsFormData = z.output<typeof timeIntervalsFromSchema>;

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<TimeIntervalsFormInput>({
    resolver: zodResolver(timeIntervalsFromSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: "08:00", endTime: "18:00" },
        { weekDay: 1, enabled: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 2, enabled: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 3, enabled: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 4, enabled: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 5, enabled: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 6, enabled: false, startTime: "08:00", endTime: "18:00" },
      ],
    },
  });

  const weekDays = getWeekDays();

  const { fields } = useFieldArray({
    control,
    name: "intervals",
  });
  const intervals = watch("intervals");

  async function handleSetTimeIntervals(data: TimeIntervalsFormData) {
    await api.post('/users/time-intervals', data)
  }

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

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked) =>
                            field.onChange(checked === true)
                          }
                          checked={field.value}
                        />
                      );
                    }}
                  />
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>

                <IntervalInput>
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInput>
              </IntervalItem>
            );
          })}
        </IntervalsContainer>

        {errors.intervals && (
          <FormError size="sm">{errors.intervals.message}</FormError>
        )}
        <Button type="submit" disabled={isSubmitting}>
          <Text>Próximo passo</Text>
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}
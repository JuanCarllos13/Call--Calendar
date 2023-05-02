import { Calendar } from "@/components/Calendar";
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from "./styles";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availability, setAvailability] = useState(null);
  const router = useRouter();

  const isdHasSelected = !!selectedDate;
  const username = String(router.query.username);

  const weekDay = selectedDate ? dayjs(selectedDate).format("dddd") : null;
  const describedDate = selectedDate
    ? dayjs(selectedDate).format("DD[ de ]MMMM")
    : null;

  useEffect(() => {
    if (!selectedDate) {
      return;
    }
    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format("YYYY-MM-DD"),
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }, [selectedDate, username]);

  return (
    <Container isTimePickerOpen={isdHasSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isdHasSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}

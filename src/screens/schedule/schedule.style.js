import { COLORS, FONT_SIZE } from "../../constants/theme.js"
import { arrowColor } from "./../../../node_modules/react-native-calendars/src/style"

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  theme: {
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue,
  },
  textHour: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.gray2,
    marginTop: 20,
  },
}

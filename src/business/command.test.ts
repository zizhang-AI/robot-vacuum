import { ReportFunctionType, parseCommands } from "./command";
import { Robot } from "./robot";
import { Direction } from "./types";

const TEST_CASES = [
  {
    name: "ignore commands before the first PLACE command",
    input: `MOVE
      MOVE
      REPORT
      PLACE 0,0,NORTH
      PLACE 6,6,SOUTH
      MOVE
      REPORT`,
    expectedPosition: [0, 1, Direction.NORTH],
  },
  {
    name: "ignore invalid commands",
    input: `PLACE 0,0,SOUTH
      MOVE
      MOVE
      REPORT`,
    expectedPosition: [0, 0, Direction.SOUTH],
  },
  {
    name: "multiple moves",
    input: `PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT`,
    expectedPosition: [3, 3, Direction.NORTH],
  },
];

describe("parseCommands", () => {
  it.each(TEST_CASES)(
    "$name",
    ({ input, expectedPosition }) => {
      const robot = new Robot();
      const reportFunction: ReportFunctionType = jest.fn();
      parseCommands(input, robot, reportFunction);
      expect(reportFunction).toHaveBeenCalledWith(expectedPosition);
    })
});

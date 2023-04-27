import { Robot } from "./robot";
import { Direction } from "./types";

const PLACE_COMMAND_PATTERN = /^PLACE ([0-4]),([0-4]),(NORTH|SOUTH|EAST|WEST)$/;

export type ReportFunctionType = ([x, y, direction]: [number, number, Direction]) => void;

export function parseCommands(
  input: string, 
  robot: Robot, 
  reportFunction: ReportFunctionType
) {
  const commands = input.split('\n').map(c => c.trim());
  // find the first PLACE command
  while (commands[0].match(PLACE_COMMAND_PATTERN) === null) {
    commands.shift();
  }
  for (const c of commands) {
    parseCommand(robot, c, reportFunction);
  }
}

function parseCommand(robot: Robot, command: string, reportFunction: ReportFunctionType) {
  const placeCommandMatch = command.match(PLACE_COMMAND_PATTERN);
  if (placeCommandMatch) {
    const [_, x, y, direction] = placeCommandMatch || [];
    robot.place(parseInt(x, 10), parseInt(y, 10), direction as Direction);
  } else if (command.match(/^MOVE/)) {
      robot.move();
  } else if (command.match(/^LEFT/)) {
      robot.left();
  } else if (command.match(/^RIGHT/)) {
      robot.right();
  } else if (command.match(/^REPORT/)) {
      reportFunction(robot.getPosition());
  }
  // ignore invalid commands
}

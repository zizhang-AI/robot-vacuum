import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Robot } from "@/business/robot";
import { parseCommands } from "@/business/command";
import { Direction } from "@/business/types";
import styles from "./index.module.css";

export function HomeComponent() {
  const [robot, setRobot] = useState(() => new Robot());
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<[number, number, Direction] | undefined>(
    undefined
  );
  const onSubmit = () => {
    setOutput(undefined);
    parseCommands(input, robot, setOutput);
  };
  return (
    <div className={styles.container}>
      <TextField
        multiline
        variant="outlined"
        label="Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
        minRows={4}
        data-cy="input"
      />
      <Button variant="contained" onClick={onSubmit} data-cy="submit">
        Submit
      </Button>
      {output && (
        <h1 data-cy="output">{`${output[0]},${output[1]},${output[2]}`}</h1>
      )}
    </div>
  );
}

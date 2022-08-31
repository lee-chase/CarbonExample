import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {
  Button,
  Content,
  FlexGrid as Grid,
  Column,
  Row,
  Theme,
  NumberInput,
  FormGroup
} from "@carbon/react";
import HeaderExample from "./components/HeaderExample";
import "@carbon/grid/scss/grid.scss";
import "./styles.scss";

const App = () => {
  const [maxCols, setMaxCols] = useState(16);
  const [cols, setCols] = useState(16);

  return (
    <Theme theme="g10" className="app">
      <HeaderExample />
      <Content className="app-content">
        <Grid>
          <Row>
            <Column>
              <FormGroup legendText="Grid settings">
                <NumberInput
                  min={1}
                  max={maxCols}
                  value={cols}
                  label="Grid cols"
                  helperText="Example does not detect page size (assumes large)."
                />
              </FormGroup>
            </Column>
          </Row>
        </Grid>
        <h2>The columns below are rendered based on the above settings</h2>
        <Row className="row-with-cols-example">
          {Array.from({ length: cols }, (_) => (
            <Column className="cols-example">
              <div className="cols-example__content">X</div>
            </Column>
          ))}
        </Row>
      </Content>
    </Theme>
  );
};

render(<App />, document.getElementById("root"));

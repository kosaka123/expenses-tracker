import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import useStyles from "./styles";
import Main from "./components/Main/Main";
import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

function App() {
  const classes = useStyles();
  const main = useRef(null);
  const executeScroll = () => main.current.scrollIntoView();
  const { speechState } = useSpeechContext();
  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, []);
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid className={classes.mobile} item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} className={classes.main} item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid className={classes.desktop} item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid className={classes.last} item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;

import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        //to define wether it is for mobile devices or bigger screens.
        base: `"nav" "main"`, //for mobile devices
        lg: `"nav   nav" "aside main"`, //for large devices, weider than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

//line 15<show above="lg" is to render on large screens and above.

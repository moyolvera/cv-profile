import React from "react";
import { Background, DogItem, Fab, LargeHeader } from "../../components";

interface DogsProps {}

function Dogs({}: DogsProps) {
  return (
    <Background>
      <LargeHeader title="DOGS" subtitle="MY" />
      <DogItem />
      <Fab />
    </Background>
  );
}

export default Dogs;

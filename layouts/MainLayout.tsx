import React from 'react';
import {NextPage} from "next";
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";

type Props = {
  children?: React.ReactNode
};

const MainLayout: NextPage<Props> = ({children}) => {
  return (
    <>
      <Navbar/>
      <Container>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;

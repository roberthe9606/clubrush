import { NavigateNextTwoTone } from "@material-ui/icons";
import React, { useState } from 'react';

import Container from "react-bootstrap/Container";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button:{
        borderRadius: 500,
        width: 100,
        padding: 10,
        margin: 20,
    }
}


export default function Button({addToBookmark}){
        return(
            <Container>
              <div>
              <button style = {styles} onClick={addToBookmark}>
                Favorite
              </button>
              </div>
        </Container>
    );
};
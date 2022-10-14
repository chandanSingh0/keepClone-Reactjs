import { useContext } from "react";
import { Box, Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import DeleteNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deletedNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

        <Grid container style={{ marginTop: 16 }}>
          {deletedNotes.map((note) => (
            <Grid item key={note.id}>
              <DeleteNote note={note} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;

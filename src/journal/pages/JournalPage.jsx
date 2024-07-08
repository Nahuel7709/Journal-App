import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView/> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "success.main",
          ":hover": { backgroundColor: "success.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  );
};

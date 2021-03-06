import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { gql } from "@apollo/client";

export const USER_FIELDS_FRAGMENT = gql`
  fragment userFieldsFragment on User {
    id
    name
    avatar {
      image {
        url
      }
      color
    }
  }
`;

const User = ({ user }) => {
  return (
    <Box
      m={2}
      border={"1px solid grey"}
      borderRadius={"5px"}
      bgcolor={user.avatar.color}
      width={"200px"}
    >
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        src={user.avatar.image.url}
        alt={user.name}
      />
      <Typography variant="h6" component="h6" mb={1}>
        {user.name}
      </Typography>
    </Box>
  );
};

export default User;

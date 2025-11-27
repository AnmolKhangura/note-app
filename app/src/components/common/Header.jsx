import HighlightIcon from "@mui/icons-material/Highlight";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Button, Box } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const { logout, userName } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem" }}>
      <h1 style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: 0 }}>
        <HighlightIcon /> Note App <span style={{ fontSize: "1rem", fontWeight: "500" }}>Welcome, {userName}!</span>
      </h1>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Button
          startIcon={<LogoutIcon />}
          variant="outlined"
          color="black"
          onClick={handleLogout}
          sx={{ textTransform: "none" }}
        >
          Logout
        </Button>
      </Box>
    </header>
  );
}

export default Header;

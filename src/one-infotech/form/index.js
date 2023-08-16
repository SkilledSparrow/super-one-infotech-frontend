import React from "react";

// @mui material components
// import Grid from "@mui/material/Grid";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";
// import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
// import MDBox from "components/MDBox";
// import MDBadgeDot from "components/MDBadgeDot";
// import MDButton from "components/MDButton";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const From = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChangeAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDInput
        type="text"
        label="Any Keywords"
        fullWidth
        placeholder="Any Keywords"
        margin="normal"
      />
      <MDInput
        type="text"
        label="All Keywords"
        fullWidth
        placeholder="All Keywords"
        margin="normal"
      />
      <MDInput
        type="text"
        label="Excluding Keywords"
        fullWidth
        placeholder="Excluding Keywords"
        margin="normal"
      />
      <div className="input">
        <MDInput
          type="integer"
          label="Experience (min)"
          halfWidth
          placeholder="min"
          margin="normal"
        />
        {/* <span>To</span> */}
        <MDInput type="integer" label="max" halfWidth placeholder="max" margin="normal" />
      </div>
      <div className="input">
        <MDInput
          type="integer"
          label="Annual Salary (min)"
          halfWidth
          placeholder="min"
          margin="normal"
        />
        {/* <span>To</span> */}
        <MDInput type="integer" label="max" halfWidth placeholder="max" margin="normal" />
      </div>
      <MDInput
        type="location"
        label="Current Location"
        fullWidth
        placeholder="Type or select location from list"
        margin="normal"
      />
      <Accordion expanded={expanded === "panel1"} onChange={handleChangeAccordion("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Educational Details</Typography>
        </AccordionSummary>
        <h3>UG Qualifications</h3>
        <ToggleButtonGroup
          color="info"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Any UG Qualifications">Any UG Qualifications</ToggleButton>
          <ToggleButton value="Specific UG Qualifications">Specific UG Qualifications</ToggleButton>
          <ToggleButton value="UG not necessary">UG not necessary</ToggleButton>
        </ToggleButtonGroup>
        <MDInput
          type="text"
          label="Institute Name"
          fullWidth
          placeholder="Institue name"
          margin="normal"
        />
        <div className="input">
          <MDInput
            type="integer"
            label="Year of graduation (From)"
            halfWidth
            placeholder="From"
            margin="normal"
          />
          {/* <span>To</span> */}
          <MDInput type="integer" label="To" halfWidth placeholder="To" margin="normal" />
        </div>
        <MDInput
          type="text"
          label="Education type"
          fullWidth
          placeholder="Type here or select"
          margin="normal"
        />
        <h3>PG Qualifications</h3>
        <ToggleButtonGroup
          color="info"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Any PG Qualifications">Any PG Qualifications</ToggleButton>
          <ToggleButton value="Specific PG Qualifications">Specific PG Qualifications</ToggleButton>
          <ToggleButton value="PG not necessary">PG not necessary</ToggleButton>
        </ToggleButtonGroup>

        <MDInput
          type="text"
          label="Institute Name"
          fullWidth
          placeholder="Institue name"
          margin="normal"
        />
        <div className="input">
          <MDInput
            type="integer"
            label="Year of graduation (From)"
            halfWidth
            placeholder="From"
            margin="normal"
          />
          {/* <span>To</span> */}
          <MDInput type="integer" label="To" halfWidth placeholder="To" margin="normal" />
        </div>
        <MDInput
          type="text"
          label="Education type"
          fullWidth
          placeholder="Type here or select"
          margin="normal"
        />
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
    </DashboardLayout>
  );
};

export default From;

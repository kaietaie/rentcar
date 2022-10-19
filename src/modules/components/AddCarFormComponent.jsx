import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
  MenuItem,
  FormControl,
} from "@mui/material";
import createCar from "./dbConnect/CreateCarComponent";

const AddCarForm = () => {

  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
      engine: "",
      transmission: Number,
      fuel: Number,
      consumption: "",
      trunk: Number,
      seats: Number,
      clima: Number,
      cruise: Number,
      class: Number,
      available: "",
    },

    onSubmit: (values) => {
      createCar(values);
    },
  });
  
  const transformTransmission = (ev) => {
    formik.values.transmission = ev.target.value
  }
  
  const transformFuel = (ev) => {
    formik.values.fuel = ev.target.value
  }

  const selectClimaHandler = (ev) => {
    formik.values.clima = ev.target.value
  }

  const selectCruiseHandler = (ev) => {
    formik.values.cruise = ev.target.value
  }

  const selectClassHandler = (ev) => {
    formik.values.class = ev.target.value
  }

  const transformAvailable = (ev) => {
    if (ev.target.value === true) formik.values.available = 1;
    formik.values.available = 2;
  }

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        maxWidth: "500px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="brand"
          name="brand"
          type="text"
          label="Brand"
          onChange={formik.handleChange}
          value={formik.values.brand}
        />

        <TextField
          id="model"
          name="model"
          type="text"
          label="Model"
          onChange={formik.handleChange}
          value={formik.values.model}
        />

        <TextField
          id="engine"
          name="engine"
          type="text"
          label="Engine"
          onChange={formik.handleChange}
          value={formik.values.engine}
        />

        <TextField
          select
          autoWidth
          label="Transmission"
          id="transmission"
          onChange={transformTransmission}
        >
          <MenuItem value={"1"}>Manual</MenuItem>
          <MenuItem value={"2"}>Automatic</MenuItem>
        </TextField>
       
        <TextField
          select
          autoWidth
          label="Fuel"
          id="fuel"
          onChange={transformFuel}
        >
          <MenuItem value={"1"}>Diesel</MenuItem>
          <MenuItem value={"2"}>Benzin</MenuItem>
        </TextField>

        <TextField
          id="consumption"
          name="consumption"
          type="text"
          label="Consumtion"
          onChange={formik.handleChange}
          value={formik.values.consumption}
        />

        <TextField
          id="trunk"
          name="trunk"
          type="text"
          label="Trunk"
          onChange={formik.handleChange}
          value={formik.values.trunk}
        />

        <TextField
          id="seats"
          name="seats"
          type="text"
          label="Seats"
          onChange={formik.handleChange}
          value={formik.values.seats}
        />
        <br/>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <FormLabel component="legend">Options</FormLabel>
        <TextField
          select
          autoWidth
          label="Climatisation"
          id="clima"
          onChange={selectClimaHandler}
        >
          <MenuItem value={"1"}>With climatisation</MenuItem>
          <MenuItem value={"2"}>Without climatisation</MenuItem>
        </TextField>
        <br/>
        <TextField
          select
          autoWidth
          label="Cruise Control"
          id="cruise"
          onChange={selectCruiseHandler}
        >
          <MenuItem value={"1"}>With Cruise Control</MenuItem>
          <MenuItem value={"2"}>Without Cruise Control</MenuItem>
        </TextField>
        </FormControl>

        <FormLabel component="legend">Class</FormLabel>
      
        <RadioGroup row >
          <FormControlLabel 
          id="class"
          value={"1"}
          control={<Radio />} 
          label="Econom"
          onChange={selectClassHandler} />
          
          <FormControlLabel 
          id="class"
          value={"2"} 
          control={<Radio />} 
          label="Business"
          onChange={selectClassHandler} />
        </RadioGroup>
        
        <br />
        <FormLabel component="legend">Available</FormLabel>
        <FormControlLabel
          control={<Checkbox />}
          label="Available"
          id="available"
          name="available"
          type="checkbox"
          onChange={transformAvailable}
          value={formik.values.available}
        />
        <br />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddCarForm;

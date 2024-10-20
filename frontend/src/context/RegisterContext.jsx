import React, { createContext, useState, useEffect } from "react";
import { Country, State } from "country-state-city";

export const RegisterContext = createContext();

const RegisterContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const sortedCountries = Country.getAllCountries().sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCountries(sortedCountries);
  }, []);

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    if (countryCode) {
      const sortedStates = State.getStatesOfCountry(countryCode).sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setStates(sortedStates);
    } else {
      setStates([]);
    }
  };

  return (
    <RegisterContext.Provider
      value={{ countries, states, selectedCountry, handleCountryChange }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider

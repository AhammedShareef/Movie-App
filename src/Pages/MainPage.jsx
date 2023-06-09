import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePages from "./MoviePages";
import { ComedyMoviesAPI, LatestMoviesAPI, PopularMoviesAPI } from "../URL/Url";
import Header from "../Header/Header";
import MovieInfo from "./MovieInfo";
import Banner from "./Banner";

const idContext = createContext();

const MainPage = () => {
  const [id, setId] = useState("");
  const [currentUrl, setcurrentUrl] = useState(PopularMoviesAPI);
  const [banner, setBanner] = useState(true);
  const [search, setSearch] = useState("");
  console.log(search);

  const updatedId = (updatedData) => {
    setId(updatedData);
  };

  const updatedBanner = (updatedData) => {
    setBanner(updatedData);
  };

  console.log(id);
  console.log(banner);

  return (
    <div>
      <idContext.Provider
        value={{ id, updatedId, setcurrentUrl, updatedBanner }}
      >
        <BrowserRouter>
          <Header search={search} setSearch={setSearch} />
          {banner && <Banner apiURL={currentUrl} />}
          <Routes>
            <Route
              path="/popularmovies"
              element={
                <MoviePages
                  search={search}
                  apiURL={PopularMoviesAPI}
                  name={"POPULAR MOVIES"}
                />
              }
            />
            <Route
              path="/latestmovies"
              element={
                <MoviePages
                  search={search}
                  apiURL={LatestMoviesAPI}
                  name={"LATEST MOVIES"}
                />
              }
            />
            <Route
              path="/comedymovies"
              element={
                <MoviePages
                  search={search}
                  apiURL={ComedyMoviesAPI}
                  name={"COMEDY MOVIES"}
                />
              }
            />
            <Route path="/movieInfo/:id" element={<MovieInfo />} />
          </Routes>
        </BrowserRouter>
      </idContext.Provider>
    </div>
  );
};

export default MainPage;
export { idContext };

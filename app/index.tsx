import React from "react";
// On remonte d'un cran (../) pour aller chercher le App.tsx qui est à la racine
import App from "../App";

export default function EntryPoint() {
  // On retourne ton chef d'orchestre global !
  return <App />;
}

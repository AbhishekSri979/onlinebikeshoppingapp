import * as React from "react";
//NAVIGATION ACTION
import { CommonActions } from "@react-navigation/native";
export const navigationRef = React.createRef();
let navigator;
export const navigate = (path, params) => {
  navigationRef.current.navigate(path, params);
};

export const goBack = () => {
  navigationRef.current.goBack();
};

export const reset = (name, index) => {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: index,
      routes: [
        {
          name: name,
        },
      ],
    })
  );
};


export const setNavigator = (nav) => {
  navigator = nav;
};

export const getCurrentRoute = () => {
  const route = navigator.getCurrentRoute();
  return route.name;
};
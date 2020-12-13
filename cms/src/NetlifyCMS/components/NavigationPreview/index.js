import React from "react";
import { Nav } from "components";

const NavigationPreview = ({ entry, widgetFor }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const menu = entry.getIn(["data"]).toJS();
    setData({ menu });
    console.log("data", menu);
  }, [entry]);

  return (
    <React.Fragment>
      <Nav data={data} />
    </React.Fragment>
  );
};

export default NavigationPreview;

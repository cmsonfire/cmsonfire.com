import React from "react";
import { Box, Nav, NavigationBar } from "@cmsonfire/components";

const NavigationPreview = ({ entry, widgetFor }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const menu = entry.getIn(["data"]).toJS();
    setData({ menu });
  }, [entry]);

  return (
    <React.Fragment>
      <NavigationBar header="Site Title">
        <Box className={`divide-y divide-gray-100 absolute top-0 right-0`}>
          <Nav data={data} />
        </Box>
      </NavigationBar>
    </React.Fragment>
  );
};

export default NavigationPreview;

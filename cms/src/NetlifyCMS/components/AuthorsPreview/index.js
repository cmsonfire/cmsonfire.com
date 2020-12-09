import React from "react";

const AuthorsPreview = ({ entry = {} }) => {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    if (entry) setData(entry.toJS().data);
  }, [entry]);

  return (
    (data && data.info && (
      <div>
        <hr />
        <strong>
          {data.info.name} ({data.tag})
        </strong>
        <br />
        {data.info.description}
      </div>
    )) ||
    null
  );
};

export default AuthorsPreview;

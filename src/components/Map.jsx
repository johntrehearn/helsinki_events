const Map = (/* { area } */) => {
  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "52%" }}>
      <iframe
        title="Service map - Home page"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          border: "none",
          width: "100%",
          height: "100%",
        }}
        src={`https://servicemap.hel.fi/en/embed/unit/$/* {areaId[0]} */`}
      ></iframe>
    </div>
  );
};

export default Map;

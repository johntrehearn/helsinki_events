const Map = ({ area }) => {
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
        src="https://servicemap.hel.fi/en/embed/unit/28473?city=helsinki,espoo,vantaa,kauniainen,kirkkonummi&bbox=60.16480658313126,24.940466880798343,60.17125385566993,24.965357780456547"
      ></iframe>
    </div>
  );
};

export default Map;

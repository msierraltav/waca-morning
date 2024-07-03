import { useParams } from "react-router-dom";
import CountryCityInformation from "./CountryCityInformation";
import "./CountryInfo.css";

interface RouteParams {
  name: string | undefined;
}

function CountryInfo() {
  const params = useParams<RouteParams>();

  return (
    <>
      {params.name ? (
        <>
          <CountryCityInformation name={params?.name} />
        </>
      ) : (
        <>
          <h1>No Data</h1>
        </>
      )}
    </>
  );
}

export default CountryInfo;

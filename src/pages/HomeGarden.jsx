import { Navigate, useLocation } from "react-router-dom";

/** Legacy path. Section queries are kept so old in-page links still land. */
export default function HomeGardenRedirect() {
  const { search } = useLocation();
  return <Navigate to={`/services/home-garden${search}`} replace />;
}

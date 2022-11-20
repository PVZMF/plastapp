import { connect } from "react-redux";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";

function RenderIfLoggedIn({
  mustLoggedIn,
  user,
  children,
  ifLoggedInNavigateTo,
}) {
  const location = useLocation(),
    [searchParams] = useSearchParams();
  const shouldNavigateTo = searchParams.get("shouldNavigateTo");

  if (mustLoggedIn === true) {
    return user ? (
      children
    ) : (
      <Navigate to="/login" state={{ prevRoute: location.pathname }} />
    );
  } else if (mustLoggedIn === false) {
    return !user ? (
      children
    ) : (
      <Navigate
        to={shouldNavigateTo ? shouldNavigateTo : ifLoggedInNavigateTo || "/"}
      />
    );
  } else {
    return children;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(RenderIfLoggedIn);

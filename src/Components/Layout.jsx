import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router";

const Layout = ({ children }) => {
    const location = useLocation()	;
	const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
		const { pathname } = location;
		setCurrentPath(pathname);
		console.log(pathname);
	}, [location]);

  return (
    <div>
      <div>
        {currentPath !== "/login" && (
          <Header />
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

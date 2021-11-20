// This function is return every time at initial position of a pages
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

 function ScrollToTop() {
   const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);

   return null;
 }

export default ScrollToTop;

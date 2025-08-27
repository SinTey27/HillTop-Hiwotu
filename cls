[1mdiff --git a/src/Components/Navbar/Navbar.jsx b/src/Components/Navbar/Navbar.jsx[m
[1mindex e746eba..0bff387 100644[m
[1m--- a/src/Components/Navbar/Navbar.jsx[m
[1m+++ b/src/Components/Navbar/Navbar.jsx[m
[36m@@ -19,6 +19,10 @@[m [mconst Navbar = () => {[m
   const handleMouseEnterProjects = () => setDropdownProjectsOpen(true);[m
   const handleMouseLeaveProjects = () => setDropdownProjectsOpen(false);[m
 [m
[32m+[m[32m  // const [mobileMenu, setMobileMenu] = useState(false);[m
[32m+[m[32m  // const toggleMenu2 = () => {[m
[32m+[m[32m  //   mobileMenu ? setMobileMenu(false) : setMobileMenu(true);[m
[32m+[m[32m  // };[m
   return ([m
     <header>[m
       <div className="header-container">[m

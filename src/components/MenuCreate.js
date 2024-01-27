import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuCreate.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SlArrowDown,SlArrowUp } from "react-icons/sl";

function MenuCreate({ item, depth, menuStatus, setMenuStatus }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (item) => {
    setIsHovered(true);

    if (item.children) {
      setMenuStatus((prev) => [...prev, item.id]);
    }
  };

  const shouldRenderDropdown = menuStatus.includes(item.id) && isHovered;

  return (
    <>

      <li
        onMouseEnter={() => handleMouseEnter(item)}
        onMouseLeave={() => setIsHovered(false)}
        key={item.id}
        className={`menu-dd`}
      >
        <Link to={item.path} className='nav-links'>
          {item.title}
          {item.children && (
            <span className='arrow-icon'>
              {shouldRenderDropdown ? <SlArrowUp size={8}/> : <SlArrowDown size={8}/>}
            </span>
          )}
        </Link>
        {item.children && shouldRenderDropdown && 
        (
          <ul className={`${depth === 0 ? 'depth-zero-dd' : 'no-depth-zero-dd'}`}>
            {item.children.map((subitem) => (
              <MenuCreate
                key={subitem.id}
                item={subitem}
                depth={depth + 1}
                menuStatus={menuStatus}
                setMenuStatus={setMenuStatus}
              />
            ))}
          </ul>
        )}
      </li>
    </>
  );
}

export default MenuCreate;














// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './MenuCreate.css';

// function MenuCreate({ item, depth, menuStatus, setMenuStatus }) {
//     const [isHovered, setIsHovered] = useState(false);
//     // const [menuClicked, setMenuClicked] = useState(false);
//     const handleMouseEnter = (item, depth) => {
//         setIsHovered(true);
//         if (depth === 0) {
//             setMenuStatus([]);
//         }
//         if (item.children) {
//             setMenuStatus((prev) => [...prev, item.id]);
//         }
//         console.log("te",item);

//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     const shouldRenderDropdown = menuStatus.includes(item.id) && isHovered;

//     if (item.children && shouldRenderDropdown) {
//         return (
//             <li
//                 onMouseEnter={() => handleMouseEnter(item, depth)}
//                 onMouseLeave={handleMouseLeave}
//                 key={item.id}
//                 className={`menu-dd`}
//             >
//                 <Link to={item.path} className='nav-links'>{item.title} </Link>
//                 <ul className={`${depth === 0 ? 'depth-zero-dd' : 'no-depth-zero-dd'}`}>
//                     {item.children.map((subitem) => (
//                         <MenuCreate
//                             key={subitem.id}
//                             item={subitem}
//                             depth={depth + 1}
//                             menuStatus={menuStatus}
//                             setMenuStatus={setMenuStatus}
//                         />
//                     ))}
//                 </ul>
//             </li>
//         );
//     }
//     else {
//         return (
//             <li
//                 className={`menu-dd`}
//                 onMouseEnter={(e) => handleMouseEnter(item, depth)}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <Link className='nav-links' to={item.path}>{item.title}</Link>
//             </li>
//         );
//     }
// }

// export default MenuCreate;









// // ${(menuStatus.find((ele) => ele === item.id) ? 'block-stat' : 'hidden-stat')}



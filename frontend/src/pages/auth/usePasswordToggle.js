import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);
    
    const Icon = <FontAwesomeIcon icon={visible ? "eye-slash" : "eye"} 
     onClick={()=> setVisibility(visiblity=>!visiblity)}
    />

    const InputType = visible ? "text":"password";

    return[InputType,Icon];
}

export default usePasswordToggle;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const usePasswordToggle = () => {
//   const [visible, setVisibility] = useState(false);

//   const toggleVisibility = () => {
//     setVisibility((visibility) => !visibility);
//   };

//   const Icon = (
//     <FontAwesomeIcon
//       icon={visible ? 'eye-slash' : 'eye'}
//       onClick={toggleVisibility}
//     />
//   );

//   const InputType = visible ? 'text' : 'password';

//   return [InputType, Icon, toggleVisibility];
// };

// export default usePasswordToggle;

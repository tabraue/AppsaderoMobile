import Icon from "react-native-vector-icons/FontAwesome";

import theme from "../../theme/theme";
import Svg, { Path } from "react-native-svg";

export const OpenEyeIcon = () => {
  return <Icon name={"eye"} size={20} color={theme.colors.textPrimary} />;
};

export const CloseEyeIcon = () => {
  return <Icon name={"eye-slash"} size={20} color={theme.colors.textPrimary} />;
};

export const HomeIcon = ({ color }) => {
  return <Icon name={"home"} size={30} color={color} />;
};

export const MoneyIcon = ({ color }) => {
  return <Icon name="money" size={30} color={color} />;
};

export const BbqIcon = ({ color, ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 -960 960 960"
      {...props}
    >
      <Path
        fill={color}
        d="M651-299q46 0 78 32t32 78q0 46-32 78t-78 32q-36 0-65-21.5T547-157H254l-41 63q-7 11-18.5 14T173-84q-11-8-14.5-19.5T162-126l182-276q-75-29-121.5-90.5T168-635h546q-8 81-56 142t-120 90l58 90q-14 7-27 16t-21 20l-71-110q-6 2-16 2h-39q-10 0-17-2L294-217h253q10-36 38.5-59t65.5-23Zm0 160q21 0 35.5-14.5T701-189q0-21-14.5-35.5T651-239q-21 0-35.5 14.5T601-189q0 21 14.5 35.5T651-139ZM440-445q65 0 118.5-35t79.5-95H244q24 60 77.5 95T440-445Zm-75-228q5-28-1.5-49T334-774q-22-29-28-51.5t-1-54.5h30q-3 33 3 52.5t27 47.5q20 28 27 51.5t3 55.5h-30Zm77 0q3-36-3-55.5T412-774q-22-28-28.5-51t-1.5-55h30q-5 26 1 47t29 53q20 27 26.5 51t3.5 56h-30Zm76 0q4-35-2-55t-27-46q-23-29-29.5-52t-1.5-54h30q-5 26 1.5 47t29.5 53q20 26 26.5 50t2.5 57h-30Zm-78 228Z"
      />
    </Svg>
  );
};

export const FriendsIcon = ({ color }) => {
  return <Icon name={"users"} size={30} color={color} />;
};

/* export const ArrowRightIcon = ({ color, ...props }) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path  fill={color} d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
  </Svg>
  )
} */

export const ArrowLeftIcon = ({ color }) => {
  return <Icon name={"arrow-left"} size={30} color={color} />;
};

export const ArrowRightIcon = ({ color }) => {
  return <Icon name={"arrow-right"} size={30} color={color} />;
};

export const NotificationIcon = ({ color, ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      {...props}
    >
      <Path
        fill={color}
        d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm100-280Zm260 134v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM160-520v80h182l98 58v-196l-98 58H160Z"
      />
    </Svg>
  );
};

export const FilterIcon = ({ color }) => {
  return <Icon name={"filter"} size={30} color={color} />;
};

export const AddFriendIcon = ({ color }) => {
  return <Icon name={"user-plus"} size={30} color={color} />;
};

export const RemoveFriendIcon = ({ color }) => {
  return <Icon name={"user-times"} size={30} color={color} />;
};

export const AddIcon = ({ color }) => {
  return <Icon name={"plus"} size={30} color={color} />;
};

export const MinusIcon = ({ color }) => {
  return <Icon name={"minus"} size={30} color={color} />;
};

export const XIcon = ({ color, ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      {...props}
    >
      <Path
        fill={color}
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </Svg>
  );
};

export const TickIcon = ({ color, ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      {...props}
    >
      <Path
        fill={color}
        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
      />
    </Svg>
  );
};

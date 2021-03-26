import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export function Logo(props) {
  return (
    <Svg
      width={props.width || "96"}
      height={props.height || "96"}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x="6"
        y="21"
        width="79"
        height="66"
        rx="10"
        fill="#B2BBC4"
        stroke="#3D6770"
        stroke-width="4"
      />
      <Rect
        x="54"
        y="44"
        width="40"
        height="20"
        rx="4"
        fill="#B2B6B9"
        stroke="#3D6770"
        stroke-width="4"
      />
      <Path
        d="M56 29H72C74.7614 29 77 31.2386 77 34V35"
        stroke="#3D6770"
        stroke-width="4"
        stroke-linecap="round"
      />
      <Path
        d="M46 29L49 29"
        stroke="#3D6770"
        stroke-width="4"
        stroke-linecap="round"
      />
      <Path
        d="M14 44L14 74C14 76.7614 16.2386 79 19 79L26 79"
        stroke="#3D6770"
        stroke-width="4"
        stroke-linecap="round"
      />
      <Path
        d="M31 79H35"
        stroke="#3D6770"
        stroke-width="4"
        stroke-linecap="round"
      />
      <Path
        d="M77 72H84"
        stroke="#3D6770"
        stroke-width="4"
        stroke-linecap="round"
      />
      <Path
        d="M67 72H71"
        stroke="#3D6770"
        stroke-width="4"
        stroke-linecap="round"
      />
      <Circle
        cx="64"
        cy="54"
        r="4"
        fill="#B2BBC3"
        stroke="#3D6770"
        stroke-width="4"
      />
      <Path
        d="M20.0716 21L21.5882 19.0362C21.947 18.674 22.2882 18.3282 22.614 17.9979C24.1452 16.4459 25.3376 15.2374 26.43 14.275C27.745 13.1165 28.7786 12.4422 29.8632 12.0528C32.0852 11.2549 35.0154 11.4503 41.8514 12.8384C50.7827 14.652 57.7273 11.7466 62.3705 8.02956C63.206 7.36076 64.5035 7.03517 65.7391 7.21038C66.9702 7.38497 67.7433 7.97821 68.0353 8.69752L73.0296 21H34.6727H20.0716Z"
        fill="#ADFDB0"
        stroke="#3D6770"
        stroke-width="4"
      />
    </Svg>
  );
}

export function Key(props) {
  return (
    <Svg
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width="24" height="24" fill="white" />
      <Path
        d="M6.22695 10.8811C6.28898 10.1012 6.93992 9.5 7.72223 9.5H16.2778C17.0601 9.5 17.711 10.1012 17.7731 10.8811L18.3299 17.8811C18.3993 18.7536 17.7099 19.5 16.8346 19.5H7.16541C6.29009 19.5 5.60072 18.7536 5.67013 17.8811L6.22695 10.8811Z"
        stroke="#94AFB6"
      />
      <Path
        d="M16 10V8C16 5.79086 14.2091 4 12 4V4C9.79086 4 8 5.79086 8 8V10"
        stroke="#94AFB6"
      />
      <Circle cx="12" cy="15" r="1.5" stroke="#94AFB6" />
    </Svg>
  );
}

export function Let(props) {
  return (
    <Svg
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke="#94AFB6" />
      <Path
        d="M5 8L10.8375 12.1697C11.5329 12.6664 12.4671 12.6664 13.1625 12.1697L19 8"
        stroke="#94AFB6"
        stroke-linecap="round"
      />
    </Svg>
  );
}
export function User(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="12" cy="12" r="8.5" stroke="#94AFB6" />
      <Path
        d="M18 18C18 16.3431 15.3137 15 12 15C8.68629 15 6 16.3431 6 18"
        stroke="#94AFB6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle cx="12" cy="10" r="2.5" stroke="#94AFB6" />
    </Svg>
  );
}
export function Vec(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.5802 16.3435L16.3417 14.1836C15.9307 13.9117 15.3798 14.0012 15.076 14.3892L14.1327 15.6022C14.0114 15.762 13.7911 15.8084 13.6157 15.711L13.4363 15.612C12.8414 15.2878 12.1013 14.8841 10.61 13.3922C9.11876 11.9003 8.71429 11.1596 8.39006 10.5658L8.29167 10.3863C8.1929 10.211 8.23839 9.98963 8.39831 9.86742L9.61038 8.92431C9.9982 8.62043 10.0878 8.06966 9.81622 7.65853L7.65654 4.41984C7.37824 4.00119 6.81989 3.87551 6.38904 4.13452L5.03484 4.94805C4.60934 5.19822 4.29716 5.60338 4.16378 6.07862C3.67613 7.85555 4.04298 10.9222 8.56019 15.4403C12.1535 19.0336 14.8286 20 16.6673 20C17.0904 20.0018 17.5119 19.9467 17.9204 19.8363C18.3957 19.703 18.8009 19.3908 19.0509 18.9651L19.8652 17.6116C20.1246 17.1807 19.999 16.6219 19.5802 16.3435Z"
        stroke="#94AFB6"
      />
    </Svg>
  );
}
export function Google(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12 10.2V13.8H17.0922C16.3488 15.8952 14.3472 17.4 12 17.4C9.0228 17.4 6.6 14.9772 6.6 12C6.6 9.0228 9.0228 6.6 12 6.6C13.2906 6.6 14.5326 7.0626 15.4974 7.9032L17.8626 5.1888C16.2426 3.7776 14.1618 3 12 3C7.0374 3 3 7.0374 3 12C3 16.9626 7.0374 21 12 21C16.9626 21 21 16.9626 21 12V10.2H12Z"
        fill="#94AFB6"
      />
    </Svg>
  );
}
export function Facebook(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.5858 2.00416L13.9474 2C10.9832 2 9.06766 3.9319 9.06766 6.92203V9.19141H6.41486C6.18563 9.19141 6 9.37409 6 9.59943V12.8875C6 13.1128 6.18584 13.2953 6.41486 13.2953H9.06766V21.5922C9.06766 21.8175 9.25329 22 9.48252 22H12.9437C13.1729 22 13.3585 21.8173 13.3585 21.5922V13.2953H16.4603C16.6895 13.2953 16.8751 13.1128 16.8751 12.8875L16.8764 9.59943C16.8764 9.49123 16.8326 9.38762 16.7549 9.31105C16.6772 9.23448 16.5714 9.19141 16.4613 9.19141H13.3585V7.26763C13.3585 6.34298 13.5827 5.87358 14.808 5.87358L16.5853 5.87295C16.8144 5.87295 17 5.69027 17 5.46514V2.41197C17 2.18705 16.8146 2.00458 16.5858 2.00416Z"
        fill="#94AFB6"
      />
    </Svg>
  );
}

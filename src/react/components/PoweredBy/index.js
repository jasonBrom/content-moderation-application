import React from "react";
import { isMobile } from "react-device-detect";

import "./style.css";

const PoweredBy = () => {
  return (
    <div className="poweredBy">
      Powered by
      <a href="https://www.sashido.io" className="sashido" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" height="24">
          <path fill="#FFFFFF"
            d="M79.5,30.3c0,0.2,0,0.4,0.1,0.7s0,0.4,0,0.6c0,1.1-0.2,2.1-0.5,3s-0.8,1.8-1.4,2.6s-1.3,1.5-2,2.1 C74.8,40,74,40.5,73,41s-1.9,0.8-2.9,1c-1,0.2-2,0.3-3,0.3c-0.9,0-1.9,0-2.7-0.1c-0.9-0.1-1.7-0.1-2.5-0.1c-0.6,0-1.2,0-1.7,0.1 c-0.5,0.1-1,0.3-1.5,0.5c-0.4-1.4-0.8-2.6-1.2-3.8s-0.8-2.1-1.2-2.9c-0.4-0.9-0.8-1.8-1.2-2.5c1.2,0.6,2.4,1.1,3.6,1.5 c1.2,0.4,2.4,0.6,3.4,0.8c1.1,0.2,2.1,0.3,3,0.4s1.6,0.1,2.2,0.1c0.7,0,1.3,0,2-0.1s1.4-0.2,2-0.4c-0.2-0.2-0.3-0.4-0.5-0.6 c-0.2-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.5-0.3c-0.3-0.1-0.7-0.3-1.2-0.4c-0.5-0.1-1.1-0.3-1.7-0.4c-0.6-0.1-1.3-0.3-2-0.5 s-1.4-0.4-2.1-0.7c-0.7-0.3-1.3-0.5-2-0.9c-0.7-0.4-1.2-0.7-1.7-1.1c-0.4-0.3-0.7-0.7-1-1.1c-0.3-0.4-0.5-0.8-0.6-1.2 c-0.1-0.4-0.3-0.8-0.3-1.2C57,26.5,57,26.1,57,25.7c-0.4,0.1-0.7,0.3-1,0.4s-0.5,0.2-0.7,0.3L55,26.6c0.4-1.1,0.9-2.1,1.5-2.9 c0.7-0.8,1.4-1.6,2.2-2.2c0.8-0.6,1.7-1.1,2.6-1.6c0.9-0.4,1.8-0.8,2.7-1c2.1-0.6,4.4-1,7-1.1c0.8,0,1.6,0,2.5-0.1 c0.7-0.1,1.6-0.1,2.6-0.2c1-0.1,2-0.3,3-0.5c-0.3,0.5-0.6,1-0.8,1.6s-0.4,1.1-0.5,1.7s-0.2,1.1-0.2,1.7c0,0.6-0.1,1.1-0.1,1.5 c0,0.3,0,0.6,0,0.8c0,0.2,0,0.5,0,0.7c0,0.2,0,0.4,0.1,0.6c-1.8-0.8-3.5-1.4-5.2-1.7c-1.7-0.3-3.3-0.5-4.9-0.5c-0.5,0-1,0-1.5,0.1 s-1,0.1-1.5,0.1c0.1,0.5,0.3,0.9,0.6,1.2c0.3,0.3,0.6,0.6,0.9,0.8c0.3,0.2,0.7,0.4,1.1,0.5c0.8,0.2,1.6,0.5,2.5,0.9 c0.9,0.4,1.8,0.8,2.7,1.3s1.8,1.1,2.6,1.8s1.6,1.5,2.2,2.4c0.4-0.3,0.8-0.7,1.1-1.1C78.8,31.2,79.2,30.8,79.5,30.3z" />
          <path fill="#FFFFFF"
            d="M109.3,33.6c-0.5,0.3-0.9,0.5-1.4,0.7c-0.5,0.2-1,0.4-1.4,0.7c0.5,1.1,1.1,2.1,1.7,3.1 c0.6,1,1.2,1.9,1.9,2.9c-1.7,0-3.3,0.2-4.8,0.5c-1.5,0.3-3,0.9-4.5,1.6c0.1-0.3,0.1-0.5,0.2-0.9c0-0.3,0-0.6,0-1 c0-0.6-0.1-1.3-0.2-2s-0.3-1.5-0.5-2.3c-0.5,0.1-1.1,0.1-1.6,0.2c-0.5,0-1.1,0.1-1.6,0.1c-0.9,0-1.8-0.1-2.6-0.2 c-0.8-0.1-1.7-0.4-2.4-0.7c-0.2,0.9-0.4,1.9-0.5,2.8c-0.2,1-0.3,1.9-0.5,3c-0.5-0.3-1.1-0.5-1.7-0.8c-0.5-0.2-1.2-0.4-1.9-0.5 c-0.7-0.2-1.6-0.2-2.5-0.2c-0.7,0-1.5,0.1-2.3,0.2s-1.6,0.4-2.5,0.7c0.8-0.9,1.5-1.7,2.2-2.6s1.3-1.7,1.9-2.5c0.6-0.8,1-1.6,1.5-2.3 c0.5-0.7,0.8-1.3,1.1-1.8c-0.3-0.4-0.6-0.8-0.8-1.3s-0.5-1-0.7-1.5c0.4,0.2,0.8,0.4,1.2,0.6c0.4,0.2,0.8,0.4,1.2,0.5l0,0 c0.5-1.1,1.1-2.2,1.7-3.3s1.2-2.1,1.9-3.1c-0.1-0.3-0.3-0.7-0.5-1.2c-0.2-0.4-0.4-0.9-0.7-1.4c-0.2-0.5-0.5-0.9-0.8-1.4 c-0.3-0.5-0.5-0.9-0.8-1.3c1,0.3,2,0.5,3.1,0.7c1,0.2,2.1,0.3,3.2,0.3c0.6-0.6,1.2-1.1,1.8-1.6c0.6-0.5,1.3-0.9,2-1.3 c-0.2,0.5-0.5,0.9-0.7,1.4c-0.2,0.5-0.5,0.9-0.7,1.4c0.6,0,1.2-0.1,1.8-0.2s1.2-0.2,1.8-0.3c0.4,1.7,0.9,3.4,1.4,5.1s1.1,3.3,1.7,5 c0.5-0.3,1-0.6,1.5-0.9s1-0.7,1.5-1.1c0.3,1.2,0.7,2.3,1.1,3.4C108.3,31.7,108.8,32.6,109.3,33.6z M98.3,31.5 c-0.9-2.2-2-4.4-3.2-6.8c-0.4,1.1-0.7,2.2-1.1,3.4c-0.3,1.2-0.7,2.4-1,3.6c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.8,0c0.6,0,1.3,0,1.9-0.1 C97,31.8,97.6,31.7,98.3,31.5z" />
          <path fill="#FFFFFF"
            d="M137.1,30.3c0,0.2,0,0.4,0.1,0.7c0,0.2,0,0.4,0,0.6c0,1.1-0.2,2.1-0.5,3s-0.8,1.8-1.4,2.6s-1.3,1.5-2,2.1 c-0.8,0.6-1.6,1.1-2.6,1.6c-0.9,0.4-1.9,0.8-2.9,1c-1,0.2-2,0.3-3,0.3c-0.9,0-1.9,0-2.7-0.1c-0.8-0.1-1.7-0.1-2.5-0.1 c-0.6,0-1.2,0-1.7,0.1c-0.5,0.1-1,0.3-1.5,0.5c-0.4-1.4-0.8-2.6-1.2-3.8c-0.4-1.1-0.8-2.1-1.2-2.9c-0.4-0.9-0.8-1.8-1.2-2.5 c1.2,0.6,2.4,1.1,3.6,1.5c1.2,0.4,2.4,0.6,3.4,0.8c1.1,0.2,2.1,0.3,3,0.4c0.9,0.1,1.6,0.1,2.2,0.1c0.7,0,1.3,0,2-0.1s1.4-0.2,2-0.4 c-0.2-0.2-0.3-0.4-0.5-0.6c-0.2-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.5-0.3c-0.3-0.1-0.7-0.3-1.2-0.4c-0.5-0.1-1.1-0.3-1.7-0.4 c-0.6-0.1-1.3-0.3-2-0.5s-1.4-0.4-2.1-0.7c-0.7-0.3-1.3-0.5-2-0.9c-0.7-0.4-1.2-0.7-1.7-1.1c-0.4-0.3-0.7-0.7-1-1.1 c-0.3-0.4-0.5-0.8-0.6-1.2c-0.1-0.4-0.3-0.8-0.3-1.2c-0.1-0.4-0.1-0.8-0.1-1.2c-0.4,0.1-0.7,0.3-1,0.4s-0.5,0.2-0.7,0.3l-0.6,0.3 c0.4-1.1,0.9-2.1,1.5-2.9c0.7-0.8,1.4-1.6,2.2-2.2c0.8-0.6,1.7-1.1,2.6-1.6c0.9-0.4,1.8-0.8,2.7-1c2.1-0.6,4.4-1,7-1.1 c0.8,0,1.6,0,2.5-0.1c0.7-0.1,1.6-0.1,2.6-0.2c1-0.1,2-0.3,3-0.5c-0.3,0.5-0.6,1-0.8,1.6s-0.4,1.1-0.5,1.7c-0.1,0.6-0.2,1.1-0.2,1.7 c0,0.6-0.1,1.1-0.1,1.5c0,0.3,0,0.6,0,0.8c0,0.3,0,0.5,0,0.7s0,0.4,0.1,0.6c-1.8-0.8-3.5-1.4-5.2-1.7c-1.7-0.3-3.3-0.5-4.9-0.5 c-0.5,0-1,0-1.5,0.1s-1,0.1-1.5,0.1c0.1,0.5,0.3,0.9,0.6,1.2c0.3,0.3,0.6,0.6,0.9,0.8c0.3,0.2,0.7,0.4,1.1,0.5 c0.8,0.2,1.6,0.5,2.5,0.9c0.9,0.3,1.8,0.8,2.7,1.3s1.8,1.1,2.6,1.8s1.6,1.5,2.2,2.4c0.4-0.3,0.8-0.7,1.1-1.1 C136.4,31.2,136.8,30.8,137.1,30.3z" />
          <path fill="#FFFFFF"
            d="M149.8,41.4c-0.8-0.2-1.6-0.4-2.4-0.4c-0.8-0.1-1.6-0.1-2.4-0.1s-1.6,0-2.4,0.1c-0.8,0.1-1.6,0.2-2.5,0.4 c0.9-2.2,1.5-4.4,2-6.8c0.5-2.3,0.7-4.6,0.7-7.1c0-1.5-0.1-2.9-0.3-4.4s-0.5-3-0.8-4.5c0.7,0.2,1.3,0.4,2,0.5 c0.6,0.2,1.3,0.3,1.9,0.4c0.7,0.1,1.3,0.2,2,0.3c0.7,0.1,1.4,0.1,2.1,0.1c0.1,1.6,0.1,3.3,0.1,5s0.1,3.2,0.1,4.9 c1-0.1,2-0.2,2.9-0.3c1-0.1,1.9-0.3,2.9-0.4c0.1-1.9,0.3-3.7,0.6-5.6s0.6-3.7,1.1-5.6c0.6,0.2,1.1,0.4,1.7,0.6 c0.5,0.2,1.1,0.3,1.6,0.4c0.6,0.1,1.1,0.2,1.7,0.2c0.6,0.1,1.2,0.1,1.9,0.1c0.1,0,0.3,0,0.4,0c0.2,0,0.3,0,0.5,0 c-0.7,1.4-1.2,2.8-1.7,4.2c-0.4,1.4-0.8,2.9-0.9,4.3c0.5-0.1,1-0.2,1.6-0.4c0.5-0.1,1-0.3,1.6-0.4c-0.1,0.7-0.2,1.4-0.2,2.1 c0,0.7-0.1,1.4-0.1,2.1s0,1.4,0.1,2.2s0.1,1.4,0.2,2.2c-0.5,0-1.1,0-1.6-0.1c-0.5,0-1-0.1-1.5-0.1c0.1,0.9,0.3,1.9,0.5,2.8 c0.2,0.9,0.5,1.9,0.8,2.8c-0.4,0-0.7-0.1-1.1-0.1c-0.3,0-0.7,0-1,0c-0.5,0-1,0-1.5,0.1c-0.5,0-1,0.1-1.5,0.2c-0.5,0.1-1,0.2-1.5,0.3 s-1,0.3-1.5,0.4c-0.1-1.3-0.2-2.6-0.3-3.9s-0.1-2.6-0.1-3.9c-1-0.3-1.9-0.5-2.9-0.8c-0.9-0.3-1.9-0.6-2.8-1c0,1.5,0,3-0.1,4.6 C149.9,38.3,149.8,39.8,149.8,41.4z" />
          <path fill="#FFFFFF"
            d="M179.1,18c-0.3,2.1-0.6,4.2-0.7,6.5c-0.2,2.2-0.3,4.3-0.3,6.6c0,1.7,0,3.3,0.1,4.9s0.2,3.2,0.4,4.8 c-0.4,0-0.8-0.1-1.2-0.1s-0.8,0-1.2,0c-0.9,0-1.9,0.1-2.8,0.2c-0.9,0.1-1.9,0.3-2.9,0.5c0.3-1.8,0.6-3.6,0.8-5.5s0.3-3.7,0.3-5.6 c0-1.6-0.1-3.3-0.2-4.9c-0.2-1.6-0.4-3.2-0.7-4.9c0.7-0.1,1.4-0.2,2.1-0.3c0.7-0.1,1.4-0.3,2.1-0.5c0.7-0.2,1.4-0.4,2.1-0.7 C177.6,18.6,178.3,18.3,179.1,18z" />
          <path fill="#FFFFFF"
            d="M208.6,28.2c0.1,1.2,0.1,2.4-0.2,3.5c-0.3,1.1-0.7,2.2-1.3,3.2c-0.6,1-1.3,2-2.2,2.8s-1.8,1.6-2.9,2.2 c-1.1,0.6-2.2,1.1-3.4,1.4c-1.2,0.3-2.4,0.5-3.7,0.5c-0.8,0-1.7-0.1-2.6-0.3s-1.7-0.6-2.6-1.1c-0.9,0.1-1.8,0.3-2.8,0.5 s-2,0.5-3,0.9c0.9-2.7,1.6-5.5,2.1-8.3c0.5-2.7,0.8-5.5,0.8-8.4c-0.4,0.2-0.7,0.3-1.1,0.6c-0.4,0.2-0.7,0.4-1.1,0.7 c0-0.3,0.1-0.5,0.1-0.8c0-0.2,0-0.5,0-0.8c0-1.2-0.2-2.4-0.5-3.5c-0.4-1.1-0.9-2.1-1.6-3.1c0.4-0.1,0.8-0.2,1.3-0.3 c0.5-0.1,1.1-0.2,1.6-0.3c0.6-0.1,1.2-0.2,1.8-0.2c0.6-0.1,1.2-0.1,1.8-0.2s1.1-0.1,1.6-0.1c0.5,0,0.9,0,1.3,0 c1.5,0,2.9,0.1,4.2,0.4c1.3,0.2,2.5,0.6,3.6,1c1.1,0.4,2.1,1,3,1.6s1.6,1.3,2.2,2.1c0.6,0.8,1.1,1.6,1.4,2.5 c0.3,0.9,0.5,1.8,0.5,2.7c0,0.2,0,0.3,0,0.5s0,0.3,0,0.5c0.3-0.1,0.5-0.2,0.7-0.2S208.4,28.3,208.6,28.2z M201.6,29.4 c-0.2-0.6-0.5-1.2-0.8-1.7c-0.4-0.5-0.8-0.9-1.2-1.3c-0.5-0.4-1-0.7-1.5-0.9c-0.5-0.3-1.1-0.5-1.6-0.6c-0.5-0.2-1.1-0.3-1.6-0.4 c-0.5-0.1-1-0.1-1.5-0.2c-0.1,2.5-0.1,4.9-0.1,7.5c0,2.2,0,4.5,0.1,6.8c1-0.3,1.9-0.7,2.8-1.2s1.6-1.1,2.2-1.9 c0.6-0.7,1.1-1.6,1.4-2.6c0.3-1,0.4-2,0.3-3.2c0.2,0,0.5,0,0.7,0C201.1,29.4,201.3,29.4,201.6,29.4z" />
          <path fill="#FFFFFF"
            d="M233.2,18.6c-0.4,0.4-0.8,0.7-1.1,1.1c-0.4,0.4-0.7,0.8-1,1.2c1.1,0.2,2.1,0.6,3,1.1s1.8,1.1,2.5,1.9 c0.7,0.8,1.3,1.6,1.7,2.7c0.4,1,0.6,2.1,0.6,3.4c0,1.4-0.2,2.6-0.6,3.8c-0.4,1.1-1,2.1-1.7,3s-1.6,1.6-2.6,2.3 c-1,0.6-2.1,1.2-3.2,1.6c-1.2,0.4-2.4,0.7-3.7,0.9c-1.3,0.2-2.6,0.3-3.9,0.3c-0.5,0-0.9,0-1.4,0s-1,0-1.4-0.1 c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.1-0.7-0.1-1-0.3c0.4-0.3,0.7-0.6,1-0.9s0.6-0.6,0.8-0.9c-1.1-0.2-2.1-0.5-3-1 c-0.9-0.5-1.8-1-2.5-1.7c-0.7-0.7-1.3-1.5-1.7-2.5s-0.6-2.1-0.6-3.3c0-1.5,0.2-2.8,0.7-4c0.5-1.2,1.1-2.2,2-3.1 c0.8-0.9,1.8-1.7,2.9-2.4c1.1-0.7,2.3-1.2,3.6-1.6c1.3-0.4,2.6-0.7,4-0.9c1.4-0.2,2.8-0.3,4.2-0.3c0.6,0,1.2,0,1.8,0 C231.9,18.5,232.6,18.6,233.2,18.6z M232,28.7c0-0.6-0.1-1.1-0.2-1.6c-0.1-0.5-0.3-0.9-0.6-1.3c-0.3-0.4-0.6-0.7-0.9-1 c-0.3-0.3-0.7-0.5-1.1-0.7c-0.2,0.4-0.3,0.7-0.4,1.1c-0.1,0.4-0.2,0.7-0.4,1.1c-0.6-0.2-1.1-0.3-1.6-0.4s-1-0.1-1.4-0.1 c-0.8,0-1.5,0.1-2.3,0.4c-0.8,0.3-1.5,0.7-2.1,1.2c-0.6,0.5-1.1,1.1-1.5,1.8s-0.6,1.5-0.6,2.4c0,0.5,0.1,0.9,0.2,1.3 c0.1,0.4,0.3,0.8,0.6,1.2c0.2,0.4,0.5,0.8,0.9,1.1c0.3,0.4,0.7,0.7,1.1,1c0.1-0.4,0.3-0.8,0.3-1.3c0.1-0.4,0.1-0.9,0.1-1.3 c0.7,0.3,1.3,0.6,1.9,0.7s1.2,0.2,1.7,0.2c0.8,0,1.6-0.1,2.3-0.4c0.7-0.3,1.4-0.7,2-1.2s1.1-1.1,1.4-1.9 C231.9,30.5,232,29.6,232,28.7z" />
          <path fill="#FFFFFF" d="M25.6,7c0-1.5-1.2-3.2-2.7-3.2c-1.5,0-2.7,1.7-2.7,3.2" />
          <path fill="#FFFFFF" d="M23,56.2c3.2,0,6-2.2,7-5.3h-14C17.1,54,19.8,56.2,23,56.2z" />
          <ellipse fill="#FFFFFF" cx="16.5" cy="20.3" rx="2.1" ry="2.7" />
          <path fill="#FFFFFF"
            d="M22.9,6.5C14,6.5,6.8,13.6,6.8,22.5L8,40.2c0.5,4.8,2.6,8.6,7.5,9.1h15c4.9-0.5,7-4.2,7.5-9.1l1.1-17.7 C39.1,13.6,31.8,6.5,22.9,6.5z M18.4,34.2c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3S19.1,34.2,18.4,34.2z M22.9,34.8 c-1.1,0-1.9-0.9-1.9-1.9s0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9S24,34.8,22.9,34.8z M27.6,34.2c-0.7,0-1.3-0.6-1.3-1.3 s0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3S28.3,34.2,27.6,34.2z M22.9,25.8c-7.4,0-13.4,3.8-13.4-3.6S15.5,9.6,22.9,9.6 c7.4,0,13.4,5.1,13.4,12.5C36.3,29.6,30.4,25.8,22.9,25.8z" />
          <ellipse fill="#FFFFFF" cx="29.4" cy="20.3" rx="2.1" ry="2.7" />
          <path fill="#FFFFFF"
            d="M4.2,29.5L4.2,29.5c-0.9,0-1.6,0.7-1.6,1.5v15.1c0,0.8,0.7,1.5,1.5,1.5h0.1c0.8,0,1.5-0.7,1.5-1.5V31 C5.8,30.2,5.1,29.5,4.2,29.5z" />
          <circle fill="#FFFFFF" cx="4.2" cy="46.1" r="3.2" />
          <path fill="#FFFFFF"
            d="M10.8,35.3h-4c-2.3,0-4.1-1.8-4.1-4.1v-0.3c0-2.3,1.8-4.1,4.1-4.1h4c2.3,0,4.1,1.8,4.1,4.1v0.3 C14.9,33.5,13.1,35.3,10.8,35.3z" />
          <path fill="#FFFFFF"
            d="M41.8,29.5L41.8,29.5c-0.9,0-1.6,0.7-1.6,1.5v15.1c0,0.8,0.7,1.5,1.5,1.5h0.1c0.8,0,1.5-0.7,1.5-1.5V31 C43.3,30.2,42.6,29.5,41.8,29.5z" />
          <circle fill="#FFFFFF" cx="41.7" cy="46.1" r="3.2" />
          <path fill="#FFFFFF"
            d="M39.2,35.3h-4c-2.3,0-4.1-1.8-4.1-4.1v-0.3c0-2.3,1.8-4.1,4.1-4.1h4c2.3,0,4.1,1.8,4.1,4.1v0.3 C43.3,33.5,41.5,35.3,39.2,35.3z" />
        </svg>
      </a>
      for developers.
      <svg className="heart" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="12">
        <path d="M39.4,14C7.8,13.4-21.4,62.8,63.7,114c0.1-0.2,0.5-0.2,0.5,0c87.9-52.8,53.9-103.7,21.3-99.8 C72.8,15.8,66.8,22.8,64,28.9c-2.8-6.1-8.8-13.1-21.5-14.7C41.4,14.1,40.4,14,39.4,14L39.4,14z" />
      </svg>
    </div>
  );
}

export default PoweredBy;
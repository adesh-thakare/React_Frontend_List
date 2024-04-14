import React, { useState, useEffect } from "react";
import arrow from "../assets/arrow.png";
import avatar from "../assets/avatar@3x.png";
import closeIcon from "../assets/closeIcon.png";


import axios from 'axios';

const FrameMain = () => {

  const [data, setData] = useState([]);
  const [count_members, setCountMembers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://nodebackend-production-c21f.up.railway.app/top-authors');
                setData(response.data);
                setCountMembers(response.data.length);
                //console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


  return (
    <div
      style={{
        width: "100%",
        // height: "983px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          //   height: "744px",
          marginTop: "108px",
          height: "auto",

          marginBottom: "131px",
          width: "588px",
          boxShadow: "0px 8px 12px -2px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/*------------ Frame17------------------ */}

        <div
          style={{
            width: "361px",
            height: "32px",
            marginTop: "16px",
            marginLeft: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img 
            src={arrow}
            style={{ width: "24px", height: "20px", marginLeft: "4px" }}
          ></img>
          <span
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            You have {count_members} members
          </span>
        </div>

        {/*----------- Frame16---------- */}
        {/* APPLY LOOP MAP HERE */}
      <div>
       {data.map((item, index) => (
        <div key={index}>
        <div 
          style={{
            marginLeft: "12px",
            marginTop: "8px",
            width: "564px",
            // height: "672px",
            height: "auto",
          }}
        >
          {/*--------------- LIST------------------------- */}
          <div
            style={{
              height: "84px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "48px", height: "48px" }} src={avatar}></img>
            <div
              style={{
                width: "436px",
                height: "46px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span
                style={{
                  marginLeft: "24px",
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "14px",
                  color: "#000000",
                  height: "21px",
                }}
              >
                 {item.name}
              </span>
              <span
                style={{
                  height: "21px",
                  marginLeft: "24px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#4E616B",
                }}
              >
                {item.email}
              </span>
            </div>
            <img
              src={closeIcon}
              style={{ width: "26px", height: "26px", cursor: "pointer" }}
            ></img>
          </div>

          {/*----------------------------- Divider-------------------------- */}
          <div style={{ border: "1px solid #F4F5F6" }}></div>
        </div>
      </div>
      ))}
    </div>
    </div>
    </div>              
  );
};

export default FrameMain;

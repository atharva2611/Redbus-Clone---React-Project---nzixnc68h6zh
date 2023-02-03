import React, { useEffect, useState } from "react";
export const BusCard = ({ show }) => {
  // const [ticketPrice, setTicketPrice] = useState(
  //   localStorage.getItem("ticketPrice")
  // );
  let seatArr = [];
  var count = 0;
  
  const handleClick = (e) => {
    if (!seatArr.includes(e.target.id)) {
      seatArr.push(e.target.id);
      document.getElementById(e.target.id).style.backgroundColor = "red";
      count = count+1;
      console.log(e.target.id);
    } else {
      seatArr.pop(e.target.id);
      document.getElementById(e.target.id).style.backgroundColor =
      "rgb(219, 219, 219)";
      console.log(e.target.id);
      count = count-1;
    }
    console.log(seatArr);
  };
  var handleCount = (e) => {
    alert(`Booked ${count} seats with ${show.busName} your ticket price is ${count*show.ticketPrice}`);
  }
  return (
    <>
      {show && show.busName ? (
        <div id="bus-cards">
          <div id="bus-card-list">
            <div id="bus-card-layer">
              <div id="bus-list-schedule">
                <h3>{show.busName}</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Departure Time <br /> {show.departureTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Arrival Time <br /> {show.arrivalTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>Bus rating 9/10</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Price <br /> {show.ticketPrice}
                </h3>
              </div>
            </div>
            <div id="image">
              <img
                src="https://cdn.dribbble.com/users/2272786/screenshots/10965290/stay_home_splash_screen.gif"
                alt=""
              />
            </div>
            <div id="bus-seat-select">
              <div id="top">
                <div id="mainTop">
                  <div id="top1" onClick={handleClick} className="top1"></div>
                  <div id="top2" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top3" onClick={handleClick} className="top1"></div>
                  <div id="top4" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top5" onClick={handleClick} className="top1"></div>
                  <div id="top6" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top7" onClick={handleClick} className="top1"></div>
                  <div id="top8" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top9" onClick={handleClick} className="top1"></div>
                  <div id="top10" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top11" onClick={handleClick} className="top1"></div>
                  <div id="top12" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top13" onClick={handleClick} className="top1"></div>
                  <div id="top14" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top15" onClick={handleClick} className="top1"></div>
                  <div id="top16" onClick={handleClick} className="top2"></div>
                </div>
              </div>
              <div id="bottom">
                <div id="mainBottom">
                  <div
                    id="bottom1"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom2"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom3"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom4"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom5"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom6"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom7"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom8"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
              </div>
            </div>
            <div id="book-ticket">
              <button onClick={handleCount}  type="submit">BOOK TICKET</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

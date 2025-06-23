import React from "react";
import { Reserv } from "./reserv";
import { ReservQuery } from "./query";
import { ReservModify } from "./reservmodify";
import { ReservCancel } from "./cancel";
import { ReservMenu } from "./reservMenu";

export const Reservation = ({setService}) => {
    return (
          <div class="reservation-wrap">
            <h1> 항공권예약</h1>
            <ReservMenu />
            <Reserv />
            <ReservQuery />
            <ReservModify />
            <ReservCancel />
          </div>
    );
}
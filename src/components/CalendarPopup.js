import React from "react"

import "../css/color.css"

class CalendarPopup extends React.Component {
  render() {
    // let reservation = { confirm_id: "GHYTGU" }

    return (
      <div>
        <div className="calendar-popup">
          <div className="row">
            <div className="col-xs">
              <p>
                <span>
                  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </span>
                Date
              </p>
            </div>
            <div className="col-xs">
              <p>
                <span>
                  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </span>
                Time
              </p>
            </div>
          </div>
          <div className="date-popup">
            <table>
              <tbody>
                <tr>
                  <td className="">28</td>
                  <td className="">29</td>
                  <td className="">30</td>
                  <td className="">31</td>
                  <td className="">1</td>
                  <td className="">2</td>
                  <td className="">3</td>
                </tr>
                <tr>
                  <td className="">25</td>
                  <td className="">26</td>
                  <td className="">27</td>
                  <td className="">28</td>
                  <td className="">29</td>
                  <td className="">30</td>
                  <td className="">1</td>
                </tr>
                <tr>
                  <td className="">2</td>
                  <td className="">3</td>
                  <td className="">4</td>
                  <td className="">5</td>
                  <td className="">6</td>
                  <td className="">7</td>
                  <td className="">8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="time-popup">
            <table>
              <tbody>
                <tr>
                  <td className="">28</td>
                  <td className="">29</td>
                  <td className="">30</td>
                  <td className="">31</td>
                  <td className="">1</td>
                  <td className="">2</td>
                  <td className="">3</td>
                </tr>
                <tr>
                  <td className="">25</td>
                  <td className="">26</td>
                  <td className="">27</td>
                  <td className="">28</td>
                  <td className="">29</td>
                  <td className="">30</td>
                  <td className="">1</td>
                </tr>
                <tr>
                  <td className="">2</td>
                  <td className="">3</td>
                  <td className="">4</td>
                  <td className="">5</td>
                  <td className="">6</td>
                  <td className="">7</td>
                  <td className="">8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarPopup

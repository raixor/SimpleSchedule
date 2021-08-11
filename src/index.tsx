import { render } from "react-dom";
import React, { useCallback, useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isWithinInterval } from "date-fns";
import SelectDateRange from './components/selectDate';
import { bookings } from './utils/fakedata';

const now = new Date();
const tomorrow = new Date(now);
const tomorrow4 = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow4.setDate(tomorrow.getDate() + 4);

const Widget: React.FC = () => {
  // const disabledRanges: any = [];
  // const disabledRanges = [[now.setDate(now.getDate() + 1), now.setDate(now.getDate() + 4)]];
  const [disabledRanges, setDisabledRanges] = useState<any>(bookings.map(b => [new Date(b.startDate), new Date(b.endDate)]));
  // const [disabledRanges, setDisabledRanges] = useState<any>([]);

  const [valueStart, setValueStart] = useState(new Date('Fri Aug 14 2021 00:00:00 GMT+0200 (CEST)'));
  const [valueEnd, setValueEnd] = useState(tomorrow4);

  useEffect(() => {
    console.log(valueStart)
    // setDisabledRanges([[valueStart, valueEnd]])
  }, [valueStart, valueEnd]);

  useEffect(() => {
    console.log(disabledRanges)
  }, [disabledRanges]);

  const tileDisabled = useCallback(({ date, view }: any) => {
      // Add class to tiles in month view only
      if (view === 'month') {
        // Check if a date React-Calendar wants to check is within any of the ranges
        return isWithinRanges(date, disabledRanges);
      }
  }, [disabledRanges]);

  function isWithinRange(date: any, range: any) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }
  
  function isWithinRanges(date: any, ranges: any) {
    return ranges.some((range: any) => isWithinRange(date, range));
  }

  const [value, setValue] = useState(new Date());


  const onChange = (nextValue: any) => {
    setValue(nextValue);
  }

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'black'}}>
    <div style={{ maxWidth: 500}}>

      <Calendar
        tileDisabled={tileDisabled}
        onChange={onChange}
        value={value}
      />

<SelectDateRange valueStart={valueStart} valueEnd={valueEnd} setValueStart={setValueStart} setValueEnd={setValueEnd} />
    </div>

    </div>
  );
};
export default Widget;

const rootElement = document.getElementById("root");
render(<Widget />, rootElement);

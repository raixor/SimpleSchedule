import React, { useCallback, useEffect, useState } from "react";
import DatePicker from 'react-date-picker';

const now = new Date();
const tomorrow = new Date(now);
const tomorrow4 = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow4.setDate(tomorrow.getDate() + 4);

const SelectDateRange = ({valueStart, valueEnd, setValueStart, setValueEnd}: any) => {
    return <div style={{ maxWidth: 500}}>
    <DatePicker
      onChange={setValueStart}
      value={valueStart}
    />

<DatePicker
      onChange={setValueEnd}
      value={valueEnd}
    />
    </div>
}

export default SelectDateRange;
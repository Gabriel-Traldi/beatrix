import React from 'react';

import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

const GenericInputDate: React.FC<DatePickerProps> = ({ ...props }) => {
  return <DatePicker {...props} />;
};

export default GenericInputDate;

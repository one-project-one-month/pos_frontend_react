import React, { useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { useSelector } from "react-redux";

const DateRange = () => {
  const color = useSelector((state) => state.animateSlice);

  const parentElement = document.querySelector(".rdrDateRangePickerWrapper");
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  function changeCssValue(parent, propertyName, newValue) {
    if (!parent || !parent.childNodes) {
      return; // Exit if no parent or no child nodes
    }

    for (let i = 0; i < parent.childNodes.length; i++) {
      const childNode = parent.childNodes[i];
      childNode.style?.setProperty(propertyName?.BgProp, newValue?.BgColor);
      childNode.style?.setProperty(propertyName?.TextProp, newValue?.TextColor);

      if (childNode.nodeType === Node.ELEMENT_NODE) {
        changeCssValue(childNode, propertyName, newValue);
      }
    }
  }

  changeCssValue(
    parentElement,
    {
      BgProp: "background-color",

      TextProp: "color",
    },
    { BgColor: color.cardBgColor, TextColor: color.textColor }
  );

  useEffect(() => {
    changeCssValue(
      parentElement,
      {
        BgProp: "background-color",

        TextProp: "color",
      },
      { BgColor: color.cardBgColor, TextColor: color.textColor }
    );
  }, []);
  return (
    <div className=" flex p-2 absolute left-[50%] ">
      <DateRangePicker
        ranges={[selectionRange]}
        rangeColors={[`${color.cardBgColor}`, `${color.bgColor}`]}
      />
    </div>
  );
};

export default DateRange;

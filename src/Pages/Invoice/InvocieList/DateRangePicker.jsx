import React, { useEffect } from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range';
import { InvoiceSkeleton } from '../../../Components/skeletons/InvoiceSkeleton'
import "../invoice.css"
import { useSelector } from 'react-redux';

const DateRangePickers = ({click,setClick,loading,date,setDate,datRef}) => {

  const color = useSelector((state) => state.animateSlice);

  const parentElement = document.querySelector(".rdrDateRangeWrapper");
  const exceptEl = document.querySelector(".rdrDays");

  const dateRangeHandler = () => {
    setClick(!click)
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };

  const currentStartDate = date[0].startDate.toLocaleDateString('en', options);
  const currentEndDate = date[0].endDate.toLocaleDateString('en', options);
  
  function changeCssValue(parent, propertyName, newValue) {
    if (!parent || !parent.childNodes || parent === exceptEl) {
      return;
    }

    for (let i = 0; i < parent.childNodes.length; i++) {
      const childNode = parent.childNodes[i];

      parent !== exceptEl &&
        childNode.style?.setProperty(propertyName?.BgProp, newValue?.BgColor);
      parent !== exceptEl &&
        childNode.style?.setProperty(
          propertyName?.TextProp,
          newValue?.TextColor
        );

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
    { BgColor: color.cardBgColor, TextColor: color.textColor,icon :color.iconColor }
    
  );

  useEffect(() => {
    changeCssValue(
      parentElement,
      {
        BgProp: "background-color",

        TextProp: "color",
      },
      {
        BgColor: color.cardBgColor,
        TextColor: color.textColor,
      }
    );
  }, [click]);

const monthYearWrapper = document.querySelector(".rdrMonthAndYearWrapper"); // Descriptive name

function changeButtonColor(buttons,newColor) {
  if (!buttons) {
    console.error("Button elements not found.");
    return; // Exit function if no buttons found
  }

  buttons.forEach(button => {
    button.style.backgroundColor = newColor;
    buttons[0].firstChild.style.backgroundColor = newColor
    buttons[1].firstChild.style.backgroundColor = newColor
  });
}

useEffect(() => {
  if (monthYearWrapper && click) {
    const buttonElements = monthYearWrapper.querySelectorAll(".rdrNextPrevButton");
    console.log(buttonElements[1]);

    if (!buttonElements) {
      console.error("Next/Prev buttons not found within month/year wrapper.");
      return; // Exit function if buttons not found within wrapper
    }

    changeButtonColor(buttonElements,"rgb(229,231,235)");
  } else {
    console.error("Parent element not found or 'click' state not set.");
  }
}, [click]);


  return (
    <div className="min-w-[30%] relative" ref={datRef}>
        <li>
        {loading ? (
            <InvoiceSkeleton/>
        ) : (
            // <button className="bg-white border border-gray-7 text-gray-900 text-sm
            // rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            // p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            // dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
            // space-x-1 hover:border-blue-500"
            // onClick={dateRangeHandler}>
            //     <span className="font-light text-gray-500">From :</span>
            //     <span>{currentStartDate}</span>
            //     <span> - </span>
            //     <span className="font-light text-gray-500">To :</span>
            //     <span>{currentEndDate}</span>
            // </button>
            <button className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 
            placeholder-gray-400 text-gray-200 focus:ring-blue-500 focus:border-blue-500 
            space-x-1 hover:border-blue-500"
            onClick={dateRangeHandler}>
                <span className="font-light text-gray-400">From :</span>
                <span>{currentStartDate}</span>
                <span> - </span>
                <span className="font-light text-gray-400">To :</span>
                <span>{currentEndDate}</span>
            </button>
        )}
        </li>
            <li 
            style={{
              visibility : click ? 'visible' : 'collapse'
            }}
            className="absolute right-0 top-[48px] z-50">          
            <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            color={"black"}
            retainEndDateOnFirstSelection
            rangeColors={['rgb(59,130,246)']}
            />
            </li>
    </div>
  )
}

export default DateRangePickers
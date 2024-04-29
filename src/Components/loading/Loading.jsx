import React from "react";
import "./Loading.css";

export const Loading = ({ isLoading }) => {
    return (
        isLoading && (
            <div  className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    );
};

export const LoadingTwo = ({ isLoading }) => {
    return (
        isLoading && (
            <div  className="lds-roller  ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    );
};

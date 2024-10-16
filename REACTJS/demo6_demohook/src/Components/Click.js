import React, { useEffect, useState } from "react";

function Click(props) {
    // Khai báo State  các count để lưu trữ số lần người dùng click vào nút Click
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(5);
    const [bgColor, setBgColor] = useState("red");

    // Hàm xử lý sự kiện khi nhấn nút   
    const handleClick = (type) => {
        switch (type) {
            case "click1":
                setCount1(count1 + 1);     // Thay đổi giá trị State count1
                break;
            case "click2":
                setCount2(count2 + 5);     // Thay đổi giá trị State count2
                break; 
            case "click3":
                setBgColor(bgColor === "red" ? "lightblue" : "white");           // Thay đổi giá trị State bgColor
                break;
            default:
                break;
        }
    };

    // Khai báo useEffect
    useEffect(() => {
        console.log("Đoạn code 1 được gọi!!");
    } , [count1]);
    useEffect(() => {
        console.log("Đoạn code 2 được gọi!!");
    } , [count2]);
    useEffect(() => {
        console.log("Đoạn code 3 được gọi!!");
    } , []);

    // 
    useEffect(() => {
        // Logic    
        return () => {
        console.log("Đoạn code 2 được gọi!!");
        };
    });


    return (
        <>
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-lg-6">
                    <button type="button" className="btn btn-info" onClick={() => handleClick("click1")}>
                        Click 1
                    </button>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-6">
                    <h4>Bạn đã click {count1} lần vào click 1</h4>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-lg-6">
                    <button type="button" className="btn btn-info" onClick={() => handleClick("click2")}>
                        Click 2
                    </button>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-6">
                    <h4>Bạn đã click {count2} lần vào click 2</h4>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-lg-6">
                    <button type="button" className="btn btn-warning" onClick={() => handleClick("click3")}>
                        Click 3
                    </button>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-6">
                    <h4 style={{ backgroundColor: bgColor }}>Bạn đã click và đổi màu</h4>
                </div>
            </div>
        </>
    );
}

export default Click;

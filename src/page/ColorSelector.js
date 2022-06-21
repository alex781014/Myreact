// function ColorSelector(props) {
//     const { bgcolor, handleClick } = props;
//     return (
//         <div className="col-3">
//             <div className="color-selector autobg" style={{ backgroundColor: bgcolor }} onClick={handleClick}></div>
//         </div>
//         // 
//     )
// }

// export default ColorSelector;
function ColorSelector(props) {
    const { bgColor, handleClick } = props;

    return (
        <div className="col-3">
            <div className="color-selector autobg"
                style={{ backgroundColor: bgColor }}
                onClick={handleClick}
            ></div>
        </div>
    );
}

export default ColorSelector;
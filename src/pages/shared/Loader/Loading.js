import React from 'react';
import "../../../styles/Loader.css"

const Loading = () => {
    return (
        <div className="h-screen w-screen">
            <div className="" style={{position: 'absolute',left: '50%',transform: 'translate(-50%,45% )'}}>
                <div class="loadingio-spinner-ripple-ov4jap425f"><div class="ldio-q8ov80d0cz">
                    <div></div><div></div>
                </div></div>
            </div>
        </div>
    );
};

export default Loading;



{/* <div className="absolute left-0 right-0 ml-auto mr-auto w-[400px]">
            <div class="loadingio-spinner-ripple-57m5gy0g408"><div class="ldio-r77069wj6g">
                <div></div><div></div>
            </div></div>

        </div> */}
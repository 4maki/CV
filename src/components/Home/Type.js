import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: ["Frontend Developer", "Web design"],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
            }}
        />
    );
}

export default Type;

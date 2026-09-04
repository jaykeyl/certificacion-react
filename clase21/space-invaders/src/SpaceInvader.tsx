import { useState, useEffect } from 'react';
import './SpaceInvader.css';

type Block = {
    x: number;
    y: number;
}

export default function SpaceInvader() {

    const [left, setLeft] = useState<number>(45);
    const [bottom, setBottom] = useState<number>(5);

    const [topAlien, setTopAlien] = useState<number>(0);
    const [leftAlien, setLeftAlien] = useState<number>(40);

    const [aliens, setAliens] = useState<Array<Block>>([]);
    
    const calculatingLeftAlien = ():number => {
        let anchobloque = 5;
        return (Math.floor(Math.random() * 3) - 1) * anchobloque;
    }

    //bullet moving upwards
    useEffect (() => {
    const down:number = setInterval (() =>{
        setTopAlien((anterior) => {
            return anterior + 5
        });
    }, 1000)
    return () => {
        clearInterval(down);
    }
    }, [] );

    // //alien moving downwards
    // useEffect (() => {
    // const up:number = setInterval (() =>{
    //     setBottom((anterior) => {
    //         return anterior + 5
    //     });
    // }, 1000)
    // return () => {
    //     clearInterval(up);
    // }
    // }, [] );

    // //alien moving to the left
    // useEffect (() => {
    // const leftAlien:number = setInterval (() =>{
    //     setLeftAlien((anterior) => {
    //         return anterior + calculatingLeftAlien()
    //     });
    // }, 1000)
    // return () => {
    //     clearInterval(leftAlien);
    // }
    // }, [] );

    // up to 5 aliens begin moving
    useEffect(() => {

    const generateAliens = setInterval(() => {

        setAliens((anterior) => {

            if (anterior.length >= 5) {
                return anterior;
            }

            const anchoVentana = document.body.clientWidth / 16;
            const altoVentana = document.body.clientHeight / 16;

            const anchoAlien = 5;
            const altoAlien = 5;

            const nuevoAlien: Block = {
                x: Math.floor(Math.random() * (anchoVentana - anchoAlien)),
                y: 0
            };

            return [...anterior, nuevoAlien];

        });

    }, 1000);

    return () => {
        clearInterval(generateAliens);
    };

    }, []);


    // aliens go down
        useEffect(() => {
        const down: number = setInterval(() => {
            setAliens((anterior) => {
                return anterior.map((alien) => {
                    const altoVentana = document.body.clientHeight / 16;
                    const altoAlien = 5;
                    return {
                        ...alien,
                        y: Math.min(
                            alien.y + 5,
                            altoVentana - altoAlien
                        )
                    };
                });
            });
        }, 1000);
        return () => {
            clearInterval(down);
        };
    }, []);

    useEffect(() => {
        const move: number = setInterval(() => {
            setAliens((anterior) => {
                const anchoVentana = document.body.clientWidth / 16;
                const anchoAlien = 5;
                return anterior.map((alien) => {
                    const nuevoX =
                        alien.x + calculatingLeftAlien();
                    return {
                        ...alien,
                        x: Math.max(
                            0,
                            Math.min(
                                nuevoX,
                                anchoVentana - anchoAlien
                            )
                        )
                    };
                });
            });
        }, 1000);
        return () => {
            clearInterval(move);
        };
    }, []);


    return (
        <>
        {aliens.map((alien, index) => (
        <div
            key={index}
            className="alien"
            style={{
                top: `${alien.y}rem`,
                left: `${alien.x}rem`
            }}
        ></div>
    ))}
        <div className="gun"></div>
        <div 
            className="shot" 
            style={{ left: `${left}rem`, bottom: `${bottom}rem` }}
        ></div>
        </>
    );
}
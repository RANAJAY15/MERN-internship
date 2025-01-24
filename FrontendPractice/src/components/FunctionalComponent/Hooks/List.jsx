import { useEffect, useState } from "react";

const ListItem = ({ func1 }) => {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        setNumbers(func1());
    }, [func1]);

    return (
        <div>
            <h3>The number of list</h3>
            <div>
                {numbers.map((number, index) => {
                    return <h4 key={index}>{number}</h4>;
                })}
            </div>
        </div>
    );
};

export default ListItem;
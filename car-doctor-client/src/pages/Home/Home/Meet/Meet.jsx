import { useEffect, useState } from "react";
import MeetCard from "./MeetCard";

const Meet = () => {
    const [meets, setMeet] = useState([]);
    useEffect(() => {
        fetch('meet.json').then(res => res.json())
            .then(data => setMeet(data));
    }, [])
    return (
        <div className="mt-6 mb-6">
            <div className="space-y-3 text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Team</h3>
                <h3 className="text-5xl font-bold">Meet Our Team</h3>
                <p className="text-[#737373]">
                    the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    meets.map(meet => <MeetCard
                        key={meet._id}
                        meet={meet}
                    ></MeetCard>)

                }
            </div>

        </div>
    );
};

export default Meet;
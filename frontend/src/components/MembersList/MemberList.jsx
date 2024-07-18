import { useEffect, useState } from "react"
import { getMembers } from "../../services/api";
import './MembersList.css'


const MembersList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await getMembers();
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };
        fetchMembers();
    }, []);

    return (
        <div className="container">
            <h2>Members</h2>
            <ul>
                {members.map((member) => (
                    <li key={members.id}>{member.first_name} {member.last_name}</li>
                ))}
            </ul>
        </div>
    )
}

export default MembersList;
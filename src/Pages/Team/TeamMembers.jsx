import img1 from '../../assets/img/team/team-1.jpg'
import img2 from '../../assets/img/team/team-2.jpg'
import img3 from '../../assets/img/team/team-3.jpg'
import img4 from '../../assets/img/team/team-4.jpg'
import { Icon } from '@iconify/react';
function TeamMembers() {
    const members = [
        {
        id:1,
        img: img1,
        name: 'Walter White',
        position: 'Chief Executive Officer',
        text: 'Explicabo voluptatem mollitia et repellat qui dolorum quasi'
        },
        {
        id:2,
        img: img2,
        name: 'Sarah Jhonson',
        position: 'Product Manager',
        text: 'Aut maiores voluptates amet et quis praesentium qui senda para'
        },
        {
        id:3,
        img: img3,
        name: 'William Anderson',
        position: 'CTO',
        text: 'Quisquam facilis cum velit laborum corrupti fuga rerum quia'
        },
        {
        id:4,
        img: img4,
        name: 'Amanda Jepson',
        position: 'Accountant',
        text: 'Dolorum tempora officiis odit laborum officiis et et accusamus'
        },

]
  return (
        <div className='teamMembers'>
        {members.map((member)=>(
                <div className="teamMember" key={member.id}>
                    <div className="profilePic">
                        <img src={member.img} alt="member image" />
                    </div>
                    <div className="memberInfo">
                        <h3>{member.name}</h3>
                        <span>{member.position}</span>
                        <p>{member.text}</p>
                        <div className="socials">
                            <span><Icon icon="simple-icons:x" /></span>
                            <span><Icon icon="bxl:facebook" /></span>
                            <span><Icon icon="ant-design:instagram-filled" /></span>
                            <span><Icon icon="mdi:linkedin" /></span>
                        </div>
                    </div>
                </div>
        ))}
        </div>
  )
}

export default TeamMembers
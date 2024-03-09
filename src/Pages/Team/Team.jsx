import './Team.css'
import TeamMembers from './TeamMembers'

function Team() {
  return (
    <main className='teamContainer'>
        <div className='aboutHeading'>
            <h2>TEAM</h2>
            <span> <small></small> </span>
        </div>
        <p className='servicesText'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <TeamMembers/>
    </main>
  )
}

export default Team
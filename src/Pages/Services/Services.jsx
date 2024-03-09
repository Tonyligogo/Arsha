import './Services.css'
import { Icon } from '@iconify/react';

function Services() {
  return (
    <main className='servicesContainer'>
        <div className='aboutHeading'>
            <h2>Services</h2>
            <span> <small></small> </span>
        </div>
        <p className='servicesText'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className='cards'>
            <div className="card">
                <span><Icon icon="icon-park-outline:dribble" color="#47b2e4" width="34" /></span>
                <span>Lorem Ipsum</span>
                <span>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</span>
            </div>
            <div className="card">
                <span><Icon icon="bx:file" color="#47b2e4" width="34" /></span>
                <span>Sed ut perspici</span>
                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</span>
            </div>
            <div className="card">
                <span><Icon icon="mdi:speedometer" color="#47b2e4" width="34" /></span>
                <span>Magni Dolores</span>
                <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</span>
            </div>
            <div className="card">
                <span><Icon icon="fe:layer" color="#47b2e4" width="34" /></span>
                <span>Nemo Enim</span>
                <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</span>
            </div>
        </div>
    </main>
  )
}

export default Services